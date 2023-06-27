import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllProjects = () => {
  const datas = useLoaderData()
  console.log(datas)
  return (
    <div className='row g-4'>
      {
        datas.slice(1, 6).map(data =>
          <div className="col-md-4"  key={data._id}>
            <div className="card card-hover">
              <img className="img-fluid" src={data.img}  />
              <div className="">
                <h3 className='card-head'>{data.heading}</h3>
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