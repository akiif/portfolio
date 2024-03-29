import React from 'react';
import { useBackground } from '@/store/globalStore';
import styles from './Footer.module.css';

// import mui icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  const background = useBackground();

  return (
    <footer
      className={`${styles.footer} colored__section`}
      style={{
        ...(background && {
          background: `${background}`,
        }),
      }}
    >
      <div className={styles.footer__socials}>
        <p className={styles.footer__item}>
          <a
            href="https://github.com/akiif/"
            className={`${styles.footer__link}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon className={styles.footer__mui__icon} />
          </a>
        </p>
        <p className={styles.footer__item}>
          <a
            href="https://www.linkedin.com/in/akif-mohammed/"
            className={`${styles.footer__link}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className={styles.footer__mui__icon} />
          </a>
        </p>
        <p className={styles.footer__item}>
          <a
            href="https://twitter.com/akiif_m/"
            className={`${styles.footer__link}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <TwitterIcon className={styles.footer__mui__icon} />
          </a>
        </p>
        <p className={styles.footer__item}>
          <a
            href="https://www.instagram.com/akiif.m/"
            className={`${styles.footer__link}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon className={styles.footer__mui__icon} />
          </a>
        </p>
      </div>
      <p className={styles.footer__copyright}>
        © {new Date().getFullYear()} Akif Mohammed
      </p>
    </footer>
  );
}

export default Footer;
