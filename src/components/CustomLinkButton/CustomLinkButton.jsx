import React from 'react';
import { Button } from '@mui/material';
import Link from 'next/link';
import styles from './CustomLinkButton.module.css';

function CustomLinkButton({
  children,
  linkButton,
  className,
  download,
  ariaLabel,
  href,
}) {
  if (linkButton) {
    return (
      <Link
        className={`${styles.btn} ${className}`}
        aria-label={ariaLabel}
        href={href}
      >
        {children}
      </Link>
    );
  }
  return (
    <Button
      className={`${styles.btn} ${className}`}
      download={download}
      aria-label={ariaLabel}
      href={href}
    >
      {children}
    </Button>
  );
}

export default CustomLinkButton;
