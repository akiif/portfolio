import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import styles from './Projects.module.css';

// import data
import ProjectsList from './ProjectsList';

// import components
import Title from '@/components/common/Title';
import ProjectsLinks from '@/components/common/Projects/ProjectsLinks';

function Projects() {
  return (
    <Box className={`colored__section ${styles.projects}`}>
      <Title>Projects</Title>
      <Box className={styles.projects__list}>
        {ProjectsList.map((project, index) => {
          const projectItemClassName = `${styles.projects__item} ${
            (index + 1) % 2 === 0 && styles.projects__item__right__align
          }`;
          return (
            <Box key={index} className={projectItemClassName}>
              <Image
                src={project.img}
                alt={project.name}
                className={styles.projects__img}
              />
              <Box className={styles.projects__item__content}>
                <Typography className={`${styles.project__title}`}>
                  {project.name}
                </Typography>
                <Typography className={styles.project__desc}>
                  {project.desc}
                </Typography>
                <ProjectsLinks
                  project={project}
                  projectIconClassName={styles.project__link__icon}
                />
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default Projects;
