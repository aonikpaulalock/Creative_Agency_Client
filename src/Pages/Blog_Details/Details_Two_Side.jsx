import React from 'react';
import Details_left from './Details_left';
import Details_Right from './Details_Right';

const Details_Two_Side = ({details}) => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-sm-8">
          <Details_left details={details}/>
        </div>
        <div className="col-sm-4">
          <Details_Right details={details}/>
        </div>
      </div>
    </div>
  );
};

export default Details_Two_Side;