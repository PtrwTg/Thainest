import React from 'react';
import styles from './Contact.module.css';
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebookF } from 'react-icons/fa';
import antaLogo from './Anta.svg';
import hicapsLogo from './Hicap.svg';

// CONFIG ข้อมูลติดต่อ (ไม่มี icon/โลโก้)
const contactConfig = {
  "title": "Contact & Booking",
  "phone": "048-3063-980",
  "address": "Shop 4/74 Bulcock St, Caloundra QLD 4551",
  "facebook": {
    "name": "ThaiNest Caloundra",
    "url": "https://www.facebook.com/thainest"
  },
  "operationTitle": "Operation Hours",
  "operationHours": [
    {
      "day": "Monday & Tuesday",
      "time": "11:00am - 5:00pm"
    },
    {
      "day": "Wednesday-Saturday",
      "time": "9:00am - 5:00pm"
    },
    {
      "day": "Sunday",
      "time": "9:00am - 1:00pm"
    }
  ],
  "operationNote": "Private Health Rebates Available."
};

const partnerLogos = [
  { src: antaLogo, alt: 'ANTA Logo' },
  { src: hicapsLogo, alt: 'HICAPS Logo' },
];

const Contact = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.contactContentWrapper}>
        {/* Left Side */}
        <div className={styles.contactLeft}>
          <div className={styles.contactTitle}>{contactConfig.title}</div>
          <div className={styles.contactRow}>
            <span className={styles.iconCircle}><FaPhoneAlt className={styles.icon} /></span>{' '}
            <span>{contactConfig.phone}</span>
          </div>
          <div className={styles.contactRow}>
            <span className={styles.iconCircle}><FaMapMarkerAlt className={styles.icon} /></span>{' '}
            <span>{contactConfig.address}</span>
          </div>
          <div className={styles.contactRow}>
            <span className={styles.iconCircle}><FaFacebookF className={styles.icon} /></span>{' '}
            <a href={contactConfig.facebook.url} target="_blank" rel="noopener noreferrer" className={styles.fbLink}>{contactConfig.facebook.name}</a>
          </div>
        </div>
        {/* Right Side */}
        <div className={styles.contactRight}>
          <div className={styles.operationTitle}>{contactConfig.operationTitle}</div>
          {contactConfig.operationHours.map((row, idx) => (
            <div className={styles.operationRow} key={idx}>
              <span className={styles.day}>{row.day}</span><span className={styles.time}>{row.time}</span>
            </div>
          ))}
          <div className={styles.operationNote}>{contactConfig.operationNote}</div>
          <div className={styles.logoRowLarge}>
            {partnerLogos.map((logo, idx) => (
              <img src={logo.src} alt={logo.alt} className={styles.partnerLogoLarge} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 