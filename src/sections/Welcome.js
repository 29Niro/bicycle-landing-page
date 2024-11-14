import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../assets/hero/bicycle-hero.png';

const Welcome = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
      }}
      className="h-screen md:h-auto bg-gray-200 flex flex-col items-center justify-center text-center p-4"
    >
      <motion.div
        className="absolute right-0 top-0 left-0 bottom-0 h-full w-full flex items-center justify-center z-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h1 className="text-6xl md:text-8xl font-extrabold text-gray-400 tracking-wider">
          ORINS
        </h1>
      </motion.div>

      <div className="relative max-w-4xl mx-auto w-full">
        <motion.h1
          className="mt-8 md:mt-20 text-3xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0, scale: [1, 1.1, 1] }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
        >
          GET YOUR DREAM BIKE
        </motion.h1>

        <motion.img
          src={Hero}
          alt="Electric Bicycle"
          className="w-full object-contain max-w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
        />

        <motion.div
          className="absolute md:top-1/2 top-1/4 md:left-10 flex items-center space-x-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <span className="bg-white/50 p-2 rounded shadow-md text-sm font-medium">
            Energy-Efficient
            <br />
            Regenerative Braking
          </span>
        </motion.div>

        <motion.div
          className="absolute md:top-1/3 top-1/4 md:right-56 right-12 flex items-center space-x-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <span className="bg-white/50 p-2 rounded shadow-md text-sm font-medium">
            Smart Adaptive
            <br />
            Suspension
          </span>
        </motion.div>

        <motion.h1
          className="mt-8 text-2xl md:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Unleash the Future of Commuting with Our Upgraded <br />
          <span className="text-primary">Smart Bicycle</span>
        </motion.h1>

        <motion.div
          className="mt-4 flex flex-col md:flex-row items-center justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <button className="px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/80 transition duration-200">
            Buy now
          </button>
          <p className="text-xs mt-2 text-gray-500">*Starts from $1,599</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Welcome;
