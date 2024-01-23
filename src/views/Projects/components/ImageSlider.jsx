import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LensIcon from '@mui/icons-material/Lens';
import Image from 'next/image';
import styles from '../Projects.module.css';

function ImageSlider({ slides }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setActiveImageIndex(activeImageIndex === length - 1 ? 0 : activeImageIndex + 1);
  };

  const prevSlide = () => {
    setActiveImageIndex(activeImageIndex === 0 ? length - 1 : activeImageIndex - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Box className={styles.project__image__slider__container}>
      <IconButton
        className={`${styles.arrow__btn} ${styles.left__arrow}`}
        onClick={prevSlide}
      >
        <KeyboardArrowLeftIcon className={styles.arrow__icon} />
      </IconButton>
      {slides.map((slide, index) => {
        if (index === activeImageIndex)
          return (
            <Image
              src={slide}
              alt={`image-${index + 1}`}
              className={styles.slide__img}
              key={`${crypto.randomUUID()} - ${index}`}
            />
          );
      })}
      <Box className={styles.circle__selector__container}>
        {slides.map((slide, index) => (
          <IconButton
            key={`${crypto.randomUUID()} - ${index}`}
            onClick={() => setActiveImageIndex(index)}
          >
            <LensIcon
              className={styles.circle__selector}
              sx={{
                fill: index === activeImageIndex && '#810CA8',
              }}
            />
          </IconButton>
        ))}
      </Box>
      <IconButton
        onClick={nextSlide}
        className={`${styles.arrow__btn} ${styles.right__arrow}`}
      >
        <KeyboardArrowRightIcon className={styles.arrow__icon} />
      </IconButton>
    </Box>
  );
}

export default ImageSlider;
