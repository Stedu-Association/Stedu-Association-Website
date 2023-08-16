import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { useAuth0 } from '@auth0/auth0-react';
import { useTheme } from '../components/ThemeContext';
import Google from '../assets/images/sponsors/google_logo.png';
import Canva from '../assets/images/sponsors/canva_logo.png';
import Crimson from '../assets/images/sponsors/crimson_logo.png';
import Fibery from '../assets/images/sponsors/fibery.png';
import Taskade from '../assets/images/sponsors/taskade-logo.png';


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


  const sponsorImages = [
    { src: Google, alt: 'Google' },
    { src: Canva, alt: 'Canva' },
    { src: Crimson, alt: 'Crimson' },
    { src: Taskade, alt: 'Taskade' },
    { src: Fibery, alt: 'Fibery' },
  ];

  return (
    <div className={theme}>
      {/* Hero Section */}
      <div className={`hero-section ${theme === 'dark' ? 'bg-gradient-to-r from-black via-blue-900 to-black text-white' : 'bg-gradient-to-r from-blue-500 via-white to-blue-400'}  py-10 px-10 relative`}>
        <div className="container mx-auto">
          <div className="text-center">
            <img src={Logo} alt="Logo" className="w-60 mb-4 mx-auto" />
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
            {/* <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hero-description text-md mt-4"
            >
            We strive to promote the idea of "STEM for ALL" by presenting STEM opportunities to everyone, regardless of where they are from, what they do, or how they identify.
            </motion.p> */}
          

      {/* Sponsors */}
      <div className="sponsors-section py-1 px-4 bg-opacity-50 backdrop-filter backdrop-blur-lg">
        <div className="container mx-auto">
          <motion.div
            className="sponsors-list flex items-center justify-center overflow-hidden"
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className={`text-center text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-blue-200' : 'text-black'}`}>Trusted by</h2>

            {sponsorImages.map((sponsor, index) => (
              <motion.div
                key={index}
                className="w-40 h-40 rounded-full overflow-hidden m-4 flex items-center justify-center shadow-xl bg-white transform hover:scale-105 transition-transform duration-300"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.5 }}
              >
                <motion.img
                  src={sponsor.src}
                  alt={sponsor.alt}
                  className="w-full h-auto"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
</div>
        </div>
      </div>
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