import React from 'react';
import styles from './Contact.module.css';
import fbicon from './fbicon.svg';

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      {/* เพิ่มฟอร์มหรือข้อมูลติดต่อที่นี่ */}
      <a
        href="https://www.facebook.com/pattarawit.duangmak"
        className={styles.fbIconLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <img src={fbicon} alt="Facebook" className={styles.fbIcon} />
      </a>
      <div className={styles.contactFooterSpace}></div>
    </section>
  );
};

export default Contact; 