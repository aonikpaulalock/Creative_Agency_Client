import React from 'react';
import { BiSearch } from 'react-icons/bi';
import Recent_Posts from './Recent_Posts';
import Tags from './Tags';
import Social_Media from './Social_Media';
import Latest_Projects from './Latest_Projects';
const Blogs_Right_Side = () => {
  return (
    <div className='ms-0 ms-md-5'>
      <div className='icon-placement'>
        <input type="text" className="footer-input Blogs_input" placeholder="Search the blog.." />
        <BiSearch className='footer-icon blogs_input_icon' />
      </div>
      <div>
        <Recent_Posts />
      </div>
      <div>
        <Tags />
      </div>
      <div>
        <Latest_Projects />
      </div>
      <div>
        <Social_Media />
      </div>
    </div>
  );
};

export default Blogs_Right_Side;