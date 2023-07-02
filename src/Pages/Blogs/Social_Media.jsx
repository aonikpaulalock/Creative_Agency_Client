import React from 'react';
import { BiLogoInstagram } from 'react-icons/bi';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter, BsBehance, BsDribbble } from 'react-icons/bs';
const Social_Media = () => {
  return (
    <div>
      <h1 className='recent-main recent-head'>Social Media</h1>
      <div className='d-flex'>
        <div className='brand me-2 social_media'>
          <FaFacebookF className='social_facebook social_icon' />
        </div>
        <div className='brand me-2 social_media'>
          <BiLogoInstagram className='social_instagram social_icon' />
        </div>
        <div className='brand me-2 social_media'>
          <BsTwitter className='social_twitter social_icon' />
        </div>
        <div className='brand me-2 social_media'>
          <BsBehance className='social_behance social_icon' />
        </div>
        <div className='brand social_media'>
          <BsDribbble className='social_dribbble social_icon' />
        </div>
      </div>
    </div>
  );
};

export default Social_Media;