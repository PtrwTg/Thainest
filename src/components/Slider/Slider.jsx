import React, { useState, useEffect } from 'react';
import styles from './Slider.module.css';
import Slide1 from './slide1.svg?react';
import Slide2 from './slide2.svg?react';
import Slide3 from './slide3.svg?react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; 

  const slides = [<Slide1 key="s1" className={styles.slideImage} />, <Slide2 key="s2" className={styles.slideImage} />, <Slide3 key="s3" className={styles.slideImage} />];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000); // เปลี่ยนภาพทุก 3 วินาที
    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slides} style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            {slide}
          </div>
        ))}
      </div>

      <div className={styles.dotNavigation}>
        {[...Array(totalSlides)].map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>

      <button className={styles.buyVoucherButton} onClick={() => window.open('https://myappointments.app/portal/public/get-embeded-code?business_id=MjI1OQ==', '_blank', 'noopener,noreferrer')}>
        Buy Gift Voucher
      </button>
    </div>
  );
};

export default Slider; 