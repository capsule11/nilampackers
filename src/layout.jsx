import React from "react";
import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <Navbar />
      <Outlet />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
