import React from 'react';
import "../../Styles/Home/Blogs.css"
import { homeBlog } from '../../Data/Blog';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
const Blogs = () => {
  const navigate = useNavigate()
  return (
    <div className="blogs-container">
      <div className='container'
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        data-aos-delay="300"
      >
        <div className="d-md-flex justify-content-between align-items-center mb-5 mb-md-0 p-4 p-sm-0">
          <div className='slider-heading'>
            <h5>Enjoy our latest projects</h5>
            <h1>Selected work</h1>
          </div>
          <button
            onClick={() => navigate("/portfolio")}
            className='banner-button blogs-button'>View portfolio</button>
        </div>
        <div className="row g-3 p-4 p-sm-0">
          {
            homeBlog.blogs.map(blog =>
              <div className='col-lg-4 col-md-6' key={blog.id}>
                <div className="card card-hover-effect">
                  <img className="image-hover-effect" src={blog.img} alt="img-fluid" />
                  <div className="card-img-overlay">
                    <div className='d-flex mb-2'>
                      <h6 className="hover-title me-2">{blog.title}</h6>
                      <h6 className="hover-title">{blog.date}</h6>
                    </div>
                    <h5 className="hover-head">{blog.head}</h5>
                    <div className='hover-button'>
                      <button className='hover-read-more'>Read more
                        <BsArrowRight className='hover-arrow' />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Blogs;