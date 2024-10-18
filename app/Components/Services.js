import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/16/solid';
import React from 'react';
import './styles/Services.css'; // Importing the vanilla CSS file

const Services = () => {
  return (
    <div id="services" className="services-section">
      <p className="heading">
        My <span className="highlight-text">Services</span>
      </p>
      <div className="services-grid">
        <div data-aos="fade-right">
          <div className="service-item service-frontend">
            <CodeBracketSquareIcon className="service-icon" />
            <h1 className="service-title">Frontend</h1>
            <p className="service-description">
              I specialize in creating visually appealing and user-friendly web experiences using React, Next.js, and Tailwind CSS.
            </p>
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-delay="300">
          <div className="service-item service-backend">
            <RocketLaunchIcon className="service-icon" />
            <h1 className="service-title">Backend</h1>
            <p className="service-description">
              I am proficient in building scalable and efficient APIs using Node.js, Express.js, and MongoDB.
            </p>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-delay="500">
          <div className="service-item service-fullstack">
            <CommandLineIcon className="service-icon" />
            <h1 className="service-title">Fullstack</h1>
            <p className="service-description">
              I specialize in building complete web applications, including frontend and backend development using React, Next.js, and Node.js.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
