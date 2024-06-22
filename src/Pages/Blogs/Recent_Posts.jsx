import React from 'react';
import useBlogs from '../../Hooks/useBlogs';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading';

const Recent_Posts = () => {
  const [blogs, , loading] = useBlogs();

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h6 className='recent-main recent-head'>Recent Posts</h6>
      <div className="row gy-3">
        {
          blogs.length ?
            blogs.slice(1, 4).map(blog =>
              <div key={blog._id} className='col-12'>
                <div className='d-flex justify-content-between align-items-center'>
                  <img src={blog.resize_img} alt="" className='img-fluid me-3' width={100} height={100} />
                  <div>
                    <h6 className='card-sub recent-sub'>{blog.date}</h6>
                    <Link className='blogs_hover' to={`/blogs/${blog._id}`}>
                      <h6 className='recent-head hover_link'>{blog.heading}</h6>
                    </Link>
                  </div>
                </div>
              </div>
            ) :
            <h1>No Blogs found</h1>
        }
      </div>
    </div>
  );
};

export default Recent_Posts;