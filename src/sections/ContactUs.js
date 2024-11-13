import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactUs = () => {
  const formik = useFormik({
    initialValues: { name: '', email: '', message: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <section id="contact" className="py-16 px-4 md:px-6 lg:px-12 bg-gray-100">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-primary">
        Contact <span className="text-black">Us</span>
      </h2>

      <form
        onSubmit={formik.handleSubmit}
        className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg space-y-6"
      >
        <div>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-sm mt-2">
              {formik.errors.name}
            </div>
          )}
        </div>

        <div>
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm mt-2">
              {formik.errors.email}
            </div>
          )}
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            rows="5"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message && (
            <div className="text-red-500 text-sm mt-2">
              {formik.errors.message}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-primary text-white font-bold rounded-full hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
