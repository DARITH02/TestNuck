import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Scroll from "../Scroll";
const RootLayout = () => {
  return (
    <div className="container-fluid">
      <nav className="nav-container">
        <Scroll />
        <Navbar />
      </nav>
      <Outlet />
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
