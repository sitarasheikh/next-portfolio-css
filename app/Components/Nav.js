 "use client";
 import React, { useState } from 'react';
import './styles/Nav.css'; // Importing the vanilla CSS file

const Nav = ({ openNav }) => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
    if (!nav) {
      openNav();
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">
          WEB<span>DEV</span>
        </h1>

        {/* Desktop Links */}
        <div className="navbar-links">
          <a href="#home" className="navbar-link">Home</a>
          <a href="#about" className="navbar-link">ABOUT</a>
          <a href="#services" className="navbar-link">SERVICES</a>
          <a href="#project" className="navbar-link">PROJECT</a>
          <a href="#blog" className="navbar-link">BLOG</a>
          <a href="#contact" className="navbar-link">CONTACT</a>
        </div>

        {/* Toggle Hamburger/Cross Icon */}
        <div onClick={toggleNav} className="navbar-toggle">
          {nav ? 'Close Icon' : 'Hamburger Icon'} {/* Replace with actual icons */}
        </div>
      </div>
    </div>
  );
};

export default Nav;
