import React from 'react';
import Navber from '../../Shared/Navber';
import Blogs_Left_Side from './Blogs_Left_Side';
import Blogs_Right_Side from './Blogs_Right_Side';

const BlogsBanner = () => {
  return (
    <div className='container'>
      <Navber />
      <div className='d-flex justify-content-center align-items-center'>
        <div className='slider-heading'>
          <h5>articles</h5>
          <h1>Our blog</h1>
        </div>
      </div>
      <div className="row gx-5">
        {/* Left Blogs */}
        <div className="col-sm-8">
          <Blogs_Left_Side />
        </div>
        <div className="col-sm-4">
          {/* Left Blogs */}
          <Blogs_Right_Side />
        </div>
      </div>
    </div>
  );
};

export default BlogsBanner;