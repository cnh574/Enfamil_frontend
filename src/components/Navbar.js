import React from "react";
import { Link } from "react-router-dom";
import ImageOne from "../images/enfamil.jpg";

const Navbar = () => {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
      role="navigation"
    >
      <div className="pt-12 mt-5">
        <img
          src={ImageOne}
          alt="enfamil"
          className="h-full rounded mb-20 shadow"
        />
      </div>
      {/* <div className="px-4 cursor-pointer"> */}
      <div className="px-4 cursor-pointer md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <Link className="p-4" to="/">
          Home
        </Link>
        <Link className="p-4" to="/products">
          Products
        </Link>
        <Link className="p-4" to="/locator">
          Enfamil locator
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
