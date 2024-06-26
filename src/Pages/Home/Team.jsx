import React from 'react';
import team from "../../assets/Home/Team/team.png"
import "../../Styles/Home/Team.css"
import { useNavigate } from 'react-router-dom';
const Team = () => {
  const navigate = useNavigate()
  return (
    <div className="home_team_container">
      <div className='container'
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        data-aos-delay="300"
      >
        <div className="row p-4 p-sm-0">
          <div className="col-lg-4">
            <img src={team} alt="" className='team_image w-100' />
          </div>
          <div className="col-lg-4 offset-lg-1 offset-0 p-3 p-sm-0">
            <div className='service-heading team-heading pt-3 pt-sm-0'>
              <h6 className='pt-3 pt-lg-0'>Creative people are all here</h6>
              <h1>Meet our team</h1>
            </div>
            <div className="accordion" id="myAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button type="button" className="accordion-button collapsed home_accordion_button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                    <span className='ms-3'>Shawn Edwards</span>
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                  <div className="card-body ps-md-5 ps-0">
                    <h6 className='home_degisnation'>Co-founder and Creative Director</h6>
                    <p className='home_accordion_title'>Eleifend adipiscing lacus nullam malesuada ullamcorper non pharetrainteret velit. Integer pellentesque tortor amet sociis. Nibh ultrices etiam enim.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button type="button" className="accordion-button home_accordion_button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                    <span className='ms-3'>Theresa Cooper</span>
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#myAccordion">
                  <div className="card-body ps-5">
                    <h6 className='home_degisnation'>Co-founder and Creative Director</h6>
                    <p className='home_accordion_title'>Eleifend adipiscing lacus nullam malesuada ullamcorper non pharetrainteret velit. Integer pellentesque tortor amet sociis. Nibh ultrices etiam enim.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button type="button" className="accordion-button collapsed home_accordion_button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                    <span className='ms-3'>Debra Warren</span>
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse home_accordion_button" data-bs-parent="#myAccordion">
                  <div className="card-body ps-5">
                    <h6 className='home_degisnation'>Co-founder and Creative Director</h6>
                    <p className='home_accordion_title'>Eleifend adipiscing lacus nullam malesuada ullamcorper non pharetrainteret velit. Integer pellentesque tortor amet sociis. Nibh ultrices etiam enim.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button type="button" className="accordion-button collapsed home_accordion_button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                    <span className='ms-3'>Dustin Williamson</span>
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse home_accordion_button" data-bs-parent="#myAccordion">
                  <div className="card-body ps-5">
                    <h6 className='home_degisnation'>Co-founder and Creative Director</h6>
                    <p className='home_accordion_title'>Eleifend adipiscing lacus nullam malesuada ullamcorper non pharetrainteret velit. Integer pellentesque tortor amet sociis. Nibh ultrices etiam enim.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="col-lg-3">
            <button
              onClick={() => navigate("/about")}
              className='banner-button blogs-button'>More about us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

