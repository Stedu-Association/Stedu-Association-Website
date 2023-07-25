import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Aeroplane from '../assets/images/aeroplane.png';
import Logo from '../assets/images/logo.png';
// import './Home.css'; 
import Circle from '../assets/images/circle.png';
import Airport from '../assets/images/airport.png';

const Home = () => {
  const [typingText, setTypingText] = useState('');
  const [glowAnimation, setGlowAnimation] = useState(false);

  useEffect(() => {
    const websiteName = 'Stedu Association';
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setTypingText((prevText) => websiteName.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === websiteName.length) {
        clearInterval(typingInterval);
        setGlowAnimation(true);
      }
    }, 100);
  }, []);

  const featureCards = [
  ];



  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section bg-gradient-to-r from-blue-500 via-white to-blue-400 text-black py-20 px-10 relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <motion.div
            initial={{ x: '-100%', y: '50%' }}
            animate={{ x: '100%', y: '50%' }}
            transition={{ duration: 7, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
          >
            <img src={Aeroplane} alt="Airplane" className="w-40 md:w-60 h-auto transform scale-75 md:scale-100" />
          </motion.div>
        </div>
        <div className="container mx-auto">
          <div className="text-center">      
            <img src={Logo} alt="Logo" className="w-40 md:w-60 mb-4 mx-auto" />
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`hero-title text-4xl md:text-6xl font-bold ${glowAnimation ? 'glow-animation' : ''
                }`}
            >
              {typingText}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hero-description text-lg mt-4"
            >
              Providing STEM Education and Opportunities for All
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hero-button bg-white text-blue-500 font-bold rounded-full px-6 py-3 mt-6 shadow-lg"
            >
              Let's Take Off
            </motion.button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section bg-gray-100 py-16 px-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featureCards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="feature-card bg-white p-6 rounded-md shadow-lg"
              >
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Link to={card.link}>
                    <card.icon className="feature-icon text-3xl mb-2 text-blue-600" />
                    <h2 className="feature-title text-xl font-bold text-gray-900">
                      {card.title}
                    </h2>
                    <p className="feature-description text-gray-800">{card.description}</p>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
              
    </div>

  );
};

export default Home;
