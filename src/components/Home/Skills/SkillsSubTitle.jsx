import React from 'react';
import { Typography } from '@mui/material';
import styles from './Skills.module.css';

// import fonts
import { montserrat } from '@/utils/fonts.util';

function SkillsSubTitle({ children }) {
  return (
    <Typography
      variant="h3"
      className={`${styles.skills__sub__title} ${montserrat.className}`}
    >
      {children}
    </Typography>
  );
}

export default SkillsSubTitle;
