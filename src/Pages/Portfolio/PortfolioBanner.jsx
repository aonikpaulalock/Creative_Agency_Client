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
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className="slider-heading">
                <h5>Our Work</h5>
                <h1>Portfolio</h1>
              </div>
            </div>
            <div className="col-lg-8 col-12 d-flex justify-content-center align-items-center">
              <div className="portfolio-outlet-container">
                <NavLink className="portfolio_link" to="/portfolio">All</NavLink>
                <NavLink className="portfolio_link" to="apps">Mobile Apps</NavLink>
                <NavLink className="portfolio_link" to="web">Web Design</NavLink>
                <NavLink className="portfolio_link" to="branding">Branding</NavLink>
                <NavLink className="portfolio_link" to="video">Video Production</NavLink>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PortfolioBanner;