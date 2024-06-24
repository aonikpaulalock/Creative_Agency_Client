import React from 'react';
import { Marquelogo } from '../../Data/MarqueLogos';
import Marquee from "react-fast-marquee";
const TestimonialsLogo = () => {
  return (
    <div className='container my-5'
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos-delay="300"
    >
      <div className="row g-0 p-4 p-sm-0">
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
            <div className="col-lg-2 g-2 p-5" key={logo.id}>
              <div className="skils-image">
                <img src={logo.img} alt="" className="p-2" />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TestimonialsLogo;