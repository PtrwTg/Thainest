import React, { useEffect, useRef } from 'react';
import styles from './Aboutus.module.css';
import Oppa1 from './Oppa1.svg';
import CandleImg from './candle.svg';
import FacialMas1 from './facialmas1.svg';
import FacialMas2 from './facialmas2.svg';
import fitty from 'fitty';

const Aboutus = () => {
  const titleRef = useRef(null);
  const servicesTitleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      fitty(titleRef.current, { minSize: 8, maxSize: 48 });
    }
    if (servicesTitleRef.current) {
      fitty(servicesTitleRef.current, { minSize: 12, maxSize: 36 });
    }
  }, []);

  return (
    <div id="services">
      <div id="about" className={styles.nurturingSection}>
        <h2 className={styles.nurturingTitle} ref={titleRef}>Nurturing Body & Soul</h2>
        <div className={styles.nurturingDesc}>
          At ThaiNest, we believe true healing happens when the body and soul are cared for as one. Inspired by the wisdom of Thai traditions, our mission is to provide a peaceful retreat where you can unplug, unwind, and return to yourself. Our therapists bring not only professional expertise but a deep commitment to comfort, care, and connection.
        </div>
      </div>

      {/* รูป candle.svg เต็มจอคอม */}
      <div className={styles.candleImgContainer}>
        <img src={CandleImg} alt="Candle" className={styles.candleImg} />
      </div>

      {/* กล่องโค้งพร้อมข้อความ Our Services */}
      <div className={styles.servicesCurvedBox}>
        <div className={styles.servicesTitle} ref={servicesTitleRef}>Our Services</div>
        <div className={styles.servicesDesc}>
          At ThaiNest, we believe that true wellness begins with balance – of body, mind, and spirit. Rooted in the healing traditions of Thai therapy and enhanced by modern facial techniques, our services are thoughtfully designed to restore your natural vitality and inner calm.
          Whether you seek relief from tension, a radiant complexion, or simply a moment of peace, our expert therapists and estheticians are here to tailor each experience to your unique needs. From deeply therapeutic Thai massages to rejuvenating skin treatments, every visit is a step toward your most relaxed and revitalised self.
        </div>
      </div>

        <div className={styles.servicesImagesRow}>
          <div className={styles.serviceCard}>
            <img src={FacialMas1} alt="Facial Massage" className={styles.serviceImg} />
            <button className={styles.serviceBtn} onClick={() => window.location.href='/services'}>Facial Massage</button>
          </div>
          <div className={styles.serviceCard}>
            <img src={FacialMas2} alt="Facial Treatments" className={styles.serviceImg} />
            <button className={styles.serviceBtn} onClick={() => window.location.href='/services'}>Treatments</button>
          </div>
        </div>
        <div className={styles.aboutusFreeSpace}></div>
      </div>
  );
};

export default Aboutus; 