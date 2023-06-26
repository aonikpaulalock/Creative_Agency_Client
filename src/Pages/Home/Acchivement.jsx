import React from 'react';
import { acchiveData } from '../../Data/Acchivements';
import Marquee from "react-fast-marquee";
const Acchivement = () => {
  return (
    <div className='container acchivements-container mt-5 pt-5'>
      <div className="row g-4">
        <div className="col-md-5">
          <div className='slider-heading'>
            <h5>{acchiveData.title}</h5>
            <h1>{acchiveData.head}</h1>
          </div>
        </div>
        <div className="col-md-7">
          <Marquee
            gradient={true}
            speed={60}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
            gradientWidth={150}
          >
            {acchiveData.acchivements.map((acchivement) => (
              <div className="col-lg-2 g-2 p-5" key={acchivement.id}>
                <div className="skils-image">
                  <img src={acchivement.img} alt="" className="p-2" />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Acchivement;