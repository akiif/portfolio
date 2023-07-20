import React from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import styles from './Projects.module.css';

// import components
import ProjectsLinks from '../common/Projects/ProjectsLinks';
import ImageSlider from './ImageSlider';

function ProjectItem({ project, id }) {
  const sectionID = project.title.toLowerCase().split(' ').join('-');
  return (
    <Box key={id} className={styles.project__item__container} id={sectionID}>
      <Typography className={`${styles.projects__item__title}`}>
        {project.title}
      </Typography>
      <ImageSlider slides={project.slides} />
      <Box className={styles.projects__tech__stack}>
        <Typography className={styles.projects__tech__stack__title}>
          Tech Stack ⚙️:
        </Typography>
        <Box className={styles.projects__tech__stack__items}>
          {project.techStack.map((tech, index) => (
            <Image
              src={tech}
              key={index}
              alt={index}
              className={styles.projects__tech__stack__images}
            />
          ))}
        </Box>
      </Box>
      <Typography className={styles.projects__item__desc}>{project.desc}</Typography>
      <ProjectsLinks
        project={project}
        projectIconClassName={styles.projects__item__links}
        boxClassName={styles.projects__item__links__container}
      />
    </Box>
  );
}

export default ProjectItem;
