import React from 'react';
import './styles/About.css'; // Importing the vanilla CSS file

const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h1>ABOUT ME</h1>
          <h2>
            Transforming <span>Visions</span>
          </h2>
          <div className="separator">
            <span className="line"></span>
            <p>
              I am a highly motivated and dedicated software engineer with a passion for transforming innovative ideas into reality. I have worked on various projects, including web development and AI integrations.
            </p>
          </div>

          {/* Uncomment if you wish to include the Download CV button */}
          {/* <button className="download-cv">
            <p>Download CV</p>
            <ArrowDownTrayIcon className="icon" />
          </button> */}
        </div>

        <div data-aos="fade-left" className="about-image">
          <img src="/images/about2.jpeg" alt="user" className="image" />
          <div className="image-background"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
