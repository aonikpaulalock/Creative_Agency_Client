import React from 'react';
import testImg from "../../assets/Home/Testimonials/image.png"
import { testimonialsData } from '../../Data/TestmonialsData';
import Carousel from 'react-multi-carousel';
import "../../Styles/Home/Testimonials.css"
const Testimonials = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 1
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 1
    }
  };
  return (
    <div className='container'
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos-delay="300"
    >
      <div className="row mb-lg-0 mb-5 p-4 p-sm-0">
        <div className="col-lg-6 col-12 order-lg-1 order-2">
          <div className='slider-heading'>
            <h5>TESTIMONIALS</h5>
            <h1>What they say about us</h1>
          </div>
          <div className="carousel-container">
            <Carousel
              responsive={responsive}
              arrows={false}
              showDots={true}
              renderDotsOutside={true}
              dotListClass="dotCostomazation"
            >
              {
                testimonialsData.testimonials.map(testimonial =>
                  <div key={testimonial.id} className='testimonials-user'>
                    <img src={testimonial.img} alt="" className='img-fluid' />
                    <p>{testimonial.des}</p>
                    <h5>{testimonial.author}</h5>
                    <h6>{testimonial.position}</h6>
                  </div>
                )
              }
            </Carousel>
          </div>
        </div>
        <div className="col-lg-5 col-12 offset-lg-1 offset-0  order-lg-2 order-1">
          <img src={testImg} alt="" className='margin-nagetive' />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;