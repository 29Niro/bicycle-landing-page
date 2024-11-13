import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '../assets/logo/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-primary text-white p-4 fixed w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <img src={Logo} alt="logo" className="h-8 w-8 md:h-12 md:w-12" />
          <h1 className="text-xl font-bold">Bicycle Store</h1>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#welcome" className="hover:underline">
            Home
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#showcase" className="hover:underline">
            Showcase
          </a>
          <a href="#testimonials" className="hover:underline">
            Testimonials
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>

        {!isOpen && (
          <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        )}
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-black transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <div className="p-4 bg-primary flex items-center justify-between">
          <div className="flex text-white justify-center items-center gap-2">
            <img src={Logo} alt="logo" className="h-8 w-8 md:h-12 md:w-12" />
            <h1 className="text-xl font-bold">Bicycle Store</h1>
          </div>
          <button onClick={toggleMenu} className="focus:outline-none">
            <FiX size={24} color="white" />
          </button>
        </div>
        <nav className="flex flex-col space-y-2 p-4">
          <a
            href="#welcome"
            className="block py-2 px-4 hover:bg-primary/30 rounded-full"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-2 px-4  hover:bg-primary/30 rounded-full"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#showcase"
            className="block py-2 px-4  hover:bg-primary/30 rounded-full"
            onClick={toggleMenu}
          >
            Showcase
          </a>
          <a
            href="#testimonials"
            className="block py-2 px-4  hover:bg-primary/30 rounded-full"
            onClick={toggleMenu}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="block py-2 px-4  hover:bg-primary/30 rounded-full"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </nav>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
