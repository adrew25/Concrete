import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo_1.png";

const NavBar = () => {
  return (
    <div>
      <nav className="flex items-center justify-center">
        <Link
          to="/"
          className="flex items-center justify-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 2xl:w-1/7"
        >
          <img src={Logo} alt="logo" className="h-full w-auto cursor-pointer" />
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
