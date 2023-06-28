import React from 'react';
import { useLoaderData } from 'react-router-dom';
import usePorfolio from '../../Hooks/usePortfolio';

const MobileApps = () => {
  const [portfolio] = usePorfolio()
  return (
    <div className='row g-4'>
      {portfolio.filter(apps => apps.type.includes("Apps"))
        .map(app =>
          <div className="col-md-4" key={app._id}>
            <div className="card card-hover">
              <img className="img-fluid" src={app.img} />
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

export default MobileApps;