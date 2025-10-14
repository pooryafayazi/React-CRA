import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* اینجا محتوای هر روت بچه اینجکت می‌شود */}
      <Footer />
    </>
  );
}


export default Layout;