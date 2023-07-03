import React from 'react';
const Contact_New_Project = () => {
  return (
    <div className='row'>
      <div className='col'>
        <h6 className='contact_form_head'>Have a project in mind that you think we'd be a great fit for? We'd love to know what you're thinking.
        </h6>
        <form className='form-container'>
          <div className='d-flex justify-content-between align-items-center my-4 pt-5'>
            <div class="form-group w-100 me-5">
              <label for="exampleInputName" className='input_lebel'>Name*</label>
              <input type="text" class="footer-input Blogs_input contact_input" id="exampleInputName" aria-describedby="emailHelp" placeholder="Your Name" />
            </div>
            <div class="form-group w-100">
              <label for="exampleInputEmail" className='input_lebel'>Email*</label>
              <input type="email" class="footer-input Blogs_input contact_input" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Your working email" />
            </div>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <div class="form-group w-100 me-5">
              <label for="exampleInputCompany" className='input_lebel'>Company</label>
              <input type="text" class="footer-input Blogs_input contact_input" id="exampleInputCompany" aria-describedby="emailHelp" placeholder="Your company name" />
            </div>
            <div class="form-group w-100">
              <label for="exampleInputProject" className='input_lebel'>Project title</label>
              <input type="email" class="footer-input Blogs_input contact_input" id="exampleInputProject" aria-describedby="emailHelp" placeholder="Title your project" />
            </div>
          </div>
          <div className='d-flex justify-content-between align-items-center my-4'>
            <div class="form-group w-100 me-5">
              <label for="" className='input_lebel'>Approx Budget *</label>
              <select class="footer-input Blogs_input contact_input" aria-label=".form-select-lg example">
                <option selected>Your Approx Budget</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="form-group w-100">
              <label for="" className='input_lebel'>Other Skill Sets You Require *</label>
              <select class="footer-input Blogs_input contact_input" aria-label=".form-select-lg example">
                <option selected>Skill sets you require</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div class="form-group w-100 mb-5">
            <label for="exampleInputTextarea" className='input_lebel'>Project details*</label>
           <textarea name="" id="exampleInputTextarea" placeholder ="Brief project details" className='footer-input Blogs_input contact_input'></textarea>
          </div>
          <button className='banner-button'>Lets make something</button>
        </form>
      </div>
    </div>
  );
};

export default Contact_New_Project;