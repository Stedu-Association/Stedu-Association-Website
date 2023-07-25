import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Aeroplane from '../assets/images/aeroplane.png';
import Logo from '../assets/images/logo.png';
import Circle from '../assets/images/circle.png';
import Airport from '../assets/images/airport.png';

const Home = () => {
  const [typingText, setTypingText] = useState('');
  const [glowAnimation, setGlowAnimation] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [countdown, setCountdown] = useState(3);

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
    // Your feature cards data here...
  ];

  const handleTakeOff = () => {
    setShowCountdown(true);
    let timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      // Navigate to the desired page here
      // For example, window.location.href = '/other-page';
    }, 3000);
  };

  return (
    <div>
      {/* <div
        style={{
          backgroundImage: `url(${Circle})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          position: 'relative',
          overflow: 'hidden',
        }}
        className='text-white'
      > */}
      <div className="hero-section bg-gradient-to-r from-blue-500 via-white to-blue-400 text-black py-20 px-10 relative">

        <motion.div
          initial={{ x: '-100%', y: '50%' }}
          animate={{ x: '100%', y: '50%' }}
          transition={{ duration: 7, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <img src={Aeroplane} alt="Airplane" className="w-40 md:w-60 h-auto transform scale-75 md:scale-100" />
        </motion.div>

        {/* Hero Section */}
        <div className="container mx-auto pt-20 px-10 text-center">
          <img src={Logo} alt="Logo" className="w-40 md:w-60 mb-4 mx-auto" />
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`hero-title text-4xl md:text-6xl font-bold ${glowAnimation ? 'glow-animation' : ''}`}
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

          {!showCountdown ? (
            <motion.button
              onClick={handleTakeOff}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hero-button bg-white text-blue-500 font-bold rounded-full px-6 py-3 mt-6 shadow-lg"
            >
              Let's Take Off
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hero-button bg-white text-blue-500 font-bold rounded-full px-6 py-3 mt-6 shadow-lg"
            >
              Taking off in {countdown}...
            </motion.div>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section bg-gray-100 py-16 px-10">
        {/* Your feature cards section... */}
      </div>
    </div>
  );
};

export default Home;
