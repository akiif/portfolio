'use client';

import React from 'react';
import theme from '@/utils/theme.util';
import { ThemeProvider } from '@emotion/react';
import { StyledEngineProvider } from '@mui/material/styles';

// import components
import Navbar from '@/components/common/Navbar/Navbar';

function DefaultLayout({ children }) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Navbar />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default DefaultLayout;
