import React from 'react';
import Navber from '../Shared/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Layout = () => {
  return (
    <div>
        {/* <div>
          <Navber />
        </div> */}
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