import React from 'react';
import useBlogs from '../../Hooks/useBlogs';
import { Link } from 'react-router-dom';

const Creativity_Blogs = () => {
  const [blogs] = useBlogs();
  return (
    <div className='row my-4'>
      {blogs.filter(blog => blog.type.includes("Creativity"))
        .map(article =>
          <div key={article._id} className='col-12'>
            <img src={article.long_img} alt="" className='img-fluid rounded-1 w-100' />
            <div className='d-flex justify-content-between align-items-center  mt-2'>
              <div className='d-flex justify-content-between align-items-center'>
                <h6 className='card-sub'>{article.type} | </h6>
                <h6 className='ms-2 card-sub'> {article.date}</h6>
              </div>
              <h6 className='card-sub'>By:
                <span className='bold-author'> {article.user.author}</span>
              </h6>
            </div>
            <div>
              <Link className='blogs_hover' to={`/blogs/${article._id}`}>
                <h5 className='project-head blogs-head'>{article.heading}</h5>
              </Link>
              <p className='projects-description blogs-sub'>{article.subHeading}</p>
            </div>
          </div>
        )

      }
    </div>
  );
};

export default Creativity_Blogs;