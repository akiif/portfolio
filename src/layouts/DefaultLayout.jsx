'use client';

import React from 'react';
import theme from '@/utils/theme.util';
import { ThemeProvider } from '@emotion/react';
import { StyledEngineProvider } from '@mui/material/styles';

// import components
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

function DefaultLayout({ children }) {
  return (
    <div className='app__layout'>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
}

export default DefaultLayout;
