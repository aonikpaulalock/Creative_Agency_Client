import React from 'react';
import { OurApproach } from '../../Data/OurApproach';
import "../../Styles/Home/Approach.css"
const Approach = () => {
  return (
    <div className='container approach-container'>
      <div className='approuch-heading'>
        <h5>{OurApproach.headTitle}</h5>
        <h1>{OurApproach.heaing}</h1>
      </div>
      <div className='row gy-4'>
        {
          OurApproach.approaches?.map(approac =>
            <div className='col-lg-3' key={approac.id}>
              <div className='approach-card'>
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