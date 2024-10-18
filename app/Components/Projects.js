import Image from 'next/image';
import React from 'react';
import './styles/Projects.css';// Importing the vanilla CSS file

const Projects = () => {
  return (
    <div id="Project" className="projects-section">
      <h1 className="heading">
        Pro<span className="highlight-text">Ject</span>
      </h1>

      <div className="projects-grid">
        <div data-aos="fade-up">
          {/* Project 1 */}
          <div className="project-item">
            <Image
              src="/images/p1.jpeg"
              alt="portfolio"
              width={300}
              height={300}
              className="project-image"
            />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          {/* Project 2 */}
          <div className="project-item">
            <Image
              src="/images/p2.jpeg"
              alt="portfolio"
              width={300}
              height={300}
              className="project-image"
            />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="600">
          {/* Project 3 */}
          <div className="project-item">
            <Image
              src="/images/p7.jpeg"
              alt="portfolio"
              width={300}
              height={300}
              className="project-image"
            />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="900">
          {/* Project 4 */}
          <div className="project-item">
            <Image
              src="/images/p4.jpeg"
              alt="portfolio"
              width={300}
              height={300}
              className="project-image"
            />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="1200">
          {/* Project 5 */}
          <div className="project-item">
            <Image
              src="/images/p5.jpeg"
              alt="portfolio"
              width={300}
              height={300}
              className="project-image"
            />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="1600">
          {/* Project 6 */}
          <div className="project-item">
            <Image
              src="/images/p8.jpeg"
              alt="portfolio"
              width={300}
              height={300}
              className="project-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
