import React from 'react';
import team from "../../assets/Home/Team/team.png"
import "../../Styles/Home/Team.css"
const Team = () => {
  return (
    <div className="home_team_container">
      <div className='container'>
        <div className="row">
          <div className="col-md-4">
            <img src={team} alt="" className='team_image'/>
          </div>
          <div className="col-md-4 offset-1">
            <div className='service-heading team-heading'>
              <h6>Creative people are all here</h6>
              <h1>Meet our team</h1>
            </div>
           <div class="accordion" id="myAccordion">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button type="button" class="accordion-button collapsed home_accordion_button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                  <span className='ms-3'>Shawn Edwards</span>
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div class="card-body ps-5">
                <h6 className='home_degisnation'>Co-founder and Creative Director</h6>
                  <p className='home_accordion_title'>Eleifend adipiscing lacus nullam malesuada ullamcorper non pharetrainteret velit. Integer pellentesque tortor amet sociis. Nibh ultrices etiam enim.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button type="button" class="accordion-button home_accordion_button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                <span className='ms-3'>Theresa Cooper</span>
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse show" data-bs-parent="#myAccordion">
                <div class="card-body ps-5">
                <h6 className='home_degisnation'>Co-founder and Creative Director</h6>
                  <p className='home_accordion_title'>Eleifend adipiscing lacus nullam malesuada ullamcorper non pharetrainteret velit. Integer pellentesque tortor amet sociis. Nibh ultrices etiam enim.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button type="button" class="accordion-button collapsed home_accordion_button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                <span className='ms-3'>Debra Warren</span>
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse home_accordion_button" data-bs-parent="#myAccordion">
                <div class="card-body ps-5">
                  <h6 className='home_degisnation'>Co-founder and Creative Director</h6>
                  <p className='home_accordion_title'>Eleifend adipiscing lacus nullam malesuada ullamcorper non pharetrainteret velit. Integer pellentesque tortor amet sociis. Nibh ultrices etiam enim.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button type="button" class="accordion-button collapsed home_accordion_button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                <span className='ms-3'>Dustin Williamson</span>
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse home_accordion_button" data-bs-parent="#myAccordion">
                <div class="card-body ps-5">
                  <h6 className='home_degisnation'>Co-founder and Creative Director</h6>
                  <p className='home_accordion_title'>Eleifend adipiscing lacus nullam malesuada ullamcorper non pharetrainteret velit. Integer pellentesque tortor amet sociis. Nibh ultrices etiam enim.</p>
                </div>
              </div>
            </div>
            
          </div>
          </div>
          <div className="col-md-3">
            <button className='banner-button blogs-button'>More about us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

