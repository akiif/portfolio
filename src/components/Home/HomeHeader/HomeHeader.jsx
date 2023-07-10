import React from 'react';
import { Box } from '@mui/material';
import styles from './HomeHeader.module.css';

// import components
import HomeHeaderGreetings from './HomeHeaderGreetings';
import HeaderSocialIcons from './HeaderSocialIcons';
import HeaderImage from './HeaderImage';

function HomeHeader() {
  return (
    <Box className={styles.home__header__container}>
      <Box>
        <HomeHeaderGreetings />
        <HeaderSocialIcons />
      </Box>
      <HeaderImage />
    </Box>
  );
}

export default HomeHeader;
