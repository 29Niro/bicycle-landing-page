import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BackgroundImg from '../assets/click-to-action/backgroundImg.jpg';
import Offer from '../assets/click-to-action/offer1.png';

const CallToAction = () => {
  const [timeLeft, setTimeLeft] = useState(5000);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsLeft = seconds % 60;

    return `${days}d ${String(hours).padStart(2, '0')}h ${String(
      minutes
    ).padStart(2, '0')}m ${String(secondsLeft).padStart(2, '0')}s`;
  };

  return (
    <section
      className="md:px-28 px-4 py-16 bg-primary text-white text-center bg-cover bg-center relative flex flex-col sm:flex-row items-center justify-between"
      style={{
        backgroundImage: `url(${BackgroundImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <motion.div
        className="z-10 relative w-full sm:w-1/2 px-8 text-center sm:text-left"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Yours Now!</h2>
        <div className="text-lg sm:text-xl font-semibold mb-6">
          <p>Hurry! Offer ends in:</p>
          <span className="text-xl sm:text-2xl font-bold">
            {formatTime(timeLeft)}
          </span>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-white font-bold py-2 px-6 rounded-full"
          onClick={() => alert('Redirecting to purchase page...')}
        >
          Click to Buy
        </motion.button>
      </motion.div>

      <motion.div
        className="z-10 relative w-full sm:w-1/2 mt-8 sm:mt-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <img
          src={Offer}
          alt="Product"
          className="object-cover w-full sm:h-80 sm:w-auto rounded-lg shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default CallToAction;
