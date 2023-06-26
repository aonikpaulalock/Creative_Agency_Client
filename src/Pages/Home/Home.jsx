import React from 'react';
import Banner from './Banner';
import WeDo from './WeDo';
import Approach from './Approach';
import Services from './Services';
import Projects from './Projects';
import TestimonialsLogo from './TestimonialsLogo';
import Testimonials from './Testimonials';
import Blogs from './Blogs';
import Acchivement from './Acchivement';

const Home = () => {
  return (
    <>
      <Banner />
      <WeDo />
      <Approach/>
      <Services/>
      <Projects/>
      <TestimonialsLogo/>
      <Testimonials/>
      <Blogs/>
      <Acchivement/>
    </>
  );
};

export default Home;