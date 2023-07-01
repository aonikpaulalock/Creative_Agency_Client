import React from 'react';
import "../../Styles/About/Vision_Mision_Valus.css"
const Vision_Mision_Valus = () => {
  return (
    <div className='container pb-5 mb-5'>
      <div className="row">
        <div className="col-md-5 d-flex justify-content-center align-items-center">
          <div>
            <h1 className='vision'>Vision</h1>
            <h1 className='mision'>Mission</h1>
            <h1 className='values'>Values</h1>
          </div>
        </div>
        <div className="col-md-7">
          <div>
            <p className='vision_mission_valus_title'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <p className='vision_mission_valus_title'>Gravida nisl ac feugiat tincidunt lacinia est, elit, sit. Leo nibh dignissim est, vulputate in leo risus. Nulla in magnis vulputate urna risus, natoque sollicitudin volutpat quis. Egestas egestas vivamus mattis nunc. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision_Mision_Valus;