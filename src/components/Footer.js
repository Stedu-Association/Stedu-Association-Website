import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white p-12'>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <img src={Logo} alt="Logo" className="w-10 h-10 mr-2" />
            <span className="text-lg font-bold">Stedu Association</span>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-2">
              <FiMail />
              <span>info@steduassociation.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiPhone />
              <span>+123 456 7890</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiMapPin />
              <span>123 Street, City</span>
            </div>
          </div>
        </div>
        <motion.div className="flex justify-center space-x-4 mt-6">
          <motion.a
            href="https://www.facebook.com/steduassociation"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <FaFacebook className="text-white text-2xl" />
          </motion.a>
          <motion.a
            href="https://www.twitter.com/steduassociation"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <FaTwitter className="text-white text-2xl" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/company/steduassociation"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <FaLinkedin className="text-white text-2xl" />
          </motion.a>
        </motion.div>
        <hr className='my-6 border-gray-600' />
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Stedu Association. All rights reserved.
        </p>
        <div className="text-center mt-4">
          <p>Sign Up for our Monthly Newsletter!</p>
          <p className="text-blue-500 cursor-pointer hover:underline">We will not spam you, really.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;