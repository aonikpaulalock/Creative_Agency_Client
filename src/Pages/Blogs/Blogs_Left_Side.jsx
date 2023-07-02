import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Blogs_Left_Side = () => {
  return (
    <div className='row me-4'>
      <div className='col'>
        <div className="portfolio-outlet-container">
          <NavLink to="/blogs">All</NavLink>
          <NavLink to="creativity">Creativity</NavLink>
          <NavLink to="design">Design</NavLink>
          <NavLink to="inspiration">Inspiration</NavLink>
          <NavLink to="news">News</NavLink>
          <NavLink to="culture">Culture</NavLink>
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