import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Home/Banner/navLogo.png';
import { NavLink } from 'react-bootstrap';
import "../Styles/Shared/Navber.css"
const Navber = () => {
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" href="#">Portfolio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" href="#">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" href="#">Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" href="#">Contact</NavLink>
              </li>
            </ul>
            <button className='banner-button'>Lets talk</button>
          </div>
        </div>
      </nav >
    </div>
  );
};

export default Navber;