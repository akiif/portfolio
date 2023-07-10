import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './HomeHeader.module.css';

// import fonts
import { montserrat } from '@/utils/fonts.util';

function HomeHeaderGreetings() {
  return (
    <Box>
      <Typography
        variant="h1"
        className={`${styles.header__heading} ${montserrat.className}`}
      >
        Hey, <br /> I'm Akif
      </Typography>
    </Box>
  );
}

export default HomeHeaderGreetings;
