import React, { useRef, useState } from 'react';
import styles from './BlogSection.module.css';
import blogcombine from './blogcombine.svg';
import blogicon from './blogicon.svg';
import blog1 from './blog1.svg';
import blog2 from './blog2.svg';
import blog3 from './blog3.svg';

const BlogSection = () => {
  const sliderRef = useRef(null);
  // Tooltip state
  const [tooltip, setTooltip] = useState({ show: false, text: '', x: 0, y: 0 });

  // หยุด/เล่น animation เมื่อ hover
  const handleSliderHover = (isHover) => {
    if (sliderRef.current) {
      sliderRef.current.style.animationPlayState = isHover ? 'paused' : 'running';
    }
  };

  // Tooltip handlers
  const handleMouseEnter = (e, text) => {
    setTooltip({ show: true, text, x: e.clientX, y: e.clientY });
  };
  const handleMouseMove = (e) => {
    setTooltip((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
  };
  const handleMouseLeave = () => {
    setTooltip({ show: false, text: '', x: 0, y: 0 });
  };

  return (
    <div className={styles.blogSectionContainer} id="blog">
      {/* 10% Top: Environment Text */}
      <div className={styles.envRow}>
        <div className={styles.envText}>
          <span>Environment Your </span>
          <span className={styles.envMango}>Nest of Calm</span>
        </div>
      </div>
      {/* 40%: Interior Text + Image */}
      <div className={styles.interiorRow}>
        <div className={styles.interiorText}>
          <div>Our interior is inspired by nature's soft embrace: earthy woods, cozy textures, warm lighting, and calming hues. <br /> 
           We've carefully designed every corner to evoke the comfort of home and the serenity of a sacred retreat.</div>
          <div>Settle in, sink deep, and let your body remember what peace feels like.</div>
        </div>
        <img src={blogcombine} alt="Blog Interior" className={styles.blogImage} />
      </div>
      {/* 50% หลัง: Wellness Journal & Blog Slider */}
      <div className={styles.blogBottomSection}>
        <img src={blogicon} alt="Blog Icon" className={styles.blogIcon} />
        <div className={styles.blogTitle}>Wellness Journal</div>
        <div className={styles.blogSliderWrapper}>
          <div
            className={styles.blogSlider}
            ref={sliderRef}
            onMouseEnter={() => handleSliderHover(true)}
            onMouseLeave={() => handleSliderHover(false)}
          >
            <a
              href="https://www.health.com/thai-massage-7814435"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.blogSliderItem}
              onMouseEnter={(e) => handleMouseEnter(e, "Benefits of Thai Massage")}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img src={blog1} alt="Benefits of Thai Massage" className={styles.blogImg} />
            </a>
            <a
              href="https://www.nuadthaischool.com/the-history-and-origins-of-thai-massage/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.blogSliderItem}
              onMouseEnter={(e) => handleMouseEnter(e, "History of Thai Massage")}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img src={blog2} alt="History of Thai Massage" className={styles.blogImg} />
            </a>
            <a
              href="https://www.makkhahealthandspa.com/how-to-prepare-for-a-massage/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.blogSliderItem}
              onMouseEnter={(e) => handleMouseEnter(e, "How to Prepare for Thai Massage")}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img src={blog3} alt="How to Prepare for Thai Massage" className={styles.blogImg} />
            </a>
          </div>
        </div>
        {/* Tooltip แสดงหัวข้อ blog ที่ตำแหน่งเมาส์ */}
        {tooltip.show && (
          <div
            style={{
              position: 'fixed',
              top: tooltip.y + 10,
              left: tooltip.x + 10,
              background: 'rgba(0,0,0,0.8)',
              color: '#fff',
              padding: '6px 16px',
              borderRadius: '8px',
              pointerEvents: 'none',
              zIndex: 9999,
              fontFamily: 'Quicksand, sans-serif',
              fontSize: '1rem',
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 8px rgba(0,0,0,0.18)'
            }}
          >
            {tooltip.text}
          </div>
        )}
        <div className={styles.reconnectSection}>
          <h2 className={styles.reconnectTitle}>
            <span className={styles.reconnectQuicksand}>Ready to Reconnect with </span>
            <span className={styles.reconnectMango}>Yourself?</span>
          </h2>
          <div className={styles.reconnectDesc}>
            Book Your Nesting Experience today and step into a space of peace and healing.
          </div>
          <button className={styles.bookButton} onClick={() => window.open('https://myappointments.app/portal/public/get-embeded-code?business_id=MjI1OQ==', '_blank', 'noopener,noreferrer')}>Book Your Nesting Experience</button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection; 