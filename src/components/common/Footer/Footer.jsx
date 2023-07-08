import React from 'react';
import styles from './Footer.module.css';

// import mui icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <footer className={`${styles.footer} colored__section`}>
      <div className={styles.footer__socials}>
        <p className={styles.footer__item}>
          <a
            href="https://github.com/akiif/"
            className="footer-link link__hover"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon color="primary" className={styles.footer__mui__icon} />
          </a>
        </p>
        <p className={styles.footer__item}>
          <a
            href="https://www.linkedin.com/in/akif-mohammed/"
            className="footer-link link__hover"
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
            className="footer-link link__hover"
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
            className="footer-link link__hover"
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
