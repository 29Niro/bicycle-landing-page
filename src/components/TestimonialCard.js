import { motion } from 'framer-motion';

export default function TestimonialCard({ testimonial }) {
  return (
    <motion.figure
      className="h-[300px] flex flex-col items-center justify-center text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
    >
      <blockquote className="text-xl font-semibold text-gray-900 sm:text-2xl">
        <p>{testimonial.text}</p>
      </blockquote>
      <figcaption className="mt-6 flex flex-col items-center">
        <img
          alt={testimonial.name}
          src={testimonial.image}
          className="mx-auto w-20 h-20 rounded-full"
        />
        <div className="mt-4 text-base text-gray-900 font-semibold">
          {testimonial.name}
        </div>
        <div className="text-sm text-gray-600">{testimonial.title}</div>
      </figcaption>
    </motion.figure>
  );
}
