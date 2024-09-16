import React from 'react';
import { Outlet } from 'react-router-dom';
import Top from "./Top";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainLayout = () => {
  return (
    <>
      <Top />
      <Navbar />
      <div className="App">
        <Outlet /> {/* This is where nested routes will render */}
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
