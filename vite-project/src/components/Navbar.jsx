import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
const Navbar = () => {
  return (
    <div className='headernav '>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
          
             <img src='/public/IMAGES/LOGO2.png' width={40}></img>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className='navbar'>
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" activeClassName="active" exact>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" activeClassName="active">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" activeClassName="active">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login" activeClassName="active">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup" activeClassName="active">
                  Registration
                </NavLink>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
