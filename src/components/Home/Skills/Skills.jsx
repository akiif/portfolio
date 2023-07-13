import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './Skills.module.css';

// import components
import Title from '@/components/common/Title';
import TechStack from './TechStack/TechStack';
import Tools from './Tools/Tools';

function Skills() {
  return (
    <Box className={styles.skills} id="skills">
      <Title>Skills</Title>
      <TechStack />
      <Tools />
    </Box>
  );
}

export default Skills;
