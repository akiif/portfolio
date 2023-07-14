import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './About.module.css';

// import home page config
import homeConfig from '@/config/home.config';

// import components
import Title from '@/components/common/Title';
import CustomLinkButton from '@/components/common/CustomLinkButton/CustomLinkButton';

function About() {
  const calculate_age = (dateString) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const myAge = calculate_age('2000/01/26');

  return (
    <Box className={`${styles.about} colored__section`} id="about">
      <Title>About</Title>
      <Box className={styles.about__article__container}>
        <Typography className={styles.about__article}>
          I am <span className="bold">Akif Mohammed</span>; A Software Engineer who
          loves all things tech. I love to explore new technologies.
          <br />
          <br />I have completed my bachelor&apos;s degree in &quot;Information
          Science and Engineering&quot; from Mangalore, India. I am {myAge} years
          old. My hobbies include watching movies, anime and reviews of new tech
          products, gaming and reading novels.
        </Typography>
        <CustomLinkButton
          className={styles.about__resume__btn}
          buttonText={'Download Resume'}
          download={true}
          ariaLabel="Download Resume"
          href={homeConfig.resumeLink}
        />
      </Box>
    </Box>
  );
}

export default About;
