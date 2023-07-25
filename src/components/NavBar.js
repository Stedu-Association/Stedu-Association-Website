import React from 'react';
import { motion } from 'framer-motion';

const NavBar = () => {
  return (
    <nav className="bg-blue-500 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="path_to_your_logo.png" alt="Logo" className="h-8" />
          </motion.div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">Home</a>
            <a href="#about" className="text-white hover:text-gray-300">About</a>
            <a href="#team" className="text-white hover:text-gray-300">Meet the Team</a>
            <a href="#faq" className="text-white hover:text-gray-300">FAQs</a>
            {/* Add other links as needed */}
          </div>
          {/* Add a mobile menu button here for responsive design */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
