import React from 'react';
import TestimonialSider from './TestimonialSider';
import './styles/Testimonial.css'; // Importing the vanilla CSS file

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <h1 className="testimonial-heading">
        Client <span className="highlight">Review</span>
      </h1>
      <div className="testimonial-container">
        {/* Testimonial Sider */}
        <TestimonialSider />
      </div>
    </div>
  );
};

export default Testimonial;
