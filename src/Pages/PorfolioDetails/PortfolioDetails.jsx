import React, { useEffect, useState } from 'react';
import Navber from '../../Shared/Navber';
import useDetailsData from '../../Hooks/useDetailsData';
import Detailsgoal from './Detailsgoal';
import DetailsChallenge from './DetailsChallenge';
import DetailsUser from './DetailsUser';

const PortfolioDetails = ({details}) => {
  return (
    <div className='portfolio-details-container'>
      <div className="container">
        <Navber />
        <div className="row">
          <Detailsgoal details={details} />
        </div>
        <div className="row mt-5">
          <DetailsChallenge details={details} />
        </div>
        <div className="row">
          <DetailsUser details={details} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;