import React from 'react';
import Image from 'next/image';
import { Box, Grid } from '@mui/material';
import styles from '../Skills.module.css';

// import components
import SkillsSubTitle from '../SkillsSubTitle';
import SkillsItemTitle from '../SkillsItemTitle';

// import tech stack config
import techStackList from './techStack.config';

// import tech stack icons
import TechStackIcons from '@/assets/icons/skills/techStacks/TechStackIcons';

function TechStack() {
  return (
    <Box sx={{ marginTop: '45px' }}>
      <SkillsSubTitle>Tech Stack 👨‍💻</SkillsSubTitle>
      <Grid container spacing={3} className={styles.skills__list}>
        {techStackList.map((techStack, index) => (
          <Grid item xs={6} md={4} key={index} className={styles.skills__item}>
            <Image
              src={TechStackIcons[techStack.img]}
              alt={techStack.name}
              className={`${styles.skills__img} ${styles.skills__grow__img}`}
            />
            <SkillsItemTitle>{techStack.name}</SkillsItemTitle>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default TechStack;
