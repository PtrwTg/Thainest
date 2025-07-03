import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Aboutus from './components/Aboutus/Aboutus';
import BlogSection from './components/Blog/BlogSection';
import Contact from './components/Contact/Contact';
import { Routes, Route } from 'react-router-dom';
import Services from './page/Services';
import NestWelcome from './components/NestWelcome/NestWelcome';
import ScrollToTop from './components/ScrollToTop';

// รายการรูปภาพที่ต้อง preload (เพิ่มตามที่ใช้จริง)
const imagesToPreload = [
  '/src/page/servicesimg.svg',
  '/src/page/4img.svg',
  '/src/page/1.svg',
  '/src/page/2.svg',
  '/src/page/3.svg',
  '/src/page/4.svg',
  '/src/page/5.svg',
  '/src/page/6.svg',
  '/src/page/7.svg',
  '/src/page/8.svg',
  '/src/page/9.svg',
  '/src/page/10.svg',
  '/src/page/11.svg',
  '/src/page/4img2.svg',
  '/src/page/BG2.svg',
  '/src/components/NestWelcome/combine.svg',
  '/src/components/Aboutus/candle.svg',
  '/src/components/Aboutus/facialmas1.svg',
  '/src/components/Aboutus/facialmas2.svg',
  '/src/components/Aboutus/Oppa1.svg',
  '/src/components/Blog/blog1.svg',
  '/src/components/Blog/blog2.svg',
  '/src/components/Blog/blog3.svg',
  '/src/components/Blog/blogcombine.svg',
  '/src/components/Blog/blogicon.svg',
  '/src/components/Blog/flower.svg',
  '/src/components/Contact/Anta.svg',
  '/src/components/Contact/Hicap.svg',
  '/src/components/Contact/LogoThaiNest.svg',
  '/src/components/Navbar/LogoThaiNest.svg',
  '/src/components/Slider/slide1.svg',
  '/src/components/Slider/slide2.svg',
  '/src/components/Slider/slide3.svg',
];

function preloadImages(imageList) {
  return Promise.all(
    imageList.map(src => {
      return new Promise(resolve => {
        const img = new window.Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve;
      });
    })
  );
}

const Loader = () => (
  <div style={{
    width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column',
    justifyContent: 'center', alignItems: 'center', background: '#EEE6DC', zIndex: 9999
  }}>
    <img
      src="/src/components/Navbar/LogoThaiNest.svg"
      alt="ThaiNest Logo"
      style={{
        width: '18vw',
        maxWidth: 180,
        minWidth: 80,
        height: 'auto',
        marginBottom: 32
      }}
    />
    <div style={{ fontSize: '2rem', color: '#E5C177', fontFamily: 'Quicksand, sans-serif' }}>
      Loading ThaiNest...
    </div>
  </div>
);

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    preloadImages(imagesToPreload).then(() => {
      setIsReady(true);
    });
  }, []);

  if (!isReady) return <Loader />;

  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <>
            <Slider />
            <NestWelcome />
            <div className="homeSafeArea" />
            <Aboutus />
            <BlogSection />
            <Contact />
          </>
        } />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
};

export default App; 