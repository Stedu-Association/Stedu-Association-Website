import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import Logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/">
              <img src={Logo} alt="Logo" className="w-10 h-10" />
            </Link>
            <p className="mt-2 text-sm text-gray-400">Providing STEM Education and Opportunities for All</p>
          </div>
          <div className="flex space-x-4">
            <Link to="/about" className="text-sm text-gray-400 hover:text-white">About Us</Link>
            <Link to="/contact" className="text-sm text-gray-400 hover:text-white">Contact</Link>
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-sm text-gray-400 hover:text-white">Terms of Service</Link>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/" className="text-gray-400 hover:text-white">
              <FiFacebook size={20} />
            </Link>
            <Link to="/" className="text-gray-400 hover:text-white">
              <FiTwitter size={20} />
            </Link>
            <Link to="/" className="text-gray-400 hover:text-white">
              <FiInstagram size={20} />
            </Link>
            <Link to="/" className="text-gray-400 hover:text-white">
              <FiLinkedin size={20} />
            </Link>
          </div>
        </div>
        <hr className="border-t border-gray-600 mt-8" />
        <p className="text-center text-sm mt-6 text-gray-400">
          &copy; {new Date().getFullYear()} Stedu Association. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
