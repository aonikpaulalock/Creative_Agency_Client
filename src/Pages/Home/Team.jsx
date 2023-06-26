import React from 'react';
import team from "../../assets/Home/Team/team.png"
import "../../Styles/Home/Team.css"
const Team = () => {
  return (
    <div className='container team-container'>
      <div className="row">
        <div className="col-md-4">
          <img src={team} alt="" className='image-team' />
        </div>
        <div className="col-md-4 offset-1">
          <div className='service-heading team-heading'>
            <h6>Creative people are all here</h6>
            <h1>Meet our team</h1>
          </div>
            <div className="accordion-container">
              <div className="accordion" id="myAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed collapse-design team-design" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                      <span className='ms-4'>
                      Shawn Edwards
                      </span>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse  show" data-bs-parent="#myAccordion">
                    <div className="card-body">
                      <p className="accordion-text team-text1">Co-founder and Creative Director</p>
                      <p className="accordion-text team-text2">Eleifend adipiscing lacus nullam malesuada ullamcorper non pharetrainteret velit.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button type="button" className="accordion-button collapse-design team-design" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                      <span className='ms-4'>
                        Theresa Cooper
                      </span>
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                    <div className="card-body">
                      <p className="accordion-text team-text1">Co-founder and Creative Director</p>
                      <p className="accordion-text team-text2">Eleifend adipiscing lacus nullam malesuada ullamcorper non pharetrainteret velit.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button type="button" className="accordion-button collapsed collapse-design team-design" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                      <span className='ms-4'>
                      Debra Warren
                      </span>
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                    <div className="card-body">
                      <p className="accordion-text team-text1">Co-founder and Creative Director</p>
                      <p className="accordion-text team-text2">Eleifend adipiscing lacus nullam malesuada ullamcorper non pharetrainteret velit.</p>
                    </div>
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
  );
};

export default Team;