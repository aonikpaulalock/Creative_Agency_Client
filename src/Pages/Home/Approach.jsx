import React from 'react';
import { OurApproach } from '../../Data/OurApproach';
import "../../Styles/Home/Approach.css"
const Approach = () => {
  return (
    <div className='container approach-container'>
      <div className='approuch-heading p-4 p-sm-0'>
        <h5>{OurApproach.headTitle}</h5>
        <h1>{OurApproach.heaing}</h1>
      </div>
      <div className='row gy-4 p-4 p-sm-0'>
        {
          OurApproach.approaches?.map(approac =>
            <div className='col-lg-3 col-md-6' key={approac.id}>
              <div className='approach-card p-3 p-lg-0'>
                <h1>{approac.number}</h1>
                <h5>{approac.title}</h5>
                <p>{approac.des}</p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Approach;