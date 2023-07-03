import React from 'react';
import Navber from '../../Shared/Navber';
import Contact_Outlet from './Contact_Outlet';
import "../../Styles/Contact/Contact.css"
import CompanyLogo from '../Home/CompanyLogo';
const Contact = () => {
  return (
    <div>
      <div className="container">
        <Navber />
      </div>
      <Contact_Outlet />
      <div className='about_company_margin'>
        <CompanyLogo />
      </div>
    </div>
  );
};

export default Contact;