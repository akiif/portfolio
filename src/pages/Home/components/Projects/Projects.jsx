import React from 'react';
import * as ProjectImages from "../../../../assets/images/projects/projects-images";
import ProjectList from "./project-list.json";
import { Link } from 'react-router-dom';
import { FaLink, FaGithub, FaNpm } from "react-icons/fa";

function Projects() {
  return (
    <section className="projects colored-section" id='projects'>
      <h2 className="title project-main-title">Projects</h2>
      <div className="projects-list">
        {ProjectList.map((project, index) => {
          let className = ["project-item"];
          if ((index + 1) % 2 === 0) { className.push("projects-right-align"); }
          return (
            <div key={project.id} id={project.id} className={className.join(" ")}>
              <img src={ProjectImages[project.img]} alt="" className="project-img" />
              <div className="project-details">
                <h3 className="project-title">{project.name}</h3>
                <p className='project-desc'>{project.desc}</p>
                <div className="project-links">
                  {project.link ? <a href={project.link} className='project-link-items link-hover' target="_blank" rel="noopener noreferrer"><FaLink className='Fa-icons' /></a> : null}
                  {project.github ? <a href={project.github} className='project-link-items link-hover' target="_blank" rel="noopener noreferrer"><FaGithub className='Fa-icons' /></a> : null}
                  {project.npm ? <a href={project.npm} className='project-link-items link-hover' target="_blank" rel="noopener noreferrer"><FaNpm className='Fa-icons' /></a> : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Link to="/projects" className='btn projects-btn'>View All 🔗</Link>
    </section>
  );
}

export default Projects;