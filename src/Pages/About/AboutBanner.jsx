import React from 'react';
import Navber from '../../Shared/Navber';
import "../../Styles/About/AboutBanner.css"
import { Link } from 'react-router-dom';
import { BsArrowDown } from 'react-icons/bs';
import aboutBanner from "../../assets/About/AboutBanner/about-banner.png"
import hover from "../../assets/About/AboutBanner/hover.png"
const AboutBanner = () => {
  return (
    <div className='about-banner-container mb-5 pb-5'>
      <div className="container">
        <Navber />
        <div className="row">
          <div className="col-lg-5">
            <div className='about-heading slider-heading'>
              <h5>About Us</h5>
              <h1>We are born to Design Experience.</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 order-lg-1 order-2">
            <div className='about-content'>
              <div className='slider-heading'>
                <h5>est 2014</h5>
                <h1>Our story</h1>
                <div className='about-title'>
                  <p className='about-sub-title mb-0'>Founded in 2014, Createx is a crafty team of strategists, designers, developers, and marketers.
                  </p>
                  <br />
                  <p className='about-sub-title mb-0'>We work with people across a wide range of sectors including established brands, non-profits, universities, startups, and entrepreneurs.
                  </p>
                </div>
                <div className='d-flex justify-content-between align-items-center pt-4'>
                  <Link className='about-link'>Read More
                    <BsArrowDown className='ms-2' />
                  </Link>
                  <div className='d-flex justify-content-between align-items-center '>
                    <img src={hover} alt="" className='img-fluid' />
                    <h6 className='about-watch banner-sub-heading'>Watch video</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 order-lg-2 order-1">
            <img src={aboutBanner} alt="" className='about-image' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
