import React, { useEffect, useState } from 'react';
import '../App.css';
 import { useNavigate } from 'react-router';

const About = () => {

  const history  = useNavigate();
    const [userData,setUserData] = useState({});


  const callAboutPage =  async( )=>{
      try{
    const res =  await fetch('http://localhost:4000/about',{
      method: 'GET',
      headers:{
        Accept: 'application/json', 
         'Content-Type': 'application-json'
      },
      credentials: 'include',
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
      history('/login');
    } 
    };
   useEffect(()=>{
        callAboutPage()
   },[]);

  return (
    <>
      <div className="card offset-lg-3 mt-5" style={{ width: "40rem" }}>
        <div className="card-body">
          <h5 className="card-title">About</h5>
          <div method=" GET">
            <div className="row">
              <div className="col-md-4">
                <img src='/IMAGES/image1.jpg'  width={140}  alt="Profile" />
                
              </div>
              <div className="col-md-6">
                <h5> { userData.name} </h5>
                <h6> { userData.work}</h6>
                <ul className="nav" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      itemID="home-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-current="page"
                      href="#home"
                    >
                      Active
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      itemID="home-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-current="page"
                      href="#profile"
                    >
                      TimeLine
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <input
                  type="submit"
                  className="profile-edit-btn"
                  name="btnAddmore"
                  value="edit profile"
                ></input>
              </div>
            </div>

            {/* RIGHT SIDE THE   */}
            <div className="row">
              <div className="col-md-4">
                <div className="profile-work">
                  <p>Work Link</p>
                  <a href="https://github.com/">YouTube</a>
                  <br />
                  <a href="https://github.com/">GitHub</a>
                  <br />
                  <a href="https://github.com/">Instagram</a>
                  <br />
                  <a href="https://github.com/">Google MAP</a>
                  <br />
                  <a href="https://github.com/">LinkedIn</a>
                  <br />
                </div>
              </div>

              <div className="col-md-8 pl-5 about-info">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-label="home-tab"
                  >
                    {/* User Information Grid */}
                    <div className="row mt-2">
                      <div className="col-md-6">
                        <label>User ID</label>
                      </div>
                      <div className="col-md-6">
                        <p>25314212355</p>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-6">
                        <label>Username</label>
                      </div>
                      <div className="col-md-6">
                        <p> rupali </p>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-6">
                        <label>User Phone</label>
                      </div>
                      <div className="col-md-6">
                        <p>89532544212</p>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-6">
                        <label>User Address</label>
                      </div>
                      <div className="col-md-6">
                        <p>Pune</p>
                      </div>
                    </div>
                    {/* End of User Information Grid */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
