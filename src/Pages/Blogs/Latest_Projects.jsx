import React from 'react';
import usePorfolio from '../../Hooks/usePortfolio';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Latest_Projects = () => {
  const [portfolio] = usePorfolio()
  return (
    <div>
      <h1 className='recent-main recent-head'>Latest Projects</h1>
      <div className="row gy-2">
        {
          portfolio.slice(1, 7).map(p =>
            <div className='col-sm-4' key={p._id}>
              <div className='overlay-icon'>
                <div className='image_overlay'>
                  <img src={p.img} alt="" width={100} height={100} className='' />
                </div>
                <Link to={`/portfolio/${p._id}`}>
                    <BsArrowRightCircle className='icon-latest' />
                </Link>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Latest_Projects;