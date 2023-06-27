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
      <div className='mt-5 pt-5'>
        <CompanyLogo />
      </div>
    </div>
  );
};

export default Portfolio;