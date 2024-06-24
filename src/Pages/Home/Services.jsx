import React from 'react';
import service from "../../assets/Home/Service/service-illustration.png"
import "../../Styles/Home/Service.css"
const Services = () => {
  return (
    <div className='container service-container'
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos-delay="300"
    >
      <div className='service-heading p-4 p-sm-0'>
        <h6>CAPABILITIES</h6>
        <h1>Our services</h1>
      </div>
      <div className="row p-4 p-sm-0">
        <div className="col-lg-5 order-lg-1 order-2">
          <div className="accordion-container p-3 p-sm-0">
            <div className="accordion-container">
              <div className="accordion" id="myAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed collapse-design" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                      <span className='ms-4 '>
                        Identity Design & Illustration
                      </span>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse  show" data-bs-parent="#myAccordion">
                    <div className="card-body">
                      <p className="accordion-text">Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button type="button" className="accordion-button collapse-design" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                      <span className='ms-4'>
                        UX / UI Design
                        Web & Mobile Design
                      </span>
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                    <div className="card-body">
                      <p className="accordion-text">Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button type="button" className="accordion-button collapsed collapse-design" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                      <span className='ms-4'>
                        Photography & Video Production
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
        </div>
        <div className="col-lg-6 offset-lg-1 offset-0 order-lg-2 order-1">
          <img src={service} alt="" className='img-fluid' />
        </div>
      </div>
    </div>
  );
};

export default Services;