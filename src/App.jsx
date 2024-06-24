import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import AOS from 'aos';
import 'aos/dist/aos.css';
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: 'ease-in-out',
      delay: 0,
      once: true,
    });
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
