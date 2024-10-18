import React from 'react';
import SkillsItem from './SkillsItem';
import SkillsLanguage from './SkillsLanguage';
import './styles/Skills.css'; // Importing vanilla CSS

const Skills = () => {
  return (
    <div className="skills-section">
      <h1 className="heading">
        Education & <span className="highlight-text">Skill</span>
      </h1>
      <div className="skills-grid">
        <div>
          <SkillsItem title="React Developer" year="2022 - 2024" />
          <SkillsItem title="MERN Stack Developer" year="2022 - 2024" />
          <SkillsLanguage
            skill1="html"
            skill2="css"
            skill3="JavaScript"
            level1="w-[91%]"
            level2="w-[88%]"
            level3="w-[80%]"
          />
        </div>
        <div>
          <SkillsItem title="Next Js Developer" year="2022 - 2024" />
          <SkillsItem title="Node Js Developer" year="2022 - 2024" />
          <SkillsLanguage
            skill1="React Js"
            skill2="Next Js"
            skill3="TypeScript"
            level1="w-[81%]"
            level2="w-[77%]"
            level3="w-[88%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
