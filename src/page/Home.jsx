import React from 'react';
import styles from './Home.module.css';
import CombineImg from './combine.svg';

const Home = () => {
  return (
    <div id="home" className={styles.homeContainer}>
      <h1 className={styles.welcomeTitle}>
        Welcome to <span className={styles.welcomeTitleMango}>ThaiNest</span>
      </h1>
      <div className={styles.welcomeSubtitle}>
        Relax, Relieve, Return to Nest
      </div>
      <div className={styles.welcomeDescription}>
        Nestled in a space where Thai wellness meets tranquil comfort, ThaiNest Massage and Facial is your sanctuary of peace and restoration.<br/>
        Our treatments are rooted in ancient Thai healing practices and delivered in a warm, nurturing environment that feels like home. Whether you seek deep relaxation or holistic renewal, ThaiNest is where your journey to balance begins.
      </div>
      <button className={styles.bookButton} onClick={() => window.open('https://myappointments.app/portal/public/get-embeded-code?business_id=MjI1OQ==', '_blank', 'noopener,noreferrer')}>
        Book Your Nesting Experience
      </button>

      {/* รูป combine.svg ตรงกลาง */}
      <div className={styles.combinedImgContainer}>
        <img src={CombineImg} alt="ThaiNest Massage and Flower" className={styles.combinedImg} />
      </div>

      {/* ปุ่ม View all Services */}
      <button className={styles.viewAllButton} onClick={() => window.location.href='/services'}>
        View  all  Services
      </button>
    </div>
  );
};

export default Home; 