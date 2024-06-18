import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import AOS from 'aos';
import 'aos/dist/aos.css';
const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 0,
      duration: 1000,
      easing: 'ease',
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
