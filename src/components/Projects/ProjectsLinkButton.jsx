import React from 'react';
import { IconButton } from '@mui/material';

function ProjectsLinkButton({ projectName, projectLink, children }) {
  return (
    <IconButton
      href={projectLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={projectName}
    >
      {children}
    </IconButton>
  );
}

export default ProjectsLinkButton;
