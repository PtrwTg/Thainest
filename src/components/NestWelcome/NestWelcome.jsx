import React from 'react';
import styles from './NestWelcome.module.css';
import CombineImg from './combine.svg';
const nestWelcomeContent = {
  "title": "Welcome to ThaiNest",
  "subtitle": "Relax, Relieve, Return to Nest",
  "description": "Nestled in a space where Thai wellness meets tranquil comfort, ThaiNest Massage and Facial is your sanctuary of peace and restoration.\nOur treatments are rooted in ancient Thai healing practices and delivered in a warm, nurturing environment that feels like home. \nWhether you seek deep relaxation or holistic renewal, ThaiNest is where your journey to balance begins.",
  "bookButton": {
    "text": "Book Nesting Experience",
    "link": "https://myappointments.app/portal/public/get-embeded-code?business_id=MjI1OQ=="
  },
  "viewAllButton": {
    "text": "View  all  Services",
    "link": "/services"
  }
};

const NestWelcome = () => {
  return (
    <>
      <div id="home" className={styles.homeContainer}>
        <h1 className={styles.welcomeTitle}>
          {nestWelcomeContent.title}
        </h1>
        <div className={styles.welcomeSubtitle}>
          {nestWelcomeContent.subtitle}
        </div>
        <div className={styles.welcomeDescription}>
          {/* รองรับ \n เป็นขึ้นบรรทัดใหม่ */}
          {nestWelcomeContent.description.split('\n').map((line, idx) => (
            <React.Fragment key={idx}>
              {line}<br/>
            </React.Fragment>
          ))}
        </div>
        <button className={styles.bookButton} onClick={() => window.open(nestWelcomeContent.bookButton.link, '_blank', 'noopener,noreferrer')}>
          {nestWelcomeContent.bookButton.text}
        </button>

        <div className={styles.combinedImgContainer}>
          <img src={CombineImg} alt="ThaiNest Massage and Flower" className={styles.combinedImg} />
        </div>

        {/* ปุ่ม View all Services */}
        <button className={styles.viewAllButton} onClick={() => window.location.href=nestWelcomeContent.viewAllButton.link}>
          {nestWelcomeContent.viewAllButton.text}
        </button>
      </div>
      <div className={styles.homeContainerSpacer}></div>
    </>
  );
};

export default NestWelcome; 