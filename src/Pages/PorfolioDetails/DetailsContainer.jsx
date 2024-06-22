import React from 'react';
import PortfolioDetails from './PortfolioDetails';
import useDetailsData from '../../Hooks/useDetailsData';
import Acchivement from '../Home/Acchivement';
import Projects from '../Home/Projects';
import CompanyLogo from '../Home/CompanyLogo';
import Loading from '../../Shared/Loading';

const DetailsContainer = () => {
  const [details, , loading] = useDetailsData();
  return (
    <div>
      {
        loading ? <Loading /> :
          <PortfolioDetails details={details} />
      }
      <Acchivement />
      <div className='my-5'>
        <Projects />
      </div>
      <CompanyLogo />
    </div>
  );
};

export default DetailsContainer;