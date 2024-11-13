import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaBicycle,
  FaBatteryFull,
  FaMapMarkedAlt,
  FaShieldAlt,
} from 'react-icons/fa';
import about from '../assets/about/about.png';
import FeatureCard from '../components/FeatureCard';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <FaBicycle />,
      title: 'Lightweight Frame',
      description: 'Carbon frame that’s both durable and light.',
    },
    {
      icon: <FaBatteryFull />,
      title: 'Regenerative Braking',
      description: 'Efficient energy recovery for extended range.',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Smart Suspension',
      description: 'Adaptive suspension for a smoother ride.',
    },
    {
      icon: <FaMapMarkedAlt />,
      title: 'GPS Tracking',
      description: 'Real-time location and smart connectivity.',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative flex flex-col md:flex-row items-center justify-between h-auto py-16 px-4 md:px-12 lg:px-28 bg-white"
    >
      <motion.div
        className="z-20 max-w-lg text-center md:text-left mb-6 md:mb-0"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-primary">About</span> Us
        </h2>
        <p className="text-sm md:text-base mb-8">
          Discover Sphynx Bicycles, engineered for performance and built for
          durability. Our bicycles integrate advanced technology with a focus on
          sustainability and rider comfort.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="relative z-10 mb-6 md:mb-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      >
        <img
          src={about}
          alt="Sphynx Model Bicycle"
          className="w-full sm:w-96 md:w-[650px] object-contain"
        />
      </motion.div>

      <div className="absolute right-0 top-0 md:h-full h-full w-full md:w-1/3 bg-primary flex items-center justify-center z-0 opacity-10 md:opacity-100">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold text-white/50 tracking-wider">
          SPHYNX
        </h1>
      </div>
    </section>
  );
};

export default AboutUs;
