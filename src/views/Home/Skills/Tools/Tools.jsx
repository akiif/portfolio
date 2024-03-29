import React from 'react';
import Image from 'next/image';
import { Box, Grid } from '@mui/material';
import styles from '../Skills.module.css';

// import components
import SkillsSubTitle from '../SkillsSubTitle';
import SkillsItemTitle from '../SkillsItemTitle';

// import tech stack config
import toolsList from './tools.config';

// import tools icons
import ToolsIcons from '@/assets/icons/skills/tools/ToolsIcons';

function Tools() {
  return (
    <Box sx={{ marginTop: '45px' }}>
      <SkillsSubTitle>Tools ⚙️</SkillsSubTitle>
      <Grid container spacing={3} className={styles.skills__list}>
        {toolsList.map((tool, index) => (
          <Grid item xs={6} md={4} key={index} className={styles.skills__item}>
            <Image
              src={ToolsIcons[tool.img]}
              alt={tool.name}
              className={`${styles.skills__img} ${styles.skills__grow__img}`}
            />
            <SkillsItemTitle>{tool.name}</SkillsItemTitle>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Tools;
