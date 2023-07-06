import React from 'react';

const Contact_General_Inquiries = () => {
  return (
    <div className='row'>
      <div className='col p-4'>
        <h6 className='contact_form_head'>If you have any questions don’t be afraid to drop us a line. Leave us a little info, and we’ll be in touch.
        </h6>
        <form
          className='form-container'
          action="https://formspree.io/f/mjvqvvdp"
          method="POST"
        >
          <div
            className='d-sm-flex justify-content-between align-items-center my-4 pt-5'
          >
            <div
              className="form-group w-100 me-5 mb-3 mb-md-0">
              <label
                htmlFor="exampleInputName" className='input_lebel'
              >Name*</label>
              <input
                name='Name'
                type="text"
                className="footer-input Blogs_input contact_input"
                id="exampleInputName" aria-describedby="emailHelp" placeholder="Your Name"
              />
            </div>
            <div
              className="form-group w-100 mb-3 mb-md-0">
              <label
                htmlFor="exampleInputEmail" className='input_lebel'
              >Email*</label>
              <input
                name='email'
                type="email"
                className="footer-input Blogs_input contact_input"
                id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Your working email"
              />
            </div>
          </div>
          <div
            className='d-sm-flex justify-content-between align-items-center'>
            <div
              className="form-group w-100 me-5 mb-3 mb-md-0">
              <label
                htmlFor="exampleInputCompany" className='input_lebel'
              >Company</label>
              <input
                name="company"
                type="text"
                className="footer-input Blogs_input contact_input" id="exampleInputCompany" aria-describedby="emailHelp" placeholder="Your company name"
              />
            </div>
            <div
              className="form-group w-100 mb-3 mb-md-0">
              <label
                htmlFor="exampleInputProject" className='input_lebel'
              >Subject</label>
              <input
                name='subject'
                type="text"
                className="footer-input Blogs_input contact_input" id="exampleInputProject" aria-describedby="emailHelp" placeholder="Title your message"
              />
            </div>
          </div>
          <div className="form-group w-100 mb-5 mt-4 mb-md-0">
            <label
              htmlFor="exampleInputTextarea" className='input_lebel'
            >Message</label>
            <textarea
              name="message"
              id="exampleInputTextarea"
              placeholder="Your message"
              className='footer-input Blogs_input contact_input'
            ></textarea>
          </div>
          <button className='banner-button mt-sm-4'>Send message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact_General_Inquiries;