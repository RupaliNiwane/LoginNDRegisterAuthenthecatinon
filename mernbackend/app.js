const express = require ('express');
const app = express();
const dotenv = require('dotenv');
const cors = require ('cors');
const bodyParser = require ('body-parser');
dotenv.config({ path: './config.env'});
require('./db/conn');
 //const User = require ('./modal/userSchema');
app.use(bodyParser.json());

app.use(cors( {
origin: 'http://localhost:5173',
credentials : true,
}))
 app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(require('./router/auth'))

const port = process.env.PORT;
 

// middeleware 
const middeleware = (req,res,next)=>{
    console.log("hello my middleware");
    next();
}
// middeleware();
app.get('/',(req,res)=>{
    res.send("Hello world is the server ")
});

// app.get('/about',middeleware,(req,res)=>{
//     console.log("hello my About");
//     res.send("Hello About is the server ")
// });
// app.get('/contact',(req,res)=>{
//     res.send("Hello Conatct is the server ")
// });
// app.get('/signin',(req,res)=>{
//     res.send("Hello signin is the server ")
// });
// app.get('/signup',(req,res)=>{
//     res.send("Hello Regitration is the server ")
// });

app.listen(port,(req,res)=>{
    console.log('server is conneted to the server ${port}');
})