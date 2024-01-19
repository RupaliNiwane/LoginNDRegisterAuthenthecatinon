import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {

  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleclick = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:4000/signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert(" Invalid login credentials");
      ///console.log(" Registration successful login")
      
    } else {
      window.alert("Registration successful login");
     console.log("Registration successful login");

      history('/home');
    }
  };
  return (
    <div className="login offset-lg-3 mt-5">
      <div className="card" style={{ width: "30rem" }}>
        <div class="container-fluid">
          <div className="card-body">
            <h5 className="card-title">LogIn </h5>
            <form method="post">
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); }}
                />
              </div>

              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); }}
                />
              </div>
              <button type="submit" className="btn btn-primary" onClick={handleclick}>
                Login
              </button>
              <div>
                <NavLink to='/signup'> Register Your Account </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
