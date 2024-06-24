import React from 'react';
import Details_left from './Details_left';
import Details_Right from './Details_Right';

const Details_Two_Side = ({ details }) => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-lg-8 g-0"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          data-aos-delay="300"
        >
          <Details_left details={details} />
        </div>
        <div className="col-lg-4"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          data-aos-delay="300"
        >
          <Details_Right details={details} />
        </div>
      </div>
    </div>
  );
};

export default Details_Two_Side;