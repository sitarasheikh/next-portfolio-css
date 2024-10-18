import React from 'react';
// import Nav from './Components/Nav.js'; 
import './styles/MobileNav.css'; // Importing the vanilla CSS file

const MobileNav = ({ nav, closeNav }) => {
  const navAnimation = nav ? 'open' : 'close'; // Using CSS classes for animation

  return (
    <div className={`mobile-nav ${navAnimation}`}>
      <div className="mobile-nav-links">
        <a href="#home" onClick={closeNav} className="nav-link-mobile">HOME</a>
        <a href="#services" onClick={closeNav} className="nav-link-mobile">SERVICES</a>
        <a href="#about" onClick={closeNav} className="nav-link-mobile">ABOUT</a>
        <a href="#project" onClick={closeNav} className="nav-link-mobile">PROJECT</a>
        <a href="#blog" onClick={closeNav} className="nav-link-mobile">BLOG</a>
        <a href="#contact" onClick={closeNav} className="nav-link-mobile">CONTACT</a>
      </div>
      <div onClick={closeNav} className="close-icon">
        {/* Replace XMarkIcon with any custom icon or plain text */}
        X
      </div>
    </div>
  );
};

export default MobileNav;
