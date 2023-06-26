import React from 'react';
import "../Styles/Shared/Footer.css"
import { Link } from 'react-router-dom';
import { BiLogoInstagram } from 'react-icons/bi';
import { FaFacebookF } from 'react-icons/fa';
import { BsArrowRight,BsTwitter,BsBehance,BsDribbble } from 'react-icons/bs';
import { GiSelfLove } from 'react-icons/gi';
import { IoIosArrowUp } from 'react-icons/io';
const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className='hire-us'>
              <h5 className='hire-heading pb-1'>WANT TO HIRE US?</h5>
              <h6>Call:
                <span> (405) 555-0128</span>
              </h6>
              <h6>Email:
                <span> hello@createx.com</span>
              </h6>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <h6 className='hire-heading'>QUICK LINKS</h6>
              <ul className='hire-link-container'>
                <li>
                  <Link to="$">Homepage</Link>
                </li>
                <li>
                  <Link to="$">Portfolio</Link>
                </li>
                <li>
                  <Link to="$">About Us</Link>
                </li>
                <li>
                  <Link to="$">Blog</Link>
                </li>
                <li>
                  <Link to="$">Contacts</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <h5 className='hire-heading pb-2 '>FOLLOW US</h5>
              <div className='d-flex'>
                <div className='brand me-2'>
                  <FaFacebookF className='brand-icon-facebook' />
                </div>
                <div className='brand me-2'>
                  <BiLogoInstagram className='brand-icon-instagram' />
                </div>
                <div className='brand me-2'>
                  <BsTwitter className='brand-icon-twitter' />
                </div>
                <div className='brand me-2'>
                  <BsBehance className='brand-icon-behance' />
                </div>
                <div className='brand'>
                  <BsDribbble className='brand-icon-dribble' />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <h5 className='hire-heading pb-2 '>SIGN UP TO OUR NEWSLETTER</h5>
              <div className='icon-placement'>
                <input type="email" class="footer-input" placeholder="Email adress" />
                <BsArrowRight className='footer-icon' />
              </div>
              <h6 className='subscribe'>*Subscribe to our newsletter to receive communications and early updates from Createx Creative Agency.</h6>
            </div>
          </div>
          <div className="d-flex mt-3 justify-content-between  align-items-center ">
            <div className='copyright'>
              <h6>© All rights reserved.</h6>
              <h6>Made with <GiSelfLove className='heart' />  by Createx Studio </h6>
            </div>
            <div>
              <h6 className='footer-scrool'>Go to top</h6>
              <button className='scrool-icon'>
                <IoIosArrowUp className='icon-footer-top' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;