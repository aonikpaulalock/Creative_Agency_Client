import React from 'react';
import Blog_Details_Banner from './Blog_Details_Banner';
import useDetailsBlog from '../../Hooks/useDetilsBlog';
import Navber from '../../Shared/Navber';
import Details_Two_Side from './Details_Two_Side';
import Loading from '../../Shared/Loading';

const Blog_Details = () => {
  const [details, , loading] = useDetailsBlog();
  return (
    <div>
      <div className='container'>
        <Navber />
      </div>
      {
        loading ?
          <Loading /> :
          <>
            <Blog_Details_Banner details={details} />
            <Details_Two_Side details={details} />
          </>
      }
    </div>
  );
};

export default Blog_Details;