import React from 'react';
import { Marquelogo } from '../../Data/MarqueLogos';
import Marquee from "react-fast-marquee";
const About_Client = () => {
  return (
    <div className='container my-5 py-5'
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-duration="1500"
    data-aos-easing="ease-in-out"
    data-aos-delay="300"
    >
      <div className='slider-heading'>
        <h5>CLIENTS</h5>
        <h1>Brands we've worked with</h1>
      </div>
      <div className="row">
        <div className="col">
          <div className="row g-0">
            <Marquee
              gradient={true}
              speed={60}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="left"
              gradientWidth={150}
            >
              {Marquelogo.logos.map((logo) => (
                <div className="col-lg-2 g-2 p-4" key={logo.id}>
                  <div className="skils-image">
                    <img src={logo.img} alt="" className="p-2" />
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="row g-0">
            <Marquee
              gradient={true}
              speed={60}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="left"
              gradientWidth={150}
            >
              {Marquelogo.twoSteps.map((logo) => (
                <div className="col-lg-2 g-2 p-4" key={logo.id}>
                  <div className="skils-image">
                    <img src={logo.img} alt="" className="p-2" />
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_Client;