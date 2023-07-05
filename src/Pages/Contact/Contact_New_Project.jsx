import React from 'react';
const Contact_New_Project = () => {
  return (
    <div className='row'>
      <div className='col p-4 p-md-0'>
        <h6 className='contact_form_head'>Have a project in mind that you think we'd be a great fit for? We'd love to know what you're thinking.
        </h6>
        <form className='form-container'>
          <div className='d-sm-flex justify-content-between align-items-center my-4 pt-5'>
            <div className="form-group w-100 me-5 mb-3 mb-md-0">
              <label htmlFor="exampleInputName" className='input_lebel'>Name*</label>
              <input type="text" className="footer-input Blogs_input contact_input" id="exampleInputName" aria-describedby="emailHelp" placeholder="Your Name" />
            </div>
            <div className="form-group w-100 mb-3 mb-md-0">
              <label htmlFor="exampleInputEmail" className='input_lebel'>Email*</label>
              <input type="email" className="footer-input Blogs_input contact_input" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Your working email" />
            </div>
          </div>
          <div className='d-sm-flex justify-content-between align-items-center'>
            <div className="form-group w-100 me-5 mb-3 mb-md-0">
              <label htmlFor="exampleInputCompany" className='input_lebel'>Company</label>
              <input type="text" className="footer-input Blogs_input contact_input" id="exampleInputCompany" aria-describedby="emailHelp" placeholder="Your company name" />
            </div>
            <div className="form-group w-100 mb-3 mb-md-0">
              <label htmlFor="exampleInputProject" className='input_lebel'>Project title</label>
              <input type="email" className="footer-input Blogs_input contact_input" id="exampleInputProject" aria-describedby="emailHelp" placeholder="Title your project" />
            </div>
          </div>
          <div className='d-sm-flex justify-content-between align-items-center'>
            <div className="form-group w-100 me-5 my-3">
              <label htmlFor="" className='input_lebel'>Approx Budget *</label>
              <select className="footer-input Blogs_input contact_input" aria-label=".form-select-lg example">
                <option value>Your Approx Budget</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="form-group w-100 mb-3 mb-md-0">
              <label htmlFor="" className='input_lebel'>Other Skill Sets You Require *</label>
              <select className="footer-input Blogs_input contact_input" aria-label=".form-select-lg example">
                <option value>Skill sets you require</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="form-group w-100 mb-5">
            <label htmlFor="exampleInputTextarea" className='input_lebel'>Project details*</label>
           <textarea name="" id="exampleInputTextarea" placeholder ="Brief project details" className='footer-input Blogs_input contact_input'></textarea>
          </div>
          <button className='banner-button'>Lets make something</button>
        </form>
      </div>
    </div>
  );
};

export default Contact_New_Project;