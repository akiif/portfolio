import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
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
import styles from './Navbar.module.css';

// import components
import Logo from './Logo/Logo';
import NavbarLink from './NavbarLink/NavbarLink';

const pages = [
  {
    display: 'HOME',
    href: '/',
  },
  {
    display: 'ABOUT',
    href: '/#about',
  },
  {
    display: 'SKILLS',
    href: '/#skills',
  },
  {
    display: 'PROJECTS',
    href: '/projects',
  },
];

function Navbar() {
  const [showNavMenu, setShowNavMenu] = useState(null);
  const currentPage = usePathname();

  const handleOpenNavMenu = (event) => {
    setShowNavMenu(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setShowNavMenu(null);
  };

  return (
    <AppBar
      variant="contained"
      position="static"
      className={styles.navbar__container}
    >
      <Container maxWidth="xl">
        <Toolbar className={styles.navbar__toolbar}>
          <Logo />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.display}
                onClick={handleCloseNavMenu}
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
                <MenuItem key={page.display} onClick={handleCloseNavMenu}>
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
