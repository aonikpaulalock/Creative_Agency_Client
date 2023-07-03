import React from 'react';
import Navber from '../../Shared/Navber';
import Contact_Outlet from './Contact_Outlet';
import "../../Styles/Contact/Contact.css"
const Contact = () => {
  return (
    <div>
      <div className="container">
        <Navber />
      </div>
      <Contact_Outlet/>
    </div>
  );
};

export default Contact;