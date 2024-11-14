import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = Array.from(
  { length: 40 },
  (_, i) =>
    `https://res.cloudinary.com/dregpcfhh/image/upload/v1731608696/assets/360view/GTBIKE_DEMO_${
      i + 1
    }.jpg`
);

const ProductShowcase = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    let interval;
    if (isRotating) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 100);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRotating]);

  const toggleRotation = () => setIsRotating(!isRotating);

  const nextImage = () => setCurrentImage((currentImage + 1) % images.length);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4 md:p-12 bg-gray-100">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <span className="text-primary">Product</span> Showcase
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center w-full max-w-5xl">
        <motion.div
          className="relative w-full md:w-auto h-96 md:h-auto flex flex-col items-center cursor-pointer"
          onClick={nextImage}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <img
            src={images[currentImage]}
            alt="360° Bicycle View"
            className="w-auto h-92 object-cover rounded-lg shadow-lg"
          />
          <p className="text-center mt-2 text-sm text-gray-600">
            {isRotating
              ? 'Rotating...'
              : 'Tap or click in image to rotate the bicycle view'}
          </p>

          <button
            onClick={toggleRotation}
            className="mt-4 px-4 py-2 bg-primary text-white font-semibold rounded-full hover:bg-primary/80 transition duration-200"
          >
            {isRotating ? 'Stop Rotation' : 'Start Rotation'}
          </button>
        </motion.div>

        <div className="mt-0 md:ml-12 w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
          <motion.p
            className="text-lg md:text-xl text-gray-700 mb-4 max-w-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Experience a 360° view of our latest product with immersive rotation
            controls. Discover every detail as you hover or tap to rotate the
            view.
          </motion.p>

          <motion.p
            className="text-md md:text-lg text-gray-500 max-w-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          >
            Perfectly crafted to provide an interactive experience. This
            showcase allows you to explore all angles of the product as if
            you’re seeing it in person.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
