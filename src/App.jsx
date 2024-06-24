import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import InitialLoading from './components/Loading/InitialLoading';
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: 'ease-in-out',
      delay: 0,
      once: true,
    });
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {
        loading ? <InitialLoading /> :
          <RouterProvider router={router} />
      }
    </>
  );
};

export default App;
