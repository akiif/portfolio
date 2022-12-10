import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className='slider'>
      <button className="carousel-button left-arrow" onClick={prevSlide}><FaAngleLeft className='arrow-button' /></button>
      <button className="carousel-button right-arrow" onClick={nextSlide}><FaAngleRight className='arrow-button' /></button>
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide slide-active' : 'slide'}
            key={index}
          >
            {current === index && <img className='slides-image' src={slide} />}
          </div>
        );
      })}
    </div>
  );
}

export default ImageSlider;