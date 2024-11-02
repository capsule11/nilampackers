import React from "react";
import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <Navbar />
      <ToastContainer position="top-center" theme="light" />
      <Outlet />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
