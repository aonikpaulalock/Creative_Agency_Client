import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import usePorfolio from '../../Hooks/usePortfolio';
import Loading from '../../Shared/Loading';

const MobileApps = () => {
  const [portfolio, , loading] = usePorfolio();

  if (loading) {
    return <Loading />;
  }

  const appProjects = portfolio.filter(apps => apps.type.includes("Apps"));


  return (
    <div className='row g-4'>
      {
        appProjects.length ?
          appProjects.map(app =>
            <div className="col-md-4" key={app._id}>
              <div className="card card-hover">
                <img className="w-100" src={app.img} height={440} />
                <div className="">
                  <Link
                    to={`/portfolio/${app._id}`}
                    className='card-head'
                  >{app.heading}</Link>
                  <h5 className='card-sub'>{app.type[0]}</h5>
                </div>
              </div>
            </div>
          ) :
          <h1>No Data Found</h1>
      }
    </div>
  );
};

export default MobileApps;