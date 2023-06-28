import React from 'react';
import "../../Styles/Portfolio/PortfolioBanner.css"
import Navber from '../../Shared/Navber';
import { NavLink, Outlet } from 'react-router-dom';
const PortfolioBanner = () => {
  return (
    <div className='portfolio-container'>
      <div className='position-dot'>
        <div className="container">
          <Navber />
          <div className="portfolio-content d-flex justify-content-between  align-items-center ">
            <div className="slider-heading">
              <h5>Our Work</h5>
              <h1>Portfolio</h1>
            </div>
            <div className="portfolio-outlet-container">
              <NavLink to="/portfolio">All</NavLink>
              <NavLink to="apps">Mobile Apps</NavLink>
              <NavLink to="web">Web Design</NavLink>
              <NavLink to="branding">Branding</NavLink>
              <NavLink to="video">Video Production</NavLink>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PortfolioBanner;