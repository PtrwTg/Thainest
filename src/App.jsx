import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Aboutus from './components/Aboutus/Aboutus';
import BlogSection from './components/Blog/BlogSection';
import Contact from './components/Contact/Contact';
import { Routes, Route } from 'react-router-dom';
import Services from './page/Services';
import NestWelcome from './components/NestWelcome/NestWelcome';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
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