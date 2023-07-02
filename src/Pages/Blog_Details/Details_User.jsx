import React from 'react';
import { BiLogoLinkedin} from 'react-icons/bi';
import { BsBehance, BsDribbble } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
const Details_User = ({details}) => {
  return (
    <div>
      <h5 className='recent-main recent-head'>AUTHOR</h5>
      <div>
        <div className='d-flex'>
          <img src={details.user?.userImg} alt="" className='user-image me-4' />
          <div>
            <div>
              <h5 className='destails_author'>{details.user?.author}</h5>
              <h6 className='destails_designation mb-3'>{details.user?.designation}</h6>
            </div>
            <div className='d-flex'>
              <div className='brand me-2 blog_details_logo'>
                <FaFacebookF className='blogs_user' />
              </div>
              <div className='brand me-2  blog_details_logo'>
                <BiLogoLinkedin className='blogs_user' />
              </div>
              <div className='brand me-2 blog_details_logo'>
                <BsBehance className='blogs_user' />
              </div>
              <div className='brand  blog_details_logo'>
                <BsDribbble className='blogs_user' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details_User;