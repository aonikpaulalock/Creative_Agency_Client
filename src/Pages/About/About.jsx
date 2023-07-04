import React from 'react';
import AboutBanner from './AboutBanner';
import Vision_Mision_Valus from './Vision_Mision_Valus';
import About_Client from './About_Client';
import About_Team from './About_Team';
import CompanyLogo from '../Home/CompanyLogo';

const About = () => {
  return (
    <div className='p-3 p-sm-0'>
      <AboutBanner/>
      <Vision_Mision_Valus/>
      <About_Client/>
      <About_Team/>
      <CompanyLogo/>
    </div>
  );
};

export default About;