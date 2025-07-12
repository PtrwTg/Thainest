import React from 'react';
import styles from './Services.module.css';
import Contact from '../components/Contact/Contact';
import { useCallback } from 'react';
import SEO from '../components/SEO/SEO';

// CONFIG ทั้งหมดสำหรับ Services
const servicesConfig = {
  "hero": {
    "centerImages": [
      {
        "src": "/assets/images/4img.svg",
        "alt": "Massage Therapy",
        "title": "Massage Therapy",
        "scrollTo": "therapy-section"
      },
      {
        "src": "/assets/images/4img2.svg",
        "alt": "Treatments",
        "title": "Treatments",
        "scrollTo": "treatments-section"
      }
    ],
    "experienceText": "Book Your Nesting Experience today and step into a space of peace and healing."
  },
  "massageServices": [
    {
      "img": "/assets/images/1.svg",
      "title": "Thai Therapeutic Massage",
      "desc": "A dynamic blend of acupressure, assisted with stretching, and energy line work to restore balance, flexibility and deep relaxation."
    },
    {
      "img": "/assets/images/2.svg",
      "title": "Remedial Massage",
      "desc": "Targeted therapeutic massage designed to relieve pain, improve movement, and support muscular healing."
    },
    {
      "img": "/assets/images/3.svg",
      "title": "Aromatherapy Massage",
      "desc": "Relax with essential oils designed to soothe the senses and calm the mind."
    },
    {
      "img": "/assets/images/4.svg",
      "title": "Hot Stone Massage",
      "desc": "Melt away tension with warm basalt stones placed along the body to deeply relax muscles and restore balance."
    },
    {
      "img": "/assets/images/5.svg",
      "title": "TMJ (Temporomandibular Joint - Neck, Jaw and Scalp Area)",
      "desc": "Specialised jaw release to reduce tension, ease headaches, and improve jaw alignment and comfort."
    },
    {
      "img": "/assets/images/6.svg",
      "title": "Indian Head Massage",
      "desc": "A calming upper-body massage with warm oil focusing on the scalp, neck, and shoulders to ease stress and enhance mental clarity."
    },
    {
      "img": "/assets/images/7.svg",
      "title": "Abdominal Massage",
      "desc": "Gentle, focused touch to support digestion, release abdominal tension, and restore energetic flow."
    },
    {
      "img": "/assets/images/8.svg",
      "title": "Foot Reflexology",
      "desc": "Grounding therapy that promotes balance through pressure points in the feet."
    }
  ],
  "facialServices": [
    {
      "img": "/assets/images/9.svg",
      "title": "Deep Cleansing Facial",
      "desc": "Detoxify and hydrate for a clearer, healthier complexion."
    },
    {
      "img": "/assets/images/10.svg",
      "title": "Soothing Sensitive Skin Treatment",
      "desc": "Calming care for delicate skin types."
    },
    {
      "img": "/assets/images/11.svg",
      "title": "Test",
      "desc": "A rejuvenating facial massage using lifting techniques and Gua Sha to tone, sculpt, and refresh tired, stressed skin."
    }
  ],
  "bookBtn": {
    "text": "Book Nesting Experience",
    "url": "https://myappointments.app/portal/public/get-embeded-code?business_id=MjI1OQ=="
  }
};

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
      <SEO 
        title="Our Services - ThaiNest Massage & Facial"
        description="Discover our range of professional massage therapy and facial treatments. From Thai therapeutic massage to deep cleansing facials, book your nesting experience today."
      />
      <div className={styles.bgWrapper}>
        <img src={servicesConfig.hero.bgImg} alt="background" className={styles.bgImage} />
      </div>
      <div className={styles.servicesHeroSection} id="services-hero-section">
        <div className={styles.servicesHeroContainer + ' ' + styles.fadeSlideIn}>
          <img
            src={servicesConfig.hero.heroImg}
            alt="Our Services"
            className={styles.servicesHeroImg + ' ' + styles.fadeSlideIn}
          />
          <div className={styles.servicesHeroTextWrapper + ' ' + styles.fadeSlideIn}>
            <span className={styles.servicesHeroText + ' ' + styles.fadeSlideIn}>
              {servicesConfig.hero.heroText}
            </span>
          </div>
        </div>
        <div className={styles.nestingExperienceBox + ' ' + styles.fadeSlideIn}>
          <span className={styles.nestingExperienceText + ' ' + styles.fadeSlideIn}>
            {servicesConfig.hero.experienceText}
          </span>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2vw', width: '100%' }}>
            {servicesConfig.hero.centerImages.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={img.alt}
                className={styles.centeredImage + ' ' + styles.fadeSlideIn}
                title={img.title}
                onClick={() => {
                  const el = document.getElementById(img.scrollTo);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Section Massage Therapy */}
      <section className={styles.therapySection} id="therapy-section">
        <h2 className={styles.therapyTitle}>Massage Therapy</h2>
        <div className={styles.cardList}>
          {servicesConfig.massageServices.map((card, idx) => (
            <div className={styles.therapyCard} key={idx}>
              <img src={card.img} alt={card.title} className={styles.cardImg} />
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>{card.title}</div>
                <div className={styles.cardDesc}>{card.desc}</div>
                <a
                  href={servicesConfig.bookBtn.url}
                  className={styles.cardBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {servicesConfig.bookBtn.text}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section Facial Treatments */}
      <section className={styles.facialSection} id="treatments-section">
        <h2 className={styles.facialTitle}>Treatments</h2>
        <div className={styles.cardList}>
          {servicesConfig.facialServices.map((card, idx) => (
            <div className={styles.therapyCard} key={idx}>
              <img src={card.img} alt={card.title} className={styles.cardImg} />
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>{card.title}</div>
                <div className={styles.cardDesc}>{card.desc}</div>
                <a
                  href={servicesConfig.bookBtn.url}
                  className={styles.cardBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {servicesConfig.bookBtn.text}
                </a>
              </div>
            </div>
          ))}
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
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          cursor: 'pointer',
        }}
        onClick={handleScrollTop}
      >
        <svg width="24" height="24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 15l-6-6-6 6"/></svg>
      </div>
    </>
  );
};

export default Services; 