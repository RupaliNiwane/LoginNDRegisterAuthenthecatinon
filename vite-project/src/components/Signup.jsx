import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink ,useNavigate} from 'react-router-dom';

const Signup = () => {

const history = useNavigate();

  const [user, setUser] = useState({
    name: "", email: "", phone: "", password: "", work: "", cpassword: ""
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    console.log("Form submitted:", user);
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your form submission logic here
  //   console.log("Form submitted:", user);
  // }


  const PostData = async (e)=>{
    e.preventDefault();
   
     const{name, email,phone, password,work,cpassword } = user;

    const res = await fetch('http://localhost:4000/register',{
     method:'POST',
     headers:{
      "Content-Type": "application/json",
     },
     body:JSON.stringify({
        name, email,phone, password,work,cpassword 
     })
    });
      const data = await res.json ();
      // console.log('server response:' , data)

      if(data.status === 422 || !data){
        window.alert("invalid registration")
        console.log("invalid registration")
      }else{
        window.alert("successfull registration");
        console.log("successfull registration");

        history('/login');
      }
     } 

  return (
    <div className="login offset-lg-3 mt-2">
      <div className="card" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">SignUp</h5>
          <form  method="post"  >
            <div className="mb-1">
              <label htmlFor="exampleInputName" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                placeholder="Name"
                name="name"
                value={user.name}
                onChange={handleInputs}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="exampleInputEmail1" className="form-label"></label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Email Address"
                name="email"
                value={user.email}
                onChange={handleInputs}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="exampleInputPhone" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPhone"
                placeholder="Phone/Contact"
                name="phone"
                value={user.phone}
                onChange={handleInputs}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="exampleInputWork" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="exampleInputWork"
                placeholder="Work"
                name="work"
                value={user.work}
                onChange={handleInputs}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="exampleInputPassword1" className="form-label"></label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleInputs}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="exampleInputCPassword1" className="form-label"></label>
              <input
                type="password"
                className="form-control"
                id="exampleInputCPassword1"
                placeholder="Confirm Password"
                name="cpassword"
                value={user.cpassword}
                onChange={handleInputs}
              />
            </div>

            <button type="submit" className="btn btn-primary" name="signup" value='register' onClick={PostData}> Register</button>
            <p>
              Already have an account? <NavLink to='/login'>Login here</NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
