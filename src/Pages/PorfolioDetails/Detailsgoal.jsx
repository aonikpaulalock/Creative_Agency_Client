import React from 'react';
import "../../Styles/PortfolioDetails/PortfolioDetais.css"
import { BiLogoInstagram } from 'react-icons/bi';
import { FaFacebookF } from 'react-icons/fa';
import {BsTwitter,BsBehance,BsDribbble } from 'react-icons/bs';
const Detailsgoal = ({ details }) => {
  return (
    <div className='col'>
      <div className="goal-container">
        <div>
          <h6 className='details-type'>| {details.type}</h6>
          <div className='d-flex justify-content-between align-align-items-center'>
            <h1 className='details-head'>{details.heading}</h1>
            <div className='mt-3'>
              <div className='d-flex'>
                <div className='brand me-2 details-logo'>
                  <FaFacebookF className='brand-icon-facebook' />
                </div>
                <div className='brand me-2 details-logo'>
                  <BiLogoInstagram className='brand-icon-instagram' />
                </div>
                <div className='brand me-2 details-logo'>
                  <BsTwitter className='brand-icon-twitter' />
                </div>
                <div className='brand me-2 details-logo'>
                  <BsBehance className='brand-icon-behance' />
                </div>
                <div className='brand details-logo'>
                  <BsDribbble className='brand-icon-dribble' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={details.img} alt="" className='goal-image mb-5 pb-3' />
          <div>
            <h6 className='projects-goal'>{details.projects?.goal}</h6>
            <div className='row'>
              <div className="col-md-8">
                <h5 className='project-head'>{details.projects?.projectHead}</h5>
              </div>
              <div className="col-md-3 offset-1 ">
                <div className='d-flex justify-content-between'>
                  <div>
                    <h6 className="project-sub">Strategy</h6>
                    <h6 className="project-title">{details?.projects?.Strategy[0]}</h6>
                    <h6 className="project-title">{details?.projects?.Strategy[1]}</h6>
                  </div>
                  <div>
                    <h6 className="project-sub">Category</h6>
                    <h6 className="project-title">{details?.projects?.Category[0]}</h6>
                    <h6 className="project-title">{details?.projects?.Category[1]}</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className='row mt-2'>
              <div className='col-md-8'>
                <p className='projects-description'>{details?.projects?.des}</p>
              </div>
              <div className="col-md-3 offset-1 ">
                <div className='d-flex justify-content-between'>
                  <div>
                    <h6 className="project-sub">Design</h6>
                    <h6 className="project-title">{details?.projects?.Design[0]}</h6>
                    <h6 className="project-title">{details?.projects?.Design[1]}</h6>
                  </div>
                  <div>
                    <h6 className="project-sub">Client</h6>
                    <img src={details?.projects?.Client} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailsgoal;