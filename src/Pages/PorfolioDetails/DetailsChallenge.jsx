import React from 'react';

const DetailsChallenge = ({ details }) => {
  return (
    <div className='col'>
      <div className='row'>
        <div className="col">
          <img src={details.challange?.img} alt=""
            className='img-fluid w-100' />
        </div>
      </div>
      <div className='row d-flex justify-content-center align-align-items-center my-5 py-3'>
        <div className='col-md-9'>
          <h6 className='projects-goal goal-head'>{details.challange?.challangeHead}</h6>
          <p className='goal-sub-head projects-description'>{details.challange?.des}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsChallenge;