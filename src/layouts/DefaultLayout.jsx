import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow py-[32px] lg:py-[80px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
