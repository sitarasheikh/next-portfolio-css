
"use client";

import React, { useState, useEffect } from 'react';
import Nav from './Components/Nav';
import MobileNav from './Components/MobileNav';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Testimonial from './Components/Testimonial';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => setNav(true);   // Open mobile navigation
  const closeNav = () => setNav(false); // Close mobile navigation

  // Animation AOS Setup
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, 
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init', 
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50, 
      throttleDelay: 99, 

      // Settings that can be overridden on per-element basis:
      offset: 120, 
      delay: 0,
      duration: 1000, 
      easing: 'ease', 
      once: false, 
      mirror: true, 
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div id="home">
        {/* Mobile Navigation */}
        {nav && <MobileNav nav={nav} closeNav={closeNav} />} 

        {/* Navbar */}
        <Nav openNav={openNav} />

        {/* Hero Section */}
        <Hero />
        <div className="relative z-[30]">
          {/* About */}
          <About />
          {/* Services */}
          <Services />
          {/* Skills */}
          <Skills />
          {/* Projects */}
          <Projects />
          {/* Testimonial */}
          <Testimonial />
          {/* Blog */}
          <Blog />
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;