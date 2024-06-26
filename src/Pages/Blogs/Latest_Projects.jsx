import React from 'react';
import usePorfolio from '../../Hooks/usePortfolio';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading';
const Latest_Projects = () => {
  const [portfolio, , loading] = usePorfolio()

  if (loading) {
    return <Loading />
  }
  return (
    <div>
      <h1 className='recent-main recent-head'>Latest Projects</h1>
      <div className="row gy-2 gx-sm-0">
        {
          portfolio.length ?
            portfolio.slice(1, 7).map(p =>
              <div className='col-lg-4 col-md-2 col-sm-3 col-4' key={p._id}>
                <div className='overlay-icon'>
                  <div className='image_overlay'>
                    <img src={p.img} alt="" width={100} height={100} className='w-100' />
                  </div>
                  <Link to={`/portfolio/${p._id}`}>
                    <BsArrowRightCircle className='icon-latest' />
                  </Link>
                </div>
              </div>
            ) :
            <h1>No portfolio found</h1>
        }
      </div>
    </div>
  );
};

export default Latest_Projects;