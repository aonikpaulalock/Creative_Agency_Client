import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
const DetailsUser = ({ details }) => {
  return (
    <div className='col'
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos-delay="300"
    >
      <div className='row g-3'>
        <div className="col-md-6">
          <img src={details.user?.img1} alt="" className='img-fluid' />
        </div>
        <div className="col-md-6">
          <img src={details.user?.img2} alt="" className='img-fluid' />
        </div>
      </div>
      <div className='row my-5 py-3 d-flex justify-content-center align-align-items-center'>
        <div className="col-md-10">
          <div>
            <FaQuoteLeft className='quote-user' />
            <div className='p-4'>
              <p className='mb-4 projects-description'>{details.user?.des}</p>
              <div className='d-flex align-items-center '>
                <img src={details.user?.userImg} alt="" className='img-fluid' />
                <div className='testimonials-user'>
                  <h5 className='ms-3'>{details.user?.userName}</h5>
                  <h6 className='ms-3'>{details.user?.userTitle}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img src={details.user?.img3} alt="" className='img-fluid' />
        </div>
      </div>
    </div>
  );
};

export default DetailsUser;