import React from 'react';
import PortfolioDetails from './PortfolioDetails';
import useDetailsData from '../../Hooks/useDetailsData';
import Acchivement from '../Home/Acchivement';
import Projects from '../Home/Projects';
import CompanyLogo from '../Home/CompanyLogo';

const DetailsContainer = () => {
  const [details] = useDetailsData()
  return (
    <div>
      <PortfolioDetails details={details} />
      <Acchivement />
      <div className='my-5'>
        <Projects />
      </div>
      <CompanyLogo />
    </div>
  );
};

export default DetailsContainer;