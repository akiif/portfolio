import React from 'react';
import ImageSlider from './ImageSlider';
import { FaLink, FaGithub, FaNpm } from "react-icons/fa";

function ProjectItem({ project }) {
  const sectionID = project.title.toLowerCase().split(" ").join("-");
  
  return (
    <section className='projects-page-item' id={sectionID}>
      <h3 className='projects-page-item-title'>{project.title}</h3>
      <ImageSlider slides={project.slides} />
      <div className="projects-tech-stack">
        <h3 className="projects-tech-stack-title">Tech Stack ⚙️:</h3>
        <div className="projects-page-tech-stack-items">
          {project.techStack.map((tech, index) => (
          <img src={tech} key={index} className="projects-page-tech-stack-image" />
        ))}
        </div>
        
      </div>
      <p className='projects-page-desc'>{project.desc}</p>
      <div className="project-links">
        {project.link ? <a href={project.link} className='link-hover projects-page-links' target="_blank" rel="noopener noreferrer"><FaLink className='Fa-icons' /></a> : null}
        {project.github ? <a href={project.github} className='link-hover projects-page-links' target="_blank" rel="noopener noreferrer"><FaGithub className='Fa-icons' /></a> : null}
        {project.npm ? <a href={project.npm} className='link-hover projects-page-links' target="_blank" rel="noopener noreferrer"><FaNpm className='Fa-icons' /></a> : null}
      </div>
    </section>
  );
}

export default ProjectItem;