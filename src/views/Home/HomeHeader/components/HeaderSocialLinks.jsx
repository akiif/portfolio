import React from 'react';
import styles from '../HomeHeader.module.css';

function HeaderSocialLinks({ socialItemInfo, children }) {
  return (
    <p className={styles.header__social__item}>
      <a
        href={socialItemInfo.href}
        className={`${styles.header__link} link__hover`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={socialItemInfo.ariaLabel}
      >
        {children}
      </a>
    </p>
  );
}

export default HeaderSocialLinks;
