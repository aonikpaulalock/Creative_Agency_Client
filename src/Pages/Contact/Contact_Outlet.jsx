import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contact_Outlet = () => {
  return (
    <div className='container mb-5 ps-md-4 ps-0'>
      <div className="row">
        <div className="col-md-3">
          <div className="slider-heading">
            <h5>CONTACT US</h5>
            <h1>Let's talk
              about:</h1>
          </div>
          <div className='contact-link'>
            <Link to="/contact">New Project</Link>
            <Link to="join">Joining Our Team</Link>
            <Link to="inquiries">General Inquiries</Link>
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