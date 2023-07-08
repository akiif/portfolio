import React from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';
import styles from '../Navbar.module.css';

// import font
import { lato } from '@/utils/fonts.util';

function NavbarLink({ page, currentPage }) {
  return (
    <Link href={page.href} className={styles.navbar__link__items}>
      <Typography
        className={`${styles.navbar__link__text} ${lato.className}`}
        sx={{
          color: (currentPage === page.href) ? '#7f40ef' : '#fff'
        }}
      >
        {page.display}
      </Typography>
    </Link>
  );
}

export default NavbarLink;
