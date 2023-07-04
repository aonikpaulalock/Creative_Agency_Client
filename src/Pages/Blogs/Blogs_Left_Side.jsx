import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Blogs_Left_Side = () => {
  return (
    <div className='row'>
      <div className='col'>
        <div className="portfolio-outlet-container">
          <NavLink className="portfolio_link" to="/blogs">All</NavLink>
          <NavLink className="portfolio_link" to="creativity">Creativity</NavLink>
          <NavLink className="portfolio_link" to="design">Design</NavLink>
          <NavLink className="portfolio_link" to="inspiration">Inspiration</NavLink>
          <NavLink className="portfolio_link" to="news">News</NavLink>
          <NavLink className="portfolio_link" to="culture">Culture</NavLink>
        </div>
        <div className="row">
          <div className="col">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs_Left_Side;