import React from 'react';
import Navber from '../Shared/Navber';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Layout = () => {
  const location = useLocation()
  return (
    <div>
        <div>
          <Outlet />
        </div>
        <div>
          <Footer />
        </div>
    </div>
  );
};

export default Layout;