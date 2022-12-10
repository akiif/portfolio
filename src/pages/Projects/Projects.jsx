import React from 'react';
import ProjectItem from './components/ProjectItem';
import '../../assets/css/projects.css';
import ProjectsList from "./projects-list";

function Projects() {
  return (
    <section className='Projects'>
      <h2 className="projects-page-main-title">Projects</h2>
      {ProjectsList.map((project, index) => (
        <ProjectItem project={project} key={index} />
      ))}
    </section>
  );
}

export default Projects;