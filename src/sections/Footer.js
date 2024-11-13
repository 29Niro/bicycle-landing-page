import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import Logo from '../assets/logo/logo.png'; 

const Footer = () => (
  <footer className="bg-black text-white py-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div className="flex flex-col items-center sm:items-start">
          <div className="flex justify-center items-center gap-2">
            <img src={Logo} alt="logo" className="h-8 w-8 md:h-12 md:w-12" />
            <h1 className="text-xl font-bold">Bicycle Store</h1>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:underline">
                Shop Now
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p>Phone: (123) 456-7890</p>
          <p>
            Email:{' '}
            <a href="mailto:email@example.com" className="hover:underline">
              email@example.com
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com"
              className="hover:text-blue-600"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.twitter.com"
              className="hover:text-blue-400"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.instagram.com"
              className="hover:text-pink-500"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com"
              className="hover:text-blue-700"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://www.youtube.com"
              className="hover:text-red-600"
              aria-label="YouTube"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-300">
        <p>All content on this website is for informational purposes only.</p>
        <p>
          &copy; {new Date().getFullYear()}{' '}
          <a
            href="https://niro-dev.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Niroshan
          </a>
          . All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
