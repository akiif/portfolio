import React from 'react';
import { Button } from '@mui/material';
import styles from './CustomLinkButton.module.css';

function CustomLinkButton({ buttonText, className, download, ariaLabel, href }) {
  return (
    <Button
      className={`${styles.btn} ${className}`}
      download={download}
      aria-label={ariaLabel}
      href={href}
    >
      {buttonText}
    </Button>
  );
}

export default CustomLinkButton;
