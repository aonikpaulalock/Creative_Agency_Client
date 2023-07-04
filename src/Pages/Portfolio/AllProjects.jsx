import React, { useEffect } from 'react';
import {  Link, useLoaderData, useNavigate } from 'react-router-dom';
import usePorfolio from '../../Hooks/usePortfolio';

const AllProjects = () => {
  const [portfolio] = usePorfolio()
  return (
    <div className='row g-4'>
      {
        portfolio.map(data =>
          <div className="col-lg-4 col-md-6"  key={data._id}>
            <div className="card card-hover">
              <img className="w-100" src={data.img} height={440} />
              <div className="">
                <Link className='card-head' to={`/portfolio/${data._id}`}>{data.heading}</Link>
                <h5 className='card-sub'>{data.type[0]}</h5>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default AllProjects;

{/* <div className="col-md-8">
<img src={data.imgFrist} alt="" className='img-fluid' />
</div>
<div className="col-md-4">
<img src={data.imgTwo} alt="" className='img-fluid' />
</div>
<div className="col-md-4">
<img src={data.imgThird} alt="" />
</div>
<div className="col-md-4">
<img src={data.imgFourth} alt="" />
</div>
<div className="col-md-4">
<img src={data.imgFifth} alt="" />
</div>
<div className="col-md-8">
<img src={data.imgSix} alt="" />
</div>
<div className="col-md-4">
<img src={data.imgSeven} alt="" />
</div> */}