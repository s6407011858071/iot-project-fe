import React from "react";
import { Link, Outlet } from "react-router-dom";

const links = [
  { key: "about-us", label: "About us", path: "/about-us" },
  { key: "dashboard", label: "Dashboard", path: "/dashboard" },
  { key: "iot-setting", label: "IoT setting", path: "/iot-setting" },
  { key: "contact-us", label: "Contact Us", path: "/contact-us" },
];

const Header = () => {
  return (
    <div className="bg-secondary">
      <div className="flex items-center container mx-auto p-4">
        <div className="flex items-center flex-grow">
          <Link to="/">
            <div className="flex gap-x-[13px] cursor-pointer">
              <img
                alt="logo"
                src="/images/logo.webp"
                className="h-[52px] w-[52px] lg:h-[85px] lg:w-[85px]"
              />
              <div className="flex flex-col">
                <p className="text-primary font-bold text-[24px] lg:text-[35px]">
                  Smart Aquarium
                </p>
                <p className="text-primary font-bold text-[14px] lg:text-[20px]">
                  Internet of Things - Project
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <div className="hidden lg:flex gap-x-[24px]">
            {links.map((link) => (
              <Link key={link.key} to={link.path}>
                <p className="text-[24px] text-[#4A4A4A]">{link.label}</p>
              </Link>
            ))}
          </div>
          <div className="lg:hidden">
            <div className="cursor-pointer">
              <img
                alt="menu"
                src="/images/hamburger.webp"
                className="h-[45px] w-[45px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
