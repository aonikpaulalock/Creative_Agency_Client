import React from 'react';
import {NavLink, Outlet } from 'react-router-dom';

const Contact_Outlet = () => {
  return (
    <div className='container mb-5 ps-4'>
      <div className="row">
        <div className="col-md-3">
          <div className="slider-heading">
            <h5>CONTACT US</h5>
            <h1>Let's talk
              about:</h1>
          </div>
          <div className='contact-link'>
            <NavLink to="/contact">New Project</NavLink>
            <NavLink to="join">Joining Our Team</NavLink>
            <NavLink to="inquiries">General Inquiries</NavLink>
          </div>
          <div className='contact_adress'>
            <div>
              <h6>Address</h6>
              <p>
                2000 W. Morehead St.
                Suite A
                Charlotte, NC 28208
              </p>
            </div>
            <div>
              <h6>PHONE</h6>
              <p>(405) 555-0128</p>
            </div>
          </div>
        </div>
        <div className="col-md-8 offset-md-1 offset-0 ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Contact_Outlet;