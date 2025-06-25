import React from 'react';
import Home from './page/Home';
import Navbar from './components/Navbar';
import Slider from './components/Slider/Slider';
import OurServices from './page/OurServices';
import AboutBlog from './page/AboutBlog';
import Contact from './page/Contact';
import { Routes, Route } from 'react-router-dom';
import Services from './page/Services';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Slider />
            <Home />
            <OurServices />
            <AboutBlog />
            <Contact />
          </>
        } />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
};

export default App; 