import React, { useRef, useState } from 'react';
import styles from './BlogSection.module.css';
import blogcombine from './blogcombine.svg';
import blogicon from './blogicon.svg';
import blog1 from './blog1.svg';
import blog2 from './blog2.svg';

import flower from './flower.svg';

// Map string -> import จริง
import blog3 from './blog3.svg';
import blog3 from './blog3.svg';
const imageMap = {
  'blog1.svg': blog1,
  'blog2.svg': blog2,
  'blog3.svg': blog3,
};

// CONFIG ทั้งหมดสำหรับ BlogSection (image เป็น string)
const blogSectionConfig = {
  "envText": {
    "left": "Environment Your ",
    "right": "Nest of Calm"
  },
  "interiorText": [
    "Our interior is inspired by nature's soft embrace: earthy woods, cozy textures, warm lighting, and calming hues. We've carefully designed every corner to evoke the comfort of home and the serenity of a sacred retreat.",
    "Settle in, sink deep, and let your body remember what peace feels like."
  ],
  "wellnessJournalTitle": "Wellness Journal",
  "blogPosts": [
    {
      "image": "blog1.svg",
      "alt": "Benefits of Thai Massage",
      "title": "Benefits of Thai Massage",
      "link": "https://www.health.com/thai-massage-7814435"
    },
    {
      "image": "blog2.svg",
      "alt": "History of Thai Massage",
      "title": "History of Thai Massage",
      "link": "https://www.nuadthaischool.com/the-history-and-origins-of-thai-massage/"
    },
    {
      "image": "blog3.svg",
      "alt": "How to Prepare for Thai Massage",
      "title": "How to Prepare for Thai Massage",
      "link": "https://www.makkhahealthandspa.com/how-to-prepare-for-a-massage/"
    }
  ],
  "reconnectSection": {
    "title1": "Ready to Reconnect with ",
    "title2": "Yourself?",
    "desc": "Book Your Nesting Experience today and step into a space of peace and healing.",
    "button": {
      "text": "Book Nesting Experience",
      "url": "https://myappointments.app/portal/public/get-embeded-code?business_id=MjI1OQ=="
    }
  }
};

// Component ย่อย BlogCard
function BlogCard({ image, alt, title, link, onMouseEnter, onMouseMove, onMouseLeave }) {
  return (
    <div className={styles.blogCard}
      onMouseEnter={e => onMouseEnter && onMouseEnter(e, title)}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <img src={image} alt={alt} className={styles.blogImg} />
      <div className={styles.blogCardTitle}>{title}</div>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.blogReadMore}>Read More</a>
    </div>
  );
}

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
      {/* Flower background decoration */}
      <img src={flower} alt="Flower Decoration" className={styles.blogFlowerBg} aria-hidden="true" />
      {/* 10% Top: Environment Text */}
      <div className={styles.envRow}>
        <div className={styles.envText}>
          <span>{blogSectionConfig.envText.left}</span>
          <span className={styles.envMango}>{blogSectionConfig.envText.right}</span>
        </div>
      </div>
      {/* 40%: Interior Text + Image */}
      <div className={styles.interiorRow}>
        <div className={styles.interiorText}>
          {blogSectionConfig.interiorText.map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </div>
        <img src={blogcombine} alt="Blog Interior" className={styles.blogImage} />
      </div>
      {/* 50% หลัง: Wellness Journal & Blog Slider */}
      <div className={styles.blogBottomSection}>
        <img src={blogicon} alt="Blog Icon" className={styles.blogIcon} />
        <div className={styles.blogTitle}>{blogSectionConfig.wellnessJournalTitle}</div>
        <div className={styles.blogSliderWrapper}>
          <div className={styles.blogGrid}>
            {blogSectionConfig.blogPosts.map((post, idx) => (
              <BlogCard
                key={idx}
                {...post}
                image={imageMap[post.image]}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              />
            ))}
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
            <span className={styles.reconnectQuicksand}>{blogSectionConfig.reconnectSection.title1}</span>
            <span className={styles.reconnectMango}>{blogSectionConfig.reconnectSection.title2}</span>
          </h2>
          <div className={styles.reconnectDesc}>
            {blogSectionConfig.reconnectSection.desc}
          </div>
          <button
            className={styles.bookButton}
            onClick={() => window.open(blogSectionConfig.reconnectSection.button.url, '_blank', 'noopener,noreferrer')}
          >
            {blogSectionConfig.reconnectSection.button.text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection; 