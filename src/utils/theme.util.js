import { createTheme } from '@mui/material/styles';

// import fonts
import { poppins } from './fonts.util';

const PRIMARY_FONT = poppins;
const SECONDARY_FONT = PRIMARY_FONT;

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFF',
    },
    secondary: {
      main: '#5541D7',
    },
    linkHover: {
      main: '#4786e5',
    },
    neutral: {
      main: '#4F4F4F',
    },
    opaque: {
      main: 'rgba(0, 0, 0, 0.2)',
    },
  },
  typography: {
    fontFamily: SECONDARY_FONT,
    h1: {
      fontFamily: PRIMARY_FONT,
    },
    h2: {
      fontFamily: PRIMARY_FONT,
    },
    h3: {
      fontFamily: PRIMARY_FONT,
    },
    h5: {
      fontFamily: PRIMARY_FONT,
    },
    h6: {
      fontFamily: PRIMARY_FONT,
    },
    subtitle1: {
      fontFamily: PRIMARY_FONT,
    },
    button: {
      fontFamily: PRIMARY_FONT,
    },
    subtitle2: {
      fontFamily: PRIMARY_FONT,
    },
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        list: {
          '&[role="menu"]': {
            backgroundColor: 'rgb(28, 33, 40)',
          },
        },
      },
    },
  },
});

export default theme;
