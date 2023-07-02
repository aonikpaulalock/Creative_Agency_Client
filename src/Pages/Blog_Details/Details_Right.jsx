import React from 'react';
import {BiSearch } from 'react-icons/bi';
import Details_User from './Details_User';
import Recent_Posts from '../Blogs/Recent_Posts';
import Latest_Projects from '../Blogs/Latest_Projects';

const Details_Right = ({ details }) => {
  return (
    <div className='mx-3'>
      <div className='icon-placement'>
        <input type="text" className="footer-input Blogs_input" placeholder="Search the blog.." />
        <BiSearch className='footer-icon blogs_input_icon' />
      </div>
      <Details_User  details={details}/>
      <Recent_Posts/>
      <Latest_Projects/>
    </div>
  );
};

export default Details_Right;