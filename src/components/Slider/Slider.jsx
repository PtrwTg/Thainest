import React, { useState, useEffect } from 'react';
import styles from './Slider.module.css';
import slide1 from './slide1.svg';
import slide2 from './slide2.svg';
import slide3 from './slide3.svg';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; 

  const slides = [
    <img key="s1" src={slide1} alt="Slide 1" className={styles.slideImage} />,
    <img key="s2" src={slide2} alt="Slide 2" className={styles.slideImage} />,
    <img key="s3" src={slide3} alt="Slide 3" className={styles.slideImage} />
  ];

  const slideTexts = [
    { headline: 'Relax' },
    { headline: 'Relieve' },
    { headline: 'Return to Nest' },
  ];

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
          <div key={index} className={styles.slide} style={{ opacity: currentSlide === index ? 1 : 0, transition: 'opacity 0.7s' }}>
            {slide}
            <div className={styles.slideText}>
              <h1>{slideTexts[index].headline}</h1>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.dotBarNavigation}>
        {[...Array(totalSlides)].map((_, index) => (
          <span
            key={index}
            className={`${styles.dotBar} ${currentSlide === index ? styles.activeDotBar : ''}`}
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