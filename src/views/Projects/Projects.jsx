'use client';
import React from 'react';
import { Box } from '@mui/material';
import styles from './Projects.module.css';

// import components
import Title from '../../components/common/Title';
import ProjectItem from './components/ProjectItem';

// import projectsList
import ProjectsList from './ProjectsList';

function Projects() {
  return (
    <Box className={styles.projects}>
      <Title>Projects</Title>
      <Box className={styles.projects__item__list}>
        {ProjectsList.map((project, index) => (
          <ProjectItem project={project} key={index} id={index} />
        ))}
      </Box>
    </Box>
  );
}

export default Projects;
