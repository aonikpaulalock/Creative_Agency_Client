import React from 'react';
import { useLoaderData } from 'react-router-dom';
import usePorfolio from '../../Hooks/usePortfolio';

const BrandingProjects = () => {
  const [portfolio] = usePorfolio()
  return (
    <div className='row g-4'>
    {portfolio.filter(apps => apps.type.includes("Branding"))
      .map(app =>
        <div className="col-md-4" key={app._id}>
          <div className="card card-hover">
            <img className="w-100" src={app.img} height={440} />
            <div className="">
              <h3 className='card-head'>{app.heading}</h3>
              <h5 className='card-sub'>{app.type[0]}</h5>
            </div>
          </div>
        </div>
      )
    }
  </div>
  );
};

export default BrandingProjects;