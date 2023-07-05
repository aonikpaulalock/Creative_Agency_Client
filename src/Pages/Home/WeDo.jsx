import React from 'react';
import { WhatDo } from '../../Data/WhatDo';
import "../../Styles/Home/WeDo.css"
import Marquee from 'react-fast-marquee';
const WeDo = () => {
  return (
    <div className='container wedo-container'>
      <div className="row g-0 p-4 p-sm-0">
        <div className="col-lg-6">
          <div className='weDo-heading'>
            <h6>{WhatDo.title}</h6>
            <p>{WhatDo.description}</p>
          </div>
        </div>
        <div className="col-lg-5 offset-lg-1 offset-0 p-4 p-sm-0">
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
              {WhatDo.logos.map((logo) => (
                <div className="col-lg-2 g-2 p-5" key={logo.id}>
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

export default WeDo;