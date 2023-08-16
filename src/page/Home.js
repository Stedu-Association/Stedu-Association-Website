import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { useAuth0 } from '@auth0/auth0-react';
import { useTheme } from '../components/ThemeContext';
import Google from '../assets/images/sponsors/google_logo (1).png';
import Canva from '../assets/images/sponsors/Canva-New-Logo.png';
import Crimson from '../assets/images/sponsors/crimson_logo (1).webp';
import Fibery from '../assets/images/sponsors/fibery.png';
import Taskade from '../assets/images/sponsors/taskade-circle-logo-full-black.png';
import { FiBookOpen, FiBriefcase, FiCalendar, FiPlus, FiUsers } from 'react-icons/fi';
import SteduLab from '../assets/gif/animation1.gif'
import SteduCourses from '../assets/gif/animation2.gif'
import SteduClub from '../assets/gif/animation4.gif'
import SteduPlus from '../assets/gif/animation3.gif'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    { src: Crimson, alt: 'Crimson' },
    { src: Canva, alt: 'Canva' },
    { src: Google, alt: 'Google' },
    { src: Taskade, alt: 'Taskade' },
    { src: Fibery, alt: 'Fibery' },
  ];

  const impactStats = [
    { label: 'students', value: '480+' },
    { label: 'lectures', value: '45+' },
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
            <div className="sponsors-section py-4 px-4 relative">
              <div className="blackish-background absolute inset-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg z-0"></div>
              <div className="container mx-auto">
                <div className={`sponsors-list flex flex-col items-center justify-center text-center ${theme === 'dark' ? 'text-blue-200' : 'text-black'}`}>
                  <div className="horizontal-sponsor-strip flex items-center space-x-6 relative z-1">
                  <h2 className=" text-2xl font-bold mb-4">Trusted by</h2>

                    {sponsorImages.map((sponsor, index) => (
                      <motion.div
                        key={index}
                        className="sponsor-item rounded-lg overflow-hidden"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: index * 0.5 }}
                      >
                        <motion.img
                          src={sponsor.src}
                          alt={sponsor.alt}
                          className={`w-40 h-auto grayscale transition duration-500 hover:grayscale-0 transform hover:scale-101`}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className='section-separator' />
            {/* Impact stats */}
            <div className="impact-section p-5 text-center relative">
              <div className="container mx-auto">
                <div>
                  <h2 className={`text-3xl font-bold custom-underline mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    Our Impact in Numbers
                  </h2>
                </div>
                <div className={`bg-${theme === 'dark' ? 'black' : 'white'} bg-opacity-40 rounded-lg backdrop-blur-lg p-8 relative z-10`}>
                  <motion.div
                    className="grid grid-cols-2 gap-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    {impactStats.map((stat, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, y: -10 }}
                        whileTap={{ scale: 0.95 }}
                        className={`impact-stat ${theme === 'dark' ? 'text-white' : 'text-gray-800'} p-6 rounded-lg shadow-lg flex flex-col justify-center items-center`}
                      >
                        <div className="icon-wrapper">
                          {stat.label === 'students' ? (
                            <motion.div
                              initial={{ rotateY: -90, opacity: 0 }}
                              animate={{ rotateY: 0, opacity: 1 }}
                              transition={{ duration: 1, delay: 0.3 }}
                              className="icon"
                            >
                              <FiUsers size={40} />
                            </motion.div>
                          ) : (
                            <motion.div
                              initial={{ rotateY: -90, opacity: 0 }}
                              animate={{ rotateY: 0, opacity: 1 }}
                              transition={{ duration: 1, delay: 0.3 }}
                              className="icon"
                            >
                              <FiBookOpen size={40} />
                            </motion.div>
                          )}
                        </div>
                        <motion.p className="stat-value text-4xl font-bold my-2">
                          {stat.value}
                        </motion.p>
                        <motion.p className={`stat-label ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} text-xl font-semibold`}>
                          {stat.label}
                        </motion.p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Stedu initiatives */}
            <div className="stedu-sections py-16 px-10">
              <h2 className={`text-3xl custom-underline font-bold text-center mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                Explore Stedu Initiatives
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: 'Stedu Lab', icon: FiCalendar, image: SteduLab },
                  { title: 'Stedu Courses', icon: FiBookOpen, image: SteduCourses },
                  { title: 'Stedu Club', icon: FiBriefcase, image: SteduClub },
                  { title: 'Stedu Plus', icon: FiPlus, image: SteduPlus },
                ].map((section, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -5, boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.15)' }}
                    whileTap={{ scale: 0.95 }}
                    className={`stedu-section-card relative flex md:flex-row-reverse ${theme === 'dark' ? 'text-white' : 'text-gray-800'} p-6 rounded-lg transition-transform`}
                  >
                    <div className="stedu-card-image md:w-1/2 relative overflow-hidden rounded-lg">
                      <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
                      <div className="overlay absolute inset-0 bg-black opacity-40"></div>
                    </div>
                    <div className="stedu-card-content md:w-1/2 md:pl-8 flex flex-col justify-center items-start text-left">
                      <div className="stedu-card-icon">
                        {section.icon({ size: 40 })}
                      </div>
                      <h3 className="stedu-card-title font-bold text-xl mt-4">{section.title}</h3>
                      <p className="stedu-card-description mt-2">
                        {section.title === 'Stedu Lab' && 'Fully free-of-cost programs run in the summer that teach students valuable STEM skills'}
                        {section.title === 'Stedu Courses' && 'In-depth and intensive learning experiences led by highly esteemed professors and lecturers'}
                        {section.title === 'Stedu Club' && 'Join our thriving community of like-minded individuals passionate about STEM.'}
                        {section.title === 'Stedu Plus' && 'Student-mentor pairings to connect high school & college students with STEM professionals'}
                      </p>
                      <motion.div
                        className="stedu-card-button mt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Link to={`/${section.title.toLowerCase().replace(' ', '_')}`} className="text-blue-600">
                          Learn More
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Testimonials Section */}
            <div className={`testimonials-section py-6 px-40 relative overflow-hidden`}>
              <div className="container mx-auto">
                <h2 className={`text-center custom-underline text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'} mb-6`}>Testimonials</h2>
                <Slider
                  dots={true}
                  infinite={true}
                  autoplay={true}
                  autoplaySpeed={4000}
                  slidesToShow={1}
                  slidesToScroll={1}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index}>
                      <div className={`testimonial-card  ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                        <div className="p-6">
                          <p className="testimonial-text mb-4">{testimonial.text}</p>
                          <p className={`testimonial-author font-bold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                            {testimonial.author}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
                <div className="testimonial-bg-gradient absolute inset-0 pointer-events-none"></div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;