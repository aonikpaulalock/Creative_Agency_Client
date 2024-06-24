import React from 'react';
import "../../Styles/Home/CompanyLogo.css"
import dribble from "../../assets/Home/Build-logo/dribbble.png"
import behance from "../../assets/Home/Build-logo/behance.png"
import upwork from "../../assets/Home/Build-logo/upwork.png"
import email from "../../assets/Home/Build-logo/email.png"
const CompanyLogo = () => {
  return (
    <div className='container d-block d-md-flex justify-content-md-center align-items-md-center mb-5'
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos-delay="300"
    >
      <div className='p-4 p-sm-0'>
        <h5 className='platform-heading'>Let's build something amazing together!</h5>
        <div className='d-md-flex justify-content-md-around justify-content-center'>
          <div>
            <h5 className='plactform-title'>Follow us</h5>
            <img src={dribble} alt="" className='img-fluid  w-100' />
            <br />
            <br />
            <img src={behance} alt="" className='img-fluid w-100' />
          </div>
          <div className='line d-md-block d-none'>

          </div>
          <div className='mt-5 mt-md-0'>
            <h5 className='plactform-title'>Get in touch</h5>
            <img src={upwork} alt="" className='img-fluid  w-100' />
            <br />
            <br />
            <img src={email} alt="" className='img-fluid  w-100' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogo;