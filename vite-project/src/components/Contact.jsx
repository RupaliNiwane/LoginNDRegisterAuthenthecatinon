import React,{useEffect,useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
const Contact = () => {


  const [userData,setUserData] = useState({ name:" ", email:"", phone:"",message:""});

  
  const callContactPage =  async( )=>{
      try{
    const res =  await fetch('http://localhost:4000/getdata',{
      method: 'GET',
      headers:{
         'Content-Type':  'application-json'
      },
      
    });

      const data = await res.json();
      console.log(data);
      setUserData(data)
     
     if(!res.status === 200){
      const error = new Error(res.error);
      throw error;
     }
    }catch(error){
     console.log(error);
    
    } 
    };
   useEffect(()=>{
        callContactPage()
   },[]);

  const handleInput = (e) =>{
      const name=  e.target.name;
      const value=  e.target.value;

      setUserData({...userData,name:''})

  }
  return (
    <>
  <div className="contact-info offset-lg-1">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-4 g-2 d-flex justify-content-center">
        <div className="contact-info-contact">
          Phone
          <div>
            +91 955623532
          </div>
        </div>
      </div>

      <div className="col-lg-4 g-2 d-flex justify-content-center">
        <div className="contact-info-contact">
          Email
          <div>
            rupali@gmail.com
          </div>
        </div>
      </div>

      <div className="col-lg-4  g-2 d-flex justify-content-center">
        <div className="contact-info-contact">
          Address
          <div>
            Pune
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



      <div className="login offset-3">
        <div className="card" style={{ width: "30rem" }}>
          <div className="card-body">
            <h5 className="card-title">Get in Touch  </h5>
            <form>
            <div>
              <div className="mb-3 ">
                <label for="exampleInputname" className="form-label">
                  Name
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="exampleInputname"
                  aria-describedby="name"
                  value={userData.name}
                  onChange={handleInput}
                   placeholder=" your name" required

                />
              </div>

              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={userData.email}
                  onChange={handleInput}
                   placeholder=" your email" required
                />
              </div>

              <div className="mb-3">
                <label for="exampleInputPhone" className="form-label">
                  phone
                </label>
                <input
                  type="Number"
                  className="form-control"
                  id="exampleInputPhone"
                  value={userData.phone}
                  onChange={handleInput}
                   placeholder=" your phone" required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Massage
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={userData.Massage}
                  onChange={handleInput}
                   placeholder=" yourMassage" required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
