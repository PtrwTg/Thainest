import React, { useState, useEffect } from 'react';
import styles from './Slider.module.css';
// นำเข้ารูปภาพทั้งหมดไว้ใน object เพื่อ map ตามชื่อไฟล์
import slide1 from './slide1.svg';
import slide2 from './slide2.svg';
import slide3 from './slide3.svg';

// object สำหรับ map ชื่อไฟล์กับ import จริง
const imageMap = {
  'slide1.svg': slide1,
  'slide2.svg': slide2,
  'slide3.svg': slide3,
  // เพิ่มไฟล์ใหม่ได้ที่นี่
};

// slideTexts: array ของ object (headline + image)
// เพิ่ม/ลบ slide ได้ง่าย แค่เพิ่ม/ลบ object ใน array นี้
const slideTexts = [
  { headline: 'Relax', image: 'slide1.svg' },
  { headline: 'Relieve', image: 'slide2.svg' },
  { headline: 'Return to Nest', image: 'slide3.svg' },
  { headline: 'Test', image: 'slide4.svg' },
];

// config ปุ่ม Buy Voucher (แก้ไขข้อความ/ลิงก์ได้ง่าย)
const buyVoucherButton = {
  text: 'Buy Gift Voucher',
  link: 'https://myappointments.app/portal/public/get-embeded-code?business_id=MjI1OQ=='
};

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slideTexts.length; // ใช้ความยาว slideTexts

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div id="slide" className={styles.sliderContainer}>
      <div className={styles.slides} style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
        {slideTexts.map((slide, index) => (
          <div key={index} className={styles.slide} style={{ opacity: currentSlide === index ? 1 : 0, transition: 'opacity 0.7s' }}>
            {/* แสดงรูปภาพตามชื่อไฟล์ใน slide.image */}
            <img src={imageMap[slide.image]} alt={`Slide ${index + 1}`} className={styles.slideImage} />
            <div className={styles.slideText}>
              <h1>{slide.headline}</h1>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.dotBarNavigation}>
        {slideTexts.map((_, index) => (
          <span
            key={index}
            className={`${styles.dotBar} ${currentSlide === index ? styles.activeDotBar : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>

      {/* ปุ่ม Buy Voucher ใช้ config object */}
      <button
        className={styles.buyVoucherButton}
        onClick={() => window.open(buyVoucherButton.link, '_blank', 'noopener,noreferrer')}
      >
        {buyVoucherButton.text}
      </button>
    </div>
  );
};

export default Slider; 