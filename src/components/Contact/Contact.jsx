import React from 'react';
import styles from './Contact.module.css';
import Logo from '../Navbar/LogoThaiNest.svg';
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebookF } from 'react-icons/fa';
import antaLogo from './Anta.svg';
import hicapsLogo from './Hicap.svg';

const Contact = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.contactContentWrapper}>
        {/* Left Side */}
        <div className={styles.contactLeft}>
          <img src={Logo} alt="ThaiNest Logo" className={styles.logoLarge} />
          <div className={styles.contactTitle}>Contact & Booking</div>
          <div className={styles.contactRow}><span className={styles.iconCircle}><FaPhoneAlt className={styles.icon} /></span> <span>048-3063-980</span></div>
          <div className={styles.contactRow}><span className={styles.iconCircle}><FaMapMarkerAlt className={styles.icon} /></span> <span>Shop 4/74 Bulcock St, Caloundra QLD 4551</span></div>
          <div className={styles.contactRow}><span className={styles.iconCircle}><FaFacebookF className={styles.icon} /></span> <a href="https://www.facebook.com/thainestcaloundra" target="_blank" rel="noopener noreferrer" className={styles.fbLink}>ThaiNest Caloundra</a></div>
        </div>
        {/* Right Side */}
        <div className={styles.contactRight}>
          <div className={styles.operationTitle}>Operation Hours</div>
          <div className={styles.operationRow}><span className={styles.day}>Monday & Tuesday</span><span className={styles.time}>11:00am - 5:00pm</span></div>
          <div className={styles.operationRow}><span className={styles.day}>Wednesday-Saturday</span><span className={styles.time}>9:00am - 5:00pm</span></div>
          <div className={styles.operationRow}><span className={styles.day}>Sunday</span><span className={styles.time}>9:00am - 1:00pm</span></div>
          <div className={styles.operationNote}>Private Health Rebates Available.</div>
          <div className={styles.logoRowLarge}>
            <img src={antaLogo} alt="ANTA Logo" className={styles.partnerLogoLarge} />
            <img src={hicapsLogo} alt="HICAPS Logo" className={styles.partnerLogoLarge} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 