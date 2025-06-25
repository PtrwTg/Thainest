import React from 'react';
import styles from './AboutBlog.module.css';
import blog1 from './blog1.svg';
import blog2 from './blog2.svg';
import blog3 from './blog3.svg';

const AboutBlog = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="blog" className={styles.aboutBlogSection}>
      <h2 className={styles.blogTitle}>Wellness Journal</h2>
      <div className={styles.blogSliderWrapper}>
        <div className={styles.blogSlider}>
          <img src={blog1} alt="blog1-1" className={styles.blogImg} />
          <img src={blog2} alt="blog2-1" className={styles.blogImg} />
          <img src={blog3} alt="blog3-1" className={styles.blogImg} />
          <img src={blog1} alt="blog1-2" className={styles.blogImg} />
          <img src={blog2} alt="blog2-2" className={styles.blogImg} />
          <img src={blog3} alt="blog3-2" className={styles.blogImg} />
          <img src={blog1} alt="blog1-3" className={styles.blogImg} />
          <img src={blog2} alt="blog2-3" className={styles.blogImg} />
          <img src={blog3} alt="blog3-3" className={styles.blogImg} />
          <img src={blog1} alt="blog1-4" className={styles.blogImg} />
          <img src={blog2} alt="blog2-4" className={styles.blogImg} />
          <img src={blog3} alt="blog3-4" className={styles.blogImg} />
        </div>
      </div>

      <div className={styles.reconnectSection}>
        <h2 className={styles.reconnectTitle}>
          <span className={styles.reconnectQuicksand}>Ready to Reconnect with </span>
          <span className={styles.reconnectMango}>Yourself?</span>
        </h2>
        <div className={styles.reconnectDesc}>
          Book Your Nesting Experience today and step into a space of peace and healing.
        </div>
        <button className={styles.bookButton} onClick={() => window.open('https://myappointments.app/portal/public/get-embeded-code?business_id=MjI1OQ==', '_blank', 'noopener,noreferrer')}>Book Your Nesting Experience</button>
        <div className={styles.aboutBlogFooterSpace}></div>
      </div>

      <div className={styles.scrollTopBtn} onClick={handleScrollTop}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="48" height="48"><path fill="#000000" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
      </div>
    </section>
  );
};

export default AboutBlog; 