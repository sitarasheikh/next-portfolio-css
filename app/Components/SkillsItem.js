import React from 'react';
import './styles/SkillsItem.css'; // Importing vanilla CSS

const SkillsItem = ({ title, year }) => {
  return (
    <div className="skills-item">
      <span className="skills-year">
        {year}
      </span>
      <h1 className="skills-title">
        {title}
      </h1>
      <p className="skills-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quas voluptatum nostrum rerum exercitationem laudantium voluptate, a vero odio enim iure itaque ut. Nihil enim quos, neque porro adipisci dignissimos.
      </p>
    </div>
  );
};

export default SkillsItem;
