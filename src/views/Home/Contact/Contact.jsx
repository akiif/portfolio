import React from 'react';
import { Box } from '@mui/material';
import styles from './Contact.module.css';

// import components
import Title from '@/components/common/Title';
import CustomLinkButton from '@/components/common/CustomLinkButton/CustomLinkButton';

// import contact link
import homeConfig from '@/config/home.config';

function Contact() {
  return (
    <Box className={styles.contact}>
      <Title>Let&apos;s talk!</Title>
      <CustomLinkButton
        href={homeConfig.contactLink}
        className={styles.contact__btn}
      >
        CONTACT ME
      </CustomLinkButton>
    </Box>
  );
}

export default Contact;
