import React from 'react';
import HeaderMenu from '../components/HeaderMenu';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const LayoutPageMaster = () => {
  return (
    <>
      <HeaderMenu />
      <main className="container">
        <div style={{ minHeight: '650px' }}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LayoutPageMaster;
