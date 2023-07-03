import React from 'react';

const Contact_Join_Team = () => {
  return (
    <div className='row'>
      <div className="col">
        <h6 className='contact_form_head'>We believe great work happens when great people work together. That's why we're always looking for the next great person.
          <div className="accordion-container">
            <div className="accordion-container">
              <div className="accordion" id="myAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed collapse-design" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                      <span className='ms-4 '>
                        Copywriter
                      </span>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse  show" data-bs-parent="#myAccordion">
                    <div className="card-body">
                      <p className="accordion-text">We're looking for a Copywriter with proven experience in the creation of both short-form and long-form content, including blogs, white papers, ad copy, product listings, website copy, script writing, email and social media.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button type="button" className="accordion-button collapse-design" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                      <span className='ms-4'>
                      Paid media strategist
                      </span>
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                    <div className="card-body">
                      <p className="accordion-text">We're looking for a Copywriter with proven experience in the creation of both short-form and long-form content, including blogs, white papers, ad copy, product listings, website copy, script writing, email and social media.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button type="button" className="accordion-button collapsed collapse-design" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                      <span className='ms-4'>
                      Data analyst
                      </span>
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                    <div className="card-body">
                      <p className="accordion-text">Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.</p>
                    </div>
                  </div>
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