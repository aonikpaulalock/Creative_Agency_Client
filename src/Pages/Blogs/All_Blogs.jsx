import React from 'react';
import useBlogs from '../../Hooks/useBlogs';
import { Link } from 'react-router-dom';

const All_Blogs = () => {
  const [blogs] = useBlogs();
  return (
    <div className='row my-4 g-4'>
      {
        blogs.map(blog =>
          <div key={blog._id} className='col-12'>
            <img src={blog.long_img} alt="" className='img-fluid rounded-1 w-100' />
            <div className='d-flex justify-content-between align-items-center  mt-2'>
              <div className='d-flex justify-content-between align-items-center'>
                <h6 className='card-sub'>{blog.type} | </h6>
                <h6 className='ms-2 card-sub'> {blog.date}</h6>
              </div>
              <h6 className='card-sub'>By:
                <span className='bold-author'> {blog.user.author}</span>
              </h6>
            </div>
            <div>
              <Link className='blogs_hover' to={`/blogs/${blog._id}`}>
                <h5 className='project-head blogs-head'>{blog.heading}</h5>
                </Link>
              <p className='projects-description blogs-sub'>{blog.subHeading}</p>
            </div>
          </div>
        )
      }
    </div >
  );
};

export default All_Blogs;