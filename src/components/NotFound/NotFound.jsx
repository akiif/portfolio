'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Box, Button, Grid, ThemeProvider, Typography } from '@mui/material';
import theme from '@/utils/theme.util';
import styles from './NotFound.module.css';

function NotFound() {
  const router = useRouter();

  const handleRedirect = (path) => {
    router.push(path);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box container spacing={4} className={styles.not_found_page}>
        <Grid
          item
          xs={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Box className={styles.not_found_text_container}>
            <Typography className={styles.not_found_main_heading}>Whoops</Typography>
            <Typography className={styles.not_found_sub_heading}>
              The page you are looking for might be removed or is temporarily
              unavailable.
            </Typography>
            <Box className={styles.not_found_btn_container}>
              <Button variant="outlined" onClick={() => handleRedirect('/')}>
                HOME
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6} className={styles.not_found_img_container}>
          <Image
            src="/images/not-found/not-found.svg"
            alt="404"
            height={100}
            width={100}
            className={styles.not_found_img}
          />
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default NotFound;
