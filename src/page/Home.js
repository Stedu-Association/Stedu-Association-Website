import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { useAuth0 } from '@auth0/auth0-react';
import { useTheme } from '../components/ThemeContext';

const Home = () => {
  const [typingText, setTypingText] = useState('');
  const [glowAnimation, setGlowAnimation] = useState(false);
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const { theme } = useTheme();

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

  const testimonials = [
    {
      text: "I loved this course !! I was also able to get involved in helping and I really enjoyed that. The lecturers were all interesting and really wanted to be there. I’d be open to taking another course with STEDU in the future. I also love that there were no fees to participate.",
      author: "Introduction to Astronomy Course Student",
    },
    {
      text: "Astronomy Course- Taking this course was one of the best decisions of my life! I’ve learned so much ranging from topics like comets to phases of the moon to the observable/un-observable universe, etc. I knew I wanted to major in astronomy in college and this course strengthened my passion even more!",
      author: "Introduction to Astronomy Course Student",
    },
    {
      text: "Introduction to Cancer Biology Fall Course 2021 was one of the best online courses I have taken! The topics and speakers were very in-depth yet comprehensible for learners in the field and the beginners. I would love to take other courses offered by Stedu Association.",
      author: "Introduction to Cancer Biology Course Student",
    },
    {
      text: "This course was amazing! I was astonished to see the diversity of lecturers! They were all so good and well versed in cancer biology. I enjoyed this course and will surely attend all future courses too.",
      author: "Introduction to Cancer Biology Course Student",
    },
  ];

  return (
    <div className={theme}>
      {/* Hero Section */}
      <div className={`hero-section ${theme === 'dark' ? 'bg-gradient-to-r from-black via-blue-900 to-black text-white' : 'bg-gradient-to-r from-blue-500 via-white to-blue-400'}  py-20 px-10 relative`}>
        <div className="container mx-auto">
          <div className="text-center">
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
          </div>
        </div>
      </div>

      {/* Sponsors */}
      

      {/* Testimonials Section */}
      <div className={`testimonials-section ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} py-16 px-10`}>
        <div className="container mx-auto">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`testimonial-card ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} p-6 rounded-lg shadow-lg`}
              >
                <p className="testimonial-text mb-4">{testimonial.text}</p>
                <p className={`testimonial-author font-bold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>{testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;