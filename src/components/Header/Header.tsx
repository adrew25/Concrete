import React from "react";
import Logo from "../../assets/images/logo_1.png";
import "./Header.css";

function Header() {
  return (
    <section className="hero">
      <img src={Logo} alt="logo" className="hero-logo" />
      <h1 className="hero-text">Make your ideas happen.</h1>
    </section>
  );
}

export default Header;
