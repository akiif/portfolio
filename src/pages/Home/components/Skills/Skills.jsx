import React from 'react';
import SkillsList from './skills-list.json';
import ToolsList from "./tools-list.json";
import * as SkillsImages from "../../../../assets/images/skills/skills-images";
import * as ToolsImages from "../../../../assets/images/tools/tools-images";

function Skills() {
  return (
    <section className="skills" id='skills'>
      <h2 className="title">Skills</h2>
      <h3 className="sub-title">Tech Stack 👨‍💻</h3>
      <div className="skills-list">
        {SkillsList.map((skillItem) => (
          <div className="skill-item" key={skillItem.id}>
            <img className='skill-img grow-img' src={SkillsImages[skillItem.img]} alt={skillItem.name} />
            <h3 className="skill-title">{skillItem.name}</h3>
          </div>
        ))}
      </div>
      <h3 className="sub-title">Tools ⚙️</h3>
      <div className='skills-list'>
        {ToolsList.map((toolItem) => (
          <div className="skill-item" key={toolItem.id}>
            <img className='skill-img grow-img' src={ToolsImages[toolItem.img]} alt={toolItem.name} />
            <h3 className="skill-title">{toolItem.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;