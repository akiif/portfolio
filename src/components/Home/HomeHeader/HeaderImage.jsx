import React from 'react';
import styles from './HomeHeader.module.css';

function HeaderImage() {
  return (
    <img
      src="/images/home/HomeHeader/bitmoji.png"
      alt="bitmoji with hey"
      className={`${styles.header__bitmoji__img} shake__img`}
    />
  );
}

export default HeaderImage;
