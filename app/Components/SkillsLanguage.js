import React from "react";
import './styles/SkillsLanguage.css'; // Importing vanilla CSS

const SkillsLanguage = ({ level1, level2, level3, skill1, skill2, skill3 }) => {
  return (
    <div>
      <div className="skills-item-container">
        <h1 className="skills-heading">
          {skill1}
        </h1>
        <span className={`skills-bar ${level1}`}></span>
      </div>

      <div className="skills-item-container">
        <h1 className="skills-heading">
          {skill2}
        </h1>
        <span className={`skills-bar ${level2}`}></span>
      </div>

      <div className="skills-item-container">
        <h1 className="skills-heading">
          {skill3}
        </h1>
        <span className={`skills-bar ${level3}`}></span>
      </div>
    </div>
  );
};

export default SkillsLanguage;
