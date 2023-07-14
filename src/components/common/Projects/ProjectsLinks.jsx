import React from 'react';
import { Box } from '@mui/material';
import ProjectsLinkButton from './ProjectsLinkButton';

// import project icons
import projectIcons from '@/utils/projectIcons.util';

function ProjectsLinks({ project, projectIconClassName, boxClassName }) {
  return (
    <Box className={boxClassName}>
      {project.link && (
        <ProjectsLinkButton projectLink={project.link} projectName={project.name}>
          {projectIcons.link(projectIconClassName)}
        </ProjectsLinkButton>
      )}
      {project.github && (
        <ProjectsLinkButton projectLink={project.github} projectName={project.name}>
          {projectIcons.github(projectIconClassName)}
        </ProjectsLinkButton>
      )}
      {project.npm && (
        <ProjectsLinkButton projectLink={project.npm} projectName={project.name}>
          {projectIcons.npm(projectIconClassName)}
        </ProjectsLinkButton>
      )}
    </Box>
  );
}

export default ProjectsLinks;
