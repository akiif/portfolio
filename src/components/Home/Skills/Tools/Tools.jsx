import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';
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
      <Box className={styles.skills__list}>
        {toolsList.map((tool) => (
          <Box key={tool.id} className={styles.skills__item}>
            <Image
              src={ToolsIcons[tool.img]}
              alt={tool.name}
              className={`${styles.skills__img} ${styles.skills__grow__img}`}
            />
            <SkillsItemTitle>{tool.name}</SkillsItemTitle>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Tools;
