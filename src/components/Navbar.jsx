import React from 'react';
import styles from './Navbar.module.css';
import Logo from './LogoThaiNest.svg?react'; // Import SVG as a React component

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <Logo className={styles.logo} /> 
      </div>
      <div className={styles.navbarRight}>
        <ul className={styles.navbarNav}>
          <li className={styles.navItem}><a href="#home" className={styles.navLink}>Home</a></li>
          <li className={styles.navItem}><a href="#services" className={styles.navLink}>Our Services</a></li>
          <li className={styles.navItem}><a href="#about" className={styles.navLink}>About Us</a></li>
          <li className={styles.navItem}><a href="#blog" className={styles.navLink}>Blog</a></li>
          <li className={styles.navItem}><a href="#contact" className={styles.navLink}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 