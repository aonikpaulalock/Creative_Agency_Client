import React from 'react';
import { client_Team } from '../../Data/Client_Team';
import { BiLogoInstagram } from 'react-icons/bi';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
const About_Team = () => {
  return (
    <div className="about_team_conatiner">
      <div className='container'>
        <div className="row">
          <div className="col-md-7">
            <div className='slider-heading mb-5'>
              <h5>We Are</h5>
              <h1>Enthusiastic individuals
                working for extraordinary
                brands.</h1>
            </div>
          </div>
        </div>
        <div className="row g-3">
          {
            client_Team.teams.map(team =>
              <div key={team.id} className='col-lg-3 col-md-4 col-sm-6 col-12'>
                <div>
                  <div className='team-hover'>
                    <div className='image-ovelay'>
                      <img src={team.img} alt="" className='img-fluid w-100' />
                    </div>
                    <div className='team-logo-placement'>
                      <div className='d-flex'>
                        <div className='team_brand brand me-2 details-logo'>
                          <FaFacebookF className='brand-icon-facebook  team_icon' />
                        </div>
                        <div className='team_brand brand me-2 details-logo'>
                          <BiLogoInstagram className='brand-icon-instagram team_icon' />
                        </div>
                        <div className='team_brand brand me-2 details-logo'>
                          <FaLinkedinIn className='brand-icon-twitter team_icon' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mt-3'>
                    <h6 className='team-author'>{team.author}</h6>
                    <h6 className='team-title'>{team.title}</h6>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default About_Team;