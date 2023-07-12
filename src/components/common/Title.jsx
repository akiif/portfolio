import React from 'react';
import { Typography } from '@mui/material';

// import font utils
import { montserrat } from '@/utils/fonts.util';

function Title({ titleText }) {
  return (
    <Typography
      variant="h2"
      className={montserrat.className}
      sx={{
        textAlign: 'center',
        fontSize: '4rem',
        fontWeight: 700,
      }}
    >
      {titleText}
    </Typography>
  );
}

export default Title;
