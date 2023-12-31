import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../assets/Home/Banner/navLogo.png';
import Logo1 from "../assets/Home/Banner/logo1.png"
import { NavLink } from 'react-bootstrap';
import "../Styles/Shared/Navber.css"
const Navber = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {
              location.pathname !== "/" ?
                <img src={Logo1} alt="" /> :
                <img src={Logo} alt="" />
            }
          </Link>
          <button
            className="navbar-toggler bg-white"
            type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 pt-sm-0 pt-4">
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${location.pathname !== "/" && "nav-link-condition"}`}
                  aria-current="page"
                  as={Link}
                  to="/portfolio"
                >Portfolio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`${location.pathname !== "/" && "nav-link-condition"}`}
                  aria-current="page"
                  as={Link}
                  to="/about"
                >About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`${location.pathname !== "/" && "nav-link-condition"}`}
                  aria-current="page"
                  as={Link}
                  to="/blogs"
                >Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`${location.pathname !== "/" && "nav-link-condition"}`}
                  aria-current="page"
                  as={Link}
                  to="/contact"
                >Contact</NavLink>
              </li>
            </ul>
            <button className='banner-button' onClick={() => navigate("/contact")}>Lets talk</button>
          </div>
        </div>
      </nav >
    </div>
  );
};

export default Navber;