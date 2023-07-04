import React from 'react';
import PortfolioBanner from './PortfolioBanner';
import Testimonials from '../Home/Testimonials';
import CompanyLogo from '../Home/CompanyLogo';

const Portfolio = () => {
  return (
    <div>
      <PortfolioBanner />
      <div className='pb-5'>
        <Testimonials />
      </div>
      <div className='mt-sm-5 pt-sm-5'>
        <CompanyLogo />
      </div>
    </div>
  );
};

export default Portfolio;