import React from 'react';
import usePortfolio from '../../Hooks/usePortfolio';
import Loading from '../../Shared/Loading';
import { Link } from 'react-router-dom';

const BrandingProjects = () => {
  const [portfolio, , loading] = usePortfolio();


  if (loading) {
    return <Loading />;
  }

  const brandingProjects = portfolio.filter(app => app.type.includes("Branding")
  );
  console.log(brandingProjects)

  return (
    <div className='row g-4'
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-duration="2000"
      data-aos-easing="ease-in-out"
      data-aos-delay="300"
    >
      {brandingProjects.length ? (
        brandingProjects.map(app => (
          <div className="col-md-4" key={app._id}>
            <div className="card card-hover">
              <img className="w-100" src={app.img} height={440} alt={app.heading} />
              <div className="">
                <Link
                  to={`/portfolio/${app._id}`}
                  className='card-head'
                >{app.heading}</Link>
                <h5 className='card-sub'>{app.type[0]}</h5>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1>No data found</h1>
      )}
    </div>
  );
};

export default BrandingProjects;
