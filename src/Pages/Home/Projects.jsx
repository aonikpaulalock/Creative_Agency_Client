import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../../Styles/Home/Projects.css"
import { image } from '../../Data/Slider';
import CustomLeftArrow from './TestimonialsLogo';
import CustomRightArrow from './Testimonials';
import usePorfolio from '../../Hooks/usePortfolio';
import { Link, useNavigate } from 'react-router-dom';
const Projects = () => {
  const navigate = useNavigate();
  const [portfolio] = usePorfolio()
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 740 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 740, min: 0 },
      items: 1
    }
  };
  return (
    <div className='slider-container'>
      <div className='container'>
        <div className="d-md-flex justify-content-between align-items-center mb-5 mb-md-0 p-4 p-sm-0">
          <div className='slider-heading '>
            <h5>Enjoy our latest projects</h5>
            <h1>Selected work</h1>
          </div>
          <button className='banner-button'
            onClick={() => navigate("/portfolio")}
          >View portfolio</button>
        </div>
        <div className="carousel-container">
          <Carousel
            arrows={false}
            responsive={responsive}
            showDots={true}
            renderDotsOutside={true}
          >
            {
              portfolio.slice(3, 7).map(imgag =>
                <div className="card card-hover" key={imgag._id}>
                  <img className="" src={imgag.img} height={440} />
                  <div className="mt-3">
                    <Link className='card-head' to={`/portfolio/${imgag._id}`}>{imgag.heading}</Link>
                    <h5 className='card-sub'>{imgag.type[0]}</h5>
                  </div>
                </div>
              )
            }
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Projects;