import React from 'react';
import Navber from '../../Shared/Navber';
import "../../Styles/Details_Blog/Details_Blog.css"
const Blog_Details_Banner = ({ details }) => {
  return (
    <div className="banner_blogs_details mb-5 p-4 p-sm-0">
      <div className="container"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        data-aos-delay="300"
      >
        <div className="row">
          <div className="col-md-9">
            <div>
              <div className='d-flex'>
                <h6 className='card-sub'>{details.type} | </h6>
                <h6 className='ms-2 card-sub'> {details.date}</h6>
              </div>
              <div className='slider-heading details_blogs_head'>
                <h1>{details.heading}</h1>
                <h6 className='details-sub'>{details.read}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog_Details_Banner;