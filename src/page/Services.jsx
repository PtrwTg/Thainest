import React from 'react';
import servicesImg from './servicesimg.svg';
import img4 from './4img.svg';
import styles from './Services.module.css';
import img1 from './1.svg';
import img2 from './2.svg';
import img3 from './3.svg';
import img4svg from './4.svg';
import img5 from './5.svg';
import img6 from './6.svg';
import img7 from './7.svg';
import img8 from './8.svg';
import img9 from './9.svg';
import img10 from './10.svg';
import img11 from './11.svg';
import img4img2 from './4img2.svg';
import Contact from '../components/Contact/Contact';
import { useCallback } from 'react';
import bg2 from './BG2.svg';

const cardData = [
  {
    img: img1,
    title: 'Thai Therapeutic Massage',
    desc: 'A dynamic blend of acupressure, assisted with stretching, and energy line work to restore balance, flexibility and deep relaxation.'
  },
  {
    img: img2,
    title: 'Remedial Massage',
    desc: 'Targeted therapeutic massage designed to relieve pain, improve movement, and support muscular healing.'
  },
  {
    img: img3,
    title: 'Aromatherapy Massage',
    desc: 'Relax with essential oils designed to soothe the senses and calm the mind.'
  },
  {
    img: img4svg,
    title: 'Hot Stone Massage',
    desc: 'Melt away tension with warm basalt stones placed along the body to deeply relax muscles and restore balance.'
  },
  {
    img: img5,
    title: 'TMJ (Temporomandibular Joint - Neck, Jaw and Scalp Area)',
    desc: 'Specialised jaw release to reduce tension, ease headaches, and improve jaw alignment and comfort.'
  },
  {
    img: img6,
    title: 'Indian Head Massage',
    desc: 'A calming upper-body massage with warm oil focusing on the scalp, neck, and shoulders to ease stress and enhance mental clarity.'
  },
  {
    img: img7,
    title: 'Abdominal Massage',
    desc: 'Gentle, focused touch to support digestion, release abdominal tension, and restore energetic flow.'
  },
  {
    img: img8,
    title: 'Foot Reflexology',
    desc: 'Grounding therapy that promotes balance through pressure points in the feet.'
  },
];

const Services = () => {
  const handleScrollTop = useCallback(() => {
    const hero = document.querySelector(`.${styles.servicesHeroContainer}`);
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [styles.servicesHeroContainer]);

  return (
    <>
      <div className={styles.bgWrapper}>
        <img src={bg2} alt="background" className={styles.bgImage} />
      </div>
      <div className={styles.servicesHeroSection} id="services-hero-section">
        <div className={styles.servicesHeroContainer}>
          <img
            src={servicesImg}
            alt="Our Services"
            className={styles.servicesHeroImg}
          />
          <div className={styles.servicesHeroTextWrapper}>
            <span className={styles.servicesHeroText}>
              Our Services
            </span>
          </div>
        </div>
        <div className={styles.nestingExperienceBox}>
          <span className={styles.nestingExperienceText}>
            Book Your Nesting Experience today and step
            into a space of peace and healing.
          </span>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2vw', width: '100%' }}>
            <img
              src={img4}
              alt="Massage Therapy"
              className={styles.centeredImage}
              title="Massage Therapy"
            />
            <img
              src={img4img2}
              alt="Treatments"
              className={styles.centeredImage}
              title="Treatments"
            />
          </div>
        </div>
      </div>

      {/* Section Massage Therapy */}
      <section className={styles.therapySection} id="therapy-section">
        <h2 className={styles.therapyTitle}>Massage Therapy</h2>
        <div className={styles.cardList}>
          {cardData.map((card, idx) => (
            <div className={styles.therapyCard} key={idx}>
              <img src={card.img} alt={card.title} className={styles.cardImg} />
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>{card.title}</div>
                <div className={styles.cardDesc}>{card.desc}</div>
                <a
                  href="https://myappointments.app/portal/public/get-embeded-code?business_id=MjI1OQ=="
                  className={styles.cardBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Nesting Experience
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section Facial Treatments */}
      <section className={styles.facialSection} id="treatments-section">
        <h2 className={styles.facialTitle}>Treatments</h2>
        {/* <img src={img4img2} alt="Treatments" className={styles.centeredImage} /> */}
        <div className={styles.cardList}>
          <div className={styles.therapyCard}>
            <img src={img9} alt="Deep Cleansing Facial" className={styles.cardImg} />
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>Deep Cleansing Facial</div>
              <div className={styles.cardDesc}>Detoxify and hydrate for a clearer, healthier complexion.</div>
              <a
                href="https://myappointments.app/portal/public/get-embeded-code?business_id=MjI1OQ=="
                className={styles.cardBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Your Nesting Experience
              </a>
            </div>
          </div>
          <div className={styles.therapyCard}>
            <img src={img10} alt="Soothing Sensitive Skin Treatment" className={styles.cardImg} />
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>Soothing Sensitive Skin Treatment</div>
              <div className={styles.cardDesc}>Calming care for delicate skin types.</div>
              <a
                href="https://myappointments.app/portal/public/get-embeded-code?business_id=MjI1OQ=="
                className={styles.cardBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Your Nesting Experience
              </a>
            </div>
          </div>
          <div className={styles.therapyCard}>
            <img src={img11} alt="Manual Facial Uplifting Massage" className={styles.cardImg} />
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>Manual Facial Uplifting Massage</div>
              <div className={styles.cardDesc}>A rejuvenating facial massage using lifting techniques and Gua Sha to tone, sculpt, and refresh tired, stressed skin.</div>
              <a
                href="https://myappointments.app/portal/public/get-embeded-code?business_id=MjI1OQ=="
                className={styles.cardBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Your Nesting Experience
              </a>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <div
        style={{
          position: 'fixed',
          right: 16,
          bottom: 16,
          width: 48,
          height: 48,
          background: '#E5C177',
          borderRadius: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
          cursor: 'pointer',
          zIndex: 9999,
        }}
        onClick={handleScrollTop}
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="28" height="28"><path fill="#000000" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
      </div>
    </>
  );
};

export default Services; 