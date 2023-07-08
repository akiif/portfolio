import React from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';
import { sora } from '@/utils/fonts.util';
import styles from '../Navbar.module.css';

function Logo() {
  return (
    <Link
      href="/"
      className={styles.logo__link}
      sx={{ display: { xs: 'none', md: 'flex' } }}
    >
      <Typography className={`${styles.logo} ${sora.className}`}>
        Akif Mohammed
      </Typography>
    </Link>
  );
}

export default Logo;
