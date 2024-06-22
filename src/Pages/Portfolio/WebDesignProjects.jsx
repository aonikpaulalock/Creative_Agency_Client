import React from 'react';
import usePorfolio from '../../Hooks/usePortfolio';
import Loading from '../../Shared/Loading';
import { Link } from 'react-router-dom';

const WebDesignProjects = () => {
  const [portfolio, , loading] = usePorfolio();

  if (loading) {
    return <Loading />;
  }

  const designProjects = portfolio.filter(apps => apps.type.includes("Web Design"));


  return (
    <div className='row g-4'>
      {
        designProjects.length ?
          designProjects.map(app =>
            <div className="col-md-4" key={app._id}>
              <div className="card card-hover">
                <img className="w-100" src={app.img} height={440} />
                <div className="">
                  <Link
                    to={`/portfolio/${app._id}`}
                    className='card-head'>{app.heading}</Link>
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

export default WebDesignProjects;