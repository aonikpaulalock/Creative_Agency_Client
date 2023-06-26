import React from 'react';
import "../../Styles/Home/Banner.css"
import { bannerData } from '../../Data/Banner';
import Navber from '../../Shared/Navber';
const Banner = () => {
  return (
    <div className='banner-container'>
      <div className='container'>
        <Navber />
        <div className="row">
          <div className="col-md-5">
            <div className='banner-content'>
              <div className='d-flex align-items-center '>
                <img src={bannerData.video} alt="" className='img-fluid' />
                <h6 className='banner-sub-heading'>{bannerData.subHead}</h6>
              </div>
              <h1 className='banner-main-heading'>{bannerData.heading}{bannerData.CreateX}</h1>
              <button className='banner-button'>View showcase</button>
            </div>
          </div>
          <div className="col-md-7">
            <img src={bannerData.image} alt="" className='img-fluid ' />
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-center py-5'>
          <div className='banner-skills'>
            <h6>{bannerData.Ui}</h6>
            <h6>{bannerData.mobile}</h6>
            <h6>{bannerData.branding}</h6>
            <h6>{bannerData.seo}</h6>
          </div>
          <div className='banner-award'>
            <h6>{bannerData.awardNum}</h6>
            <h6>{bannerData.award}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;