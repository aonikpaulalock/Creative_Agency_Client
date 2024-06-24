import React from 'react';
import Navber from '../../Shared/Navber';
import Blogs_Left_Side from './Blogs_Left_Side';
import Blogs_Right_Side from './Blogs_Right_Side';

const BlogsBanner = () => {
  return (
    <div className='container'>
      <Navber />
      <div className='d-flex justify-content-center align-items-center'
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        data-aos-delay="300"
      >
        <div className='slider-heading'>
          <h5>articles</h5>
          <h1>Our blog</h1>
        </div>
      </div>
      <div className="row">
        {/* Left Blogs */}
        <div className="col-lg-8  p-4 p-sm-0"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          data-aos-delay="300"
        >
          <Blogs_Left_Side />
        </div>
        <div className="col-lg-4  p-4 p-sm-0"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          data-aos-delay="300"
        >
          {/* Left Blogs */}
          <Blogs_Right_Side />
        </div>
      </div>
    </div>
  );
};

export default BlogsBanner;