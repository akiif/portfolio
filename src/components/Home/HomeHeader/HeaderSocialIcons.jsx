import React from 'react';
import styles from './HomeHeader.module.css';

// import components
import HeaderSocialLinks from './HeaderSocialLinks';

// import social config
import socialsConfig from '@/config/socials.config';

// import icons utils
import socialIconsUtil from '@/utils/socialIcons.util';

function HeaderSocialIcons() {
  return (
    <div className={styles.header__social__links}>
      {socialsConfig.map((socialItemInfo) => (
        <HeaderSocialLinks key={socialItemInfo.icon} socialItemInfo={socialItemInfo}>
          {socialIconsUtil[`${socialItemInfo.icon}`](styles.header__mui__icon)}
        </HeaderSocialLinks>
      ))}
    </div>
  );
}

export default HeaderSocialIcons;
