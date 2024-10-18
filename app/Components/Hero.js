import React from 'react';
import './styles/Hero.css'; // Importing the vanilla CSS file
import TextEffect from './TextEffect'; // Assuming this remains the same
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        {/* Text Section */}
        <div className="hero-text">
          <h1>
            Hi, I&apos;M <span>SITARA!</span>
          </h1>
          <TextEffect />
          <p>
            Hi, I&apos;m Sitara Ishtiaq, a developer with a passion for Artificial Intelligence.
            I specialize in front-end development using React and Next.js to create dynamic applications.
            Let&apos;s connect and explore the exciting possibilities of technology together!
          </p>

          {/* Download CV Button */}
          <button>
            <a href="images/cv.pdf" download className="download-cv">
              <p>Download CV</p>
              <ArrowDownTrayIcon className="icon" />
            </a>
          </button>
        </div>

        {/* Profile Image */}
        <div className="hero-image" data-aos="zoom-in">
          <img src="./images/profile.jpeg" alt="user" className="image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
