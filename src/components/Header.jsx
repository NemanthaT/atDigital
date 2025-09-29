import Logo from "./../src/assets/logo.png";
import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <nav className="nav">
        <div className="logo">
          <img src={Logo} alt="AT digital logo" />
        </div>
        <button
          className="hamburger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <div>
          <ul className={menuOpen ? "nav-menu open" : "nav-menu"}>
            <li>
              <a href="#services">SERVICES</a>
            </li>
            <li>
              <a href="#about">ABOUT US</a>
            </li>
            <li>
              <a href="#contact">CONTACT US</a>
            </li>
            <li>
              <a href="#careers">CAREERS</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
