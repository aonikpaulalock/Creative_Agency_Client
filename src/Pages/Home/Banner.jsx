import React from 'react';
import "../../Styles/Home/Banner.css"
import { bannerData } from '../../Data/Banner';
import { BsArrowDown } from 'react-icons/bs';
import Navber from '../../Shared/Navber';
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div className='banner-container'>
      <div className='container'>
        <Navber />
        <div className="row p-4 p-sm-0">
          <div className="col-md-5 order-md-1 order-2">
            <div className='banner-content'>
              <div className='d-flex align-items-center '>
                <img src={bannerData.video} alt="" className='img-fluid' />
                <h6 className='banner-sub-heading'>{bannerData.subHead}</h6>
              </div>
              <h1 className='banner-main-heading'>{bannerData.heading}{bannerData.CreateX}</h1>
              <button className='banner-button'>View showcase</button>
            </div>
          </div>
          <div className="col-md-7 order-md-2 order-1">
            <img src={bannerData.image} alt="" className='img-fluid ' />
          </div>
        </div>
        <div className='d-sm-flex justify-content-center  justify-content-sm-between align-items-center py-5 px-sm-0 px-5'>
          <div className='banner-skills mb-3 mb-sm-0'>
            <h6>{bannerData.Ui}</h6>
            <h6>{bannerData.mobile}</h6>
            <h6>{bannerData.branding}</h6>
            <h6>{bannerData.seo}</h6>
          </div>
          <Link className='scroll-down'>
            <BsArrowDown className='me-2' />
            Scroll down
          </Link>
          <div className='banner-award mt-3 mt-sm-0'>
            <h6>{bannerData.awardNum}</h6>
            <h6>{bannerData.award}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;