import React from 'react';
import { BiLogoInstagram, BiLogoLinkedin, BiShareAlt } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaQuoteLeft } from 'react-icons/fa';

const Details_left = ({ details }) => {
  return (
    <div className='row me-5 mb-5'>
      <div className="col">
        <div>
          <div>
            <h4 className='blogs_details_subtitle mb-4'>{details.subHeading}</h4>
            <p className='blogs_details_fristTitle mb-0'>{details.fristTitle}</p>
            <img src={details.long_img} alt="" className='img-fluid my-5' />
            <p className='blogs_details_fristTitle'>{details.secondTitle}</p>
          </div>
          <div className='my-5'>
            <FaQuoteLeft className='quote-user' />
            <p className='blogs_details_subtitle ps-4 mb-0'>{details.quote}</p>
          </div>
          <div>
            <p className='blogs_details_fristTitle mb-4'>{details.list?.listTitle}</p>
            {
              details.list?.allList.map((l,index) => <li className='blogs_details_fristTitle blogs_list' key={index}>{l}</li>)
            }
            <p className='blogs_details_fristTitle my-4'>{details.list?.listBottom}</p>
          </div>
          <div className='d-flex justify-content-between my-5'>
            <h6 className='blogs_details_fristTitle tags'>Tag:
              <button className='tags-button ms-3'>{details.Tags}</button>
            </h6>
            <div className='d-flex'>
              <div className='brand me-2 social_media'>
                <FaFacebookF className='social_facebook social_icon' />
              </div>
              <div className='brand me-2 social_media'>
                <BsTwitter className='social_twitter social_icon' />
              </div>
              <div className='brand social_media me-2'>
                <BiLogoLinkedin className='social_dribbble social_icon' />
              </div>
              <div className='brand social_media'>
                <BiShareAlt className='social_behance social_icon' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details_left;