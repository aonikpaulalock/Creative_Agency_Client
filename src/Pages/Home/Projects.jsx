import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../../Styles/Home/Projects.css"
import { image } from '../../Data/Slider';
import CustomLeftArrow from './TestimonialsLogo';
import CustomRightArrow from './Testimonials';
import usePorfolio from '../../Hooks/usePortfolio';
import { Link } from 'react-router-dom';
const Projects = () => {
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
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='slider-container'>
      <div className='container'>
        <div className="d-flex justify-content-between align-items-center  ">
          <div className='slider-heading'>
            <h5>Enjoy our latest projects</h5>
            <h1>Selected work</h1>
          </div>
          <button className='banner-button'>View portfolio</button>
        </div>
        <div className="carousel-container">
          <Carousel
            arrows={false}
            responsive={responsive}
            showDots={true}
            renderDotsOutside={true}
          >
            {
              portfolio.slice(3,7).map(imgag =>
                <div className="card card-hover" key={imgag._id}>
                  <img className="img-fluid" src={imgag.img} />
                  <div className="mt-3">
                    <Link className='card-head'  to={`/portfolio/${imgag._id}`}>{imgag.heading}</Link>
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