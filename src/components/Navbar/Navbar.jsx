import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  Button,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useBackground } from '@/store/globalStore';
import styles from './Navbar.module.css';

// import components
import Logo from './Logo/Logo';
import NavbarLink from './NavbarLink/NavbarLink';

// import pagesConfig
import pages from '@/config/pages.config';

function Navbar() {
  const [showNavMenu, setShowNavMenu] = useState(null);
  const currentPage = usePathname();
  const router = useRouter();
  const background = useBackground();

  const handleOpenNavMenu = (event) => {
    setShowNavMenu(event.currentTarget);
  };

  const handleCloseNavMenu = (path) => {
    setShowNavMenu(null);
  };

  const handleChangeRoute = (path) => {
    router.push(path);
    setShowNavMenu(null);
  };

  return (
    <AppBar
      variant="contained"
      position="static"
      className={styles.navbar__container}
      sx={{
        ...(background && {
          background: `${background}`,
        }),
      }}
    >
      <Container maxWidth="xl">
        <Toolbar className={styles.navbar__toolbar}>
          <Logo />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.display}
                onClick={() => handleChangeRoute(page.href)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <NavbarLink page={page} currentPage={currentPage} />
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={showNavMenu}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={Boolean(showNavMenu)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.display}
                  onClick={() => handleChangeRoute(page.href)}
                >
                  <NavbarLink page={page} currentPage={currentPage} />
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
