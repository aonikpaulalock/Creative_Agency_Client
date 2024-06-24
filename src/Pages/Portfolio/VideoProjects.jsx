import React from 'react';
import usePorfolio from '../../Hooks/usePortfolio';
import Loading from '../../Shared/Loading';
import { Link } from 'react-router-dom';

const VideoProjects = () => {
  const [portfolio, , loading] = usePorfolio();

  if (loading) {
    return <Loading />;
  }

  const videoProjects = portfolio.filter(apps => apps.type.includes("Video Production"));


  return (
    <div className='row g-4'
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-duration="2000"
      data-aos-easing="ease-in-out"
      data-aos-delay="300"
    >
      {
        videoProjects.length ?
          videoProjects.map(app =>
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

export default VideoProjects;