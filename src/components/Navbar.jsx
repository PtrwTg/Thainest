import React from 'react';
import styles from './Navbar.module.css';
import Logo from './LogoThaiNest.svg?react'; // Import SVG as a React component
import { useLocation, Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isServicesPage = location.pathname === '/services';
  const navigate = useNavigate();

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

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <Logo className={styles.logo} /> 
      </div>
      <div className={styles.navbarRight}>
        <ul className={styles.navbarNav}>
          {isServicesPage ? (
            <>
              <li className={styles.navItem}>
                <Link to="/" className={styles.navLink}>Home</Link>
              </li>
              <li className={styles.navItem}>
                <a href="#contact" className={styles.navLink}>Contact</a>
              </li>
            </>
          ) : (
            <>
              <li className={styles.navItem}>
                <button className={styles.navLink} style={{background:'none',border:'none',padding:0,cursor:'pointer'}} onClick={() => handleScrollTo('home')}>Home</button>
              </li>
              <li className={styles.navItem}>
                <Link to="/services" className={styles.navLink}>Our Services</Link>
              </li>
              <li className={styles.navItem}>
                <button className={styles.navLink} style={{background:'none',border:'none',padding:0,cursor:'pointer'}} onClick={() => handleScrollTo('about')}>About Us</button>
              </li>
              <li className={styles.navItem}>
                <button className={styles.navLink} style={{background:'none',border:'none',padding:0,cursor:'pointer'}} onClick={() => handleScrollTo('blogSlider')}>Blog</button>
              </li>
              <li className={styles.navItem}>
                <button className={styles.navLink} style={{background:'none',border:'none',padding:0,cursor:'pointer'}} onClick={() => handleScrollTo('contact')}>Contact</button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 