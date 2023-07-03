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
        </form>
      </div>
    </div>
  );
};

export default Contact_New_Project;