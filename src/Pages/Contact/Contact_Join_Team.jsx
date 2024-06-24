import React from 'react';

const Contact_Join_Team = () => {
  return (
    <div className='row'
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos-delay="300"
    >
      <div className="col">
        <h6 className='contact_form_head'>We believe great work happens when great people work together. That's why we're always looking for the next great person.
          <div className="accordion" id="myAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button type="button" className="accordion-button collapsed contact_accordion_button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                  <span className='ms-3'>Copywriter</span>
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div className="card-body">
                  <p className='contact_accordion_title'>We're looking for a Copywriter with proven experience in the creation of both short-form and long-form content, including blogs, white papers, ad copy, product listings, website copy, script writing, email and social media.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button type="button" className="accordion-button contact_accordion_button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                  <span className='ms-3'>Paid media strategist</span>
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#myAccordion">
                <div className="card-body">
                  <p className='contact_accordion_title'>We're looking for a Copywriter with proven experience in the creation of both short-form and long-form content, including blogs, white papers, ad copy, product listings, website copy, script writing, email and social media.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button type="button" className="accordion-button collapsed contact_accordion_button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                  <span className='ms-3'>Data analyst</span>
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse contact_accordion_button" data-bs-parent="#myAccordion">
                <div className="card-body">
                  <p className='contact_accordion_title'>We're looking for a Copywriter with proven experience in the creation of both short-form and long-form content, including blogs, white papers, ad copy, product listings, website copy, script writing, email and social media.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button type="button" className="accordion-button collapsed contact_accordion_button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                  <span className='ms-3'>Email marketing</span>
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div className="card-body">
                  <p className='contact_accordion_title'>We're looking for a Copywriter with proven experience in the creation of both short-form and long-form content, including blogs, white papers, ad copy, product listings, website copy, script writing, email and social media.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button type="button" className="accordion-button collapsed contact_accordion_button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                  <span className='ms-3'>CEO</span>
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div className="card-body">
                  <p className='contact_accordion_title'>We're looking for a Copywriter with proven experience in the creation of both short-form and long-form content, including blogs, white papers, ad copy, product listings, website copy, script writing, email and social media.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button type="button" className="accordion-button collapsed contact_accordion_button" data-bs-toggle="collapse" data-bs-target="#collapseSix">
                  <span className='ms-3'>Motion designer</span>
                </button>
              </h2>
              <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div className="card-body">
                  <p className='contact_accordion_title'>We're looking for a Copywriter with proven experience in the creation of both short-form and long-form content, including blogs, white papers, ad copy, product listings, website copy, script writing, email and social media.</p>
                </div>
              </div>
            </div>
          </div>
        </h6>
      </div>
    </div>
  );
};

export default Contact_Join_Team;