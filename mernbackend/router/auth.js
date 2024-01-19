const express = require ('express');
const jwt = require('jsonwebtoken');
const router= express.Router();
const bcrypt = require ('bcrypt')
require('../db/conn');
const User = require('../modal/userSchema')
const authenticate = require('../middleware/authenticate')


router.get('/',(req,res)=>{
    res.send("Hello world is the server router.js ")
});

 /// async await callback finctions 
router.post('/register',async (req,res)=>{

    const { name ,email, phone, work, password, cpassword  } = req.body;
      
    if( !name || !email|| ! phone|| !work || !password|| !cpassword  ){
        return res.status(422).json({ error: "plez fill the  field error"})
    }
    try {
         
            const userExist  = await User.findOne({email:email});
            if (userExist) {
              //const isMatch = await bcrypt.compare(password, userExist.password);
                //token

            if(userExist){
                return res.status(422).json({ error: " eamil alreday exist"})
            }else if (!password){
                return res.status(422).json({ error: " password does not match "})
            } else{

                const user =new User({name ,email, phone, work, password, cpassword});
                /// yeha pe 
     
                await user.save();
              res.status(500).json({ error :" user registerd successfully "})
            } 
    }
  }
    catch (error){
         console.log(error);
    }   
    
})
//login route
router.post("/signin", async (req, res) => {
  try {
     let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({ error: "plez fill the  field error" });
    }

    const userLogin = await User.findOne({ email: email });
    //console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
        //token 
       token =  await userLogin.generateAuthToken();
        console.log(token);
        
        res.cookie("jwttoken",token,{
          expires:new Date(Date.now() +25892000000),
          httpOnly:true
        })

      if (!isMatch) {
        return res.status(400).json({ error: "user eror" });
      } else {
        res.json({ messages: "user Sign successfull" });
      }
    } else {
      return res.status(400).json({ error: "user eror" });
    }
  } catch (error) {
    console.log(error);
  }
});

// about us ka page 

router.post('/about',authenticate, (req,res)=>{
  console.log("hello my About");
  res.send(req.rootUser);
  
});
/// get user dataa for contact and  home page 
router.get('/getdata',authenticate, (req,res)=>{
  console.log("hello my About");
  res.send(req.rootUser);
  
});



module.exports = router;