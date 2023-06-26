import React from 'react';
import "../../Styles/Home/CompanyLogo.css"
import dribble from "../../assets/Home/Build-logo/dribbble.png"
import behance from "../../assets/Home/Build-logo/behance.png"
import upwork from "../../assets/Home/Build-logo/upwork.png"
import email from "../../assets/Home/Build-logo/email.png"
const CompanyLogo = () => {
  return (
    <div className='container d-flex justify-content-center align-align-items-center mb-5 pb-5'>
      <div>
        <h5 className='platform-heading'>Let's build something amazing together!</h5>
        <div className='d-flex justify-content-around '>
          <div>
            <h5 className='plactform-title'>Follow us</h5>
            <img src={dribble} alt="" />
            <br />
            <br />
            <img src={behance} alt="" />
          </div>
          <div className='line'>

          </div>
          <div>
            <h5 className='plactform-title'>Get in touch</h5>
            <img src={upwork} alt="" />
            <br />
            <br />
            <img src={email} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogo;