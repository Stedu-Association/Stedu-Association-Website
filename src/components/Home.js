import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { useAuth0 } from '@auth0/auth0-react';
import { useTheme } from './ThemeContext';
import NavBar from './NavBar';

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

  const featureCards = [
    {
      title: 'Summer Program',
      description: 'Fully free-of-cost programs run in the summer that teach students valuable STEM skills',
      link: '/summer-program',
    },
    {
      title: 'STEM Courses',
      description: 'In-depth and intensive learning experiences led by highly esteemed professors and lecturers',
      link: '/stem-courses',
    },
    {
      title: 'STEM Workshops',
      description: 'Workshops on various, unique topics such as Cancer Immunology and Political Cognition',
      link: '/stem-workshops',
    },
    {
      title: 'Mentorship',
      description: 'Student-mentor pairings to connect high school & college students with STEM professionals',
      link: '/mentorship',
    },
  ];
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

            {/* <motion.button
        onClick={isAuthenticated ? () => console.log("Already logged in!") : () => loginWithRedirect()}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }} // Scale up on hover
        whileTap={{ scale: 0.9, transition: { duration: 0.3 } }} // Scale down on tap
        className="hero-button bg-white text-blue-500 font-bold rounded-full px-6 py-3 mt-6 shadow-lg"
      >
        {isAuthenticated ? "Already Logged In" : "Let's Take Off"}
      </motion.button> */}
          </div>
        </div>
      </div>
      
      
      <div className='flex'>

        {/* Mission Section */}
        <div
          className={`mission-section ${theme === 'dark' ? 'bg-black' : 'bg-white'} py-3 px-10 animate-fade-in`}
        >
          <div className="container mx-auto bg-gray-100 p-6 flex">
            {/* <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Our Mission</h2> */}
            {/* <hr /> */}
            <div>
              <p className="text-center text-gray-700 text-lg">
              Stedu Association is a 501(c)(3) international non-profit organization based in South Korea and California with the mission of providing STEM in a more accessible and approachable manner. STEM is becoming more and more popular, however, there aren't many resources to guide those who want to pursue specific careers in these fields. This reason is why it is so important for us to do our best to provide the future generation of STEM leaders with the proper education, fair opportunities, and inspiration from professionals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className={`features-section ${theme === 'dark' ? 'bg-black' : 'bg-gray-100'} py-16 px-10`}>
        <div className="container mx-auto">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="feature-card bg-white p-6 rounded-md shadow-lg"
              >
                <Link to={card.link}>
                  <h2 className="feature-title text-xl font-bold text-gray-900 mb-2">
                    {card.title}
                  </h2>
                  <p className="feature-description text-gray-800">{card.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className={`separator-section ${theme === 'dark' ? 'bg-black' : 'bg-gray-300'} py-8`}>
        <div className="container mx-auto">
          <div className="w-32 h-2 bg-blue-500 mx-auto"></div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className={`testimonials-section ${theme === 'dark' ? 'bg-black' : 'bg-white'} py-16 px-10`}>
        <div className="container mx-auto">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="testimonial-card bg-gray-100 p-6 rounded-lg shadow-lg"
              >
                <p className="testimonial-text text-gray-800 mb-4">{testimonial.text}</p>
                <p className="testimonial-author text-blue-600 font-bold">{testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;
