import React from 'react';
import { Typography } from '@mui/material';
import styles from './Skills.module.css';

function SkillsItemTitle({ children }) {
  return (
    <Typography variant="h4" className={styles.skills__item__title}>
      {children}
    </Typography>
  );
}

export default SkillsItemTitle;
