import React from 'react';
import { WhatDo } from '../../Data/WhatDo';
import "../../Styles/Home/WeDo.css"
const WeDo = () => {
  return (
    <div className='container wedo-container'>
      <div className="row">
        <div className="col-md-6">
          <div className='weDo-heading'>
            <h6>{WhatDo.title}</h6>
            <p>{WhatDo.description}</p>
          </div>
        </div>
        <div className="col-md-5 offset-1 d-flex justify-content-center align-items-center">
          <div className="w-100 d-flex justify-content-around align-items-center">
              <img src={WhatDo.forbesLogo} alt="" className='img-fluid' />
              <img src={WhatDo.upworkLogo} alt="" className='img-fluid' />
              <img src={WhatDo.clutchLogo} alt="" className='img-fluid' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeDo;