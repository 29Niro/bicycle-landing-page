import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from '../components/TestimonialCard';

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      review:
        'This product is amazing! It really helped me improve my business.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      review:
        'A fantastic service, highly recommend! I will definitely be coming back.',
      rating: 4,
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      review: 'Great customer support, and the product quality is top-notch.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Bob Brown',
      email: 'bob.brown@example.com',
      review: 'Excellent experience from start to finish. Very satisfied!',
      rating: 4,
    },
    {
      id: 5,
      name: 'Charlie Davis',
      email: 'charlie.davis@example.com',
      review: 'I am impressed with the ease of use and the quick results.',
      rating: 5,
    },
  ];

  const itemsPerPage = 3;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + itemsPerPage) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [data.length]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const visibleItems = data.slice(
    activeIndex,
    activeIndex + itemsPerPage > data.length
      ? data.length
      : activeIndex + itemsPerPage
  );

  const handleDotClick = (index) => {
    setActiveIndex(index * itemsPerPage);
  };

  return (
    <div className="p-4 my-10">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        What <span className="text-primary">Our Customers</span> Say
      </motion.h2>

      <div className="relative">
        <div className="hidden sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleItems.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }} 
              className="w-full"
            >
              <TestimonialCard property={testimonial} />
            </motion.div>
          ))}
        </div>

        <div className="sm:hidden flex flex-col items-center">
          <motion.div
            key={data[activeIndex].id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <TestimonialCard property={data[activeIndex]} />
          </motion.div>
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <motion.button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                Math.floor(activeIndex / itemsPerPage) === index
                  ? 'bg-primary'
                  : 'bg-gray-300'
              }`}
              aria-label={`Go to page ${index + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
