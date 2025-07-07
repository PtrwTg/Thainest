import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import Logo from './LogoThaiNest.svg'; // import SVG เป็นไฟล์รูป
import { useLocation, Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isServicesPage = location.pathname === '/services';
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  // เพิ่ม state สำหรับควบคุมการแสดง/ซ่อน Navbar
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  // ref สำหรับ timer
  const hideTimer = React.useRef();
  // state สำหรับตรวจสอบ mouse อยู่บน navbar
  const [isHoveringNavbar, setIsHoveringNavbar] = useState(false);

  // ฟังก์ชันกำหนด delay ตามอุปกรณ์
  const getHideDelay = () => {
    if ('ontouchstart' in window || window.matchMedia('(pointer: coarse)').matches) {
      return 3000; // 2 วินาที สำหรับ touch device
    }
    return 1500; // 0.5 วินาที สำหรับ desktop
  };

  // ฟังก์ชันแสดง Navbar และรีเซ็ต timer
  const showNavbar = React.useCallback(() => {
    setIsNavbarVisible(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    // ถ้า mouse อยู่บน navbar ไม่ต้องเริ่ม timer ซ่อน
    if (!isHoveringNavbar) {
      hideTimer.current = setTimeout(() => {
        setIsNavbarVisible(false);
      }, getHideDelay());
    }
  }, [isHoveringNavbar]);

  useEffect(() => {
    // แสดง Navbar เมื่อ scroll, mousemove, touchstart
    const handleUserActive = () => {
      showNavbar();
    };
    window.addEventListener('scroll', handleUserActive);
    window.addEventListener('mousemove', handleUserActive);
    window.addEventListener('touchstart', handleUserActive);
    // เริ่ม timer ซ่อน Navbar ครั้งแรก
    showNavbar();
    return () => {
      window.removeEventListener('scroll', handleUserActive);
      window.removeEventListener('mousemove', handleUserActive);
      window.removeEventListener('touchstart', handleUserActive);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [showNavbar]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ฟังก์ชัน scroll ไปยัง section ที่ต้องการ
  const handleScrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      // รอให้เปลี่ยนหน้าเสร็จแล้วค่อย scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // เมื่อ mouse ออกจาก navbar ให้เริ่ม timer ซ่อนใหม่
  const handleMouseEnter = () => {
    setIsHoveringNavbar(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setIsNavbarVisible(true);
  };
  const handleMouseLeave = () => {
    setIsHoveringNavbar(false);
    hideTimer.current = setTimeout(() => {
      setIsNavbarVisible(false);
    }, getHideDelay());
  };

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.navbarBlur : styles.navbarTransparent} ${isNavbarVisible ? styles.navbarShow : styles.navbarHide}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
    >
      <div className={styles.logo} onClick={() => navigate('/')}>
        <img src={Logo} alt="ThaiNest Logo" className={styles.logo} />
      </div>
      <div className={styles.menu}>
        <div className={styles.navbarRight}>
          <ul className={styles.navbarNav}>
            {isServicesPage ? (
              <>
                <li className={styles.navItem}>
                  <Link to="/" className={styles.navLink}>Home</Link>
                </li>
                <li className={styles.navItem}>
                  <button className={styles.navLink} style={{background:'none',border:'none',padding:0,cursor:'pointer'}} onClick={() => {
                    const el = document.getElementById('services-hero-section');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}>Our Services</button>
                </li>
                <li className={styles.navItem}>
                  <button className={styles.navLink} style={{background:'none',border:'none',padding:0,cursor:'pointer'}} onClick={() => {
                    if (location.pathname !== '/services') {
                      navigate('/services');
                      setTimeout(() => {
                        const el = document.getElementById('therapy-section');
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }, 200);
                    } else {
                      const el = document.getElementById('therapy-section');
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}>Massage Therapy</button>
                </li>
                <li className={styles.navItem}>
                  <button className={styles.navLink} style={{background:'none',border:'none',padding:0,cursor:'pointer'}} onClick={() => {
                    const el = document.getElementById('treatments-section');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}>Treatments</button>
                </li>
                <li className={styles.navItem}>
                  <a href="#contact" className={styles.navLink}>Contact</a>
                </li>
              </>
            ) : (
              <>
                <li className={styles.navItem}>
                  <button className={styles.navLink} style={{background:'none',border:'none',padding:0,cursor:'pointer'}} onClick={() => handleScrollTo('slide')}>Home</button>
                </li>
                <li className={styles.navItem}>
                  <Link to="/services" className={styles.navLink}>Our Services</Link>
                </li>
                <li className={styles.navItem}>
                  <button className={styles.navLink} style={{background:'none',border:'none',padding:0,cursor:'pointer'}} onClick={() => handleScrollTo('about')}>About Us</button>
                </li>
                <li className={styles.navItem}>
                  <button className={styles.navLink} style={{background:'none',border:'none',padding:0,cursor:'pointer'}} onClick={() => handleScrollTo('blog')}>Blog</button>
                </li>
                <li className={styles.navItem}>
                  <button className={styles.navLink} style={{background:'none',border:'none',padding:0,cursor:'pointer'}} onClick={() => handleScrollTo('contact')}>Contact</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 