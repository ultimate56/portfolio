import React from "react";
import { Link } from "react-router-dom";

const VerticalNavBar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="hidden lg:flex fixed top-1/2 left-0 transform -translate-y-1/2 w-24 flex-col justify-center gap-10 h-full ps-8 space-x-20 items-start bg-[#ECE7E1] z-20">
      <div className="mb-8">
        <Link
          to="/"
          className="text-gray-600 hover:text-black text-sm md:text-base tracking-wide transform -rotate-90 origin-left block whitespace-nowrap cursor-pointer"
        >
          Home
        </Link>
      </div>

      <div className="mb-8">
        <Link
          to="/about"
          className="text-gray-600 hover:text-black text-sm md:text-base tracking-wide transform -rotate-90 origin-left block whitespace-nowrap cursor-pointer"
        >
          About
        </Link>
      </div>

      <div className="mb-8">
        <Link
          to="/projects"
          className="text-gray-600 hover:text-black text-sm md:text-base tracking-wide transform -rotate-90 origin-left block whitespace-nowrap cursor-pointer"
        >
          Projects
        </Link>
      </div>

      <div className="mb-8">
        <Link
          to="/contact"
          className="text-gray-600 hover:text-black text-sm md:text-base tracking-wide transform -rotate-90 origin-left block whitespace-nowrap cursor-pointer"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default VerticalNavBar;
