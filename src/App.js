import React, { useState, useEffect } from 'react';
import Navbar from './sections/Navbar';
import Welcome from './sections/Welcome';
import AboutUs from './sections/AboutUs';
import ProductShowcase from './sections/ProductShowcase';
import CallToAction from './sections/CallToAction';
import ContactUs from './sections/ContactUs';
import Footer from './sections/Footer';
import {FaArrowAltCircleUp} from 'react-icons/fa';
import TestimonialCarousel from './sections/TestimonialCarousel';

function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navbar />
      <div id="welcome">
        <Welcome />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="showcase">
        <ProductShowcase />
      </div>
      <div id="testimonials">
        <TestimonialCarousel />
      </div>
      <CallToAction />
      <div id="contact">
        <ContactUs />
      </div>
      <Footer />

      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="z-30 fixed bottom-4 right-4 bg-primary text-white h-10 w-10 rounded-full shadow-lg hover:bg-accent transition flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <FaArrowAltCircleUp size={30} />
        </button>
      )}
    </div>
  );
}

export default App;
