import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { motion } from 'framer-motion';
import { FiHome, FiCalendar, FiBookOpen, FiBriefcase, FiUsers, FiInfo, FiLogOut, FiMoon, FiSun, FiPlus } from 'react-icons/fi';
import Logo from '../assets/images/logo.png';
import { ThemeContext } from './ThemeContext';
import ReactConfetti from 'react-confetti';
import { PopupboxContainer, PopupboxManager } from 'react-popupbox';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [showDropdown, setShowDropdown] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const showStreakPopup = () => {
    PopupboxManager.open({
      content: (
        <div className="streak-popup-container">
          <div className="streak-popup">
            <h2>Congratulations!</h2>
            <p>You've logged in for 5 days in a row.</p>
            <button
              onClick={() => {
                PopupboxManager.close();
              }}
              className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 mt-4"
            >
              OK
            </button>
          </div>
        </div>
      ),
      config: {
        titleBar: { enable: false },
        fadeIn: true,
        fadeInSpeed: 500,
        overlayOpacity: 0.8,
      },
    });
  };

  return (
    <div>
      <nav className={`fixed top-0 left-0 right-0 z-50 shadow-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
           style={{
             backdropFilter: 'blur(30px)',
             backgroundColor: showDropdown ? 'rgba(255, 0, 255, 0.1)' : 'transparent'
           }}>
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div>
              <Link to="/">
                <img src={Logo} alt="Logo" className="w-10 h-10" />
              </Link>
            </div>
            <motion.div className="md:flex space-x-4 hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <Link to="/" className="flex items-center hover:text-gray-900 font-medium">
                <FiHome size={18} className="mr-1 inline" />
                Home
              </Link>
              <Link to="/about" className="flex items-center hover:text-gray-900 font-medium">
                <FiInfo size={18} className="mr-1 inline" />
                About
              </Link>
              <Link to="/meet_the_team" className="flex items-center hover:text-gray-900 font-medium">
                <FiUsers size={18} className="mr-1 inline" />
                Meet the Team
              </Link>
              <Link to="/stedu_lab" className="flex items-center hover:text-gray-900 font-medium">
                <FiCalendar size={18} className="mr-1 inline" />
                Stedu Lab
              </Link>
              <Link to="/stedu_club" className="flex items-center hover:text-gray-900 font-medium">
                <FiBriefcase size={18} className="mr-1 inline" />
                Stedu Club
              </Link>
              <Link to="/stedu_courses" className="flex items-center hover:text-gray-900 font-medium">
                <FiBookOpen size={18} className="mr-1 inline" />
                Stedu Courses
              </Link>
              <Link to="/stedu_hack" className="flex items-center hover:text-gray-900 font-medium">
                <FiPlus size={18} className="mr-1 inline" />
                Stedu Hack
              </Link>
              <Link to="/community" className="flex items-center hover:text-gray-900 font-medium">
                <FiUsers size={18} className="mr-1 inline" />
                Community
              </Link>
            </motion.div>
            <motion.div className="md:flex space-x-4 items-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              {isAuthenticated ? (
                <div className="relative flex items-center space-x-2">
                  <motion.button
                    onClick={handleToggleDropdown}
                    className="flex items-center space-x-1 cursor-pointer focus:outline-none"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={user.picture} alt="Profile" className="w-8 h-8 rounded-full" />
                    <p className="font-medium">{user.name}</p>
                    <motion.svg
                      className={`w-4 h-4 ${showDropdown ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      whileHover={{ rotate: 90 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={showDropdown ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'}
                      />
                    </motion.svg>
                  </motion.button>
                  {showDropdown && (
                    <motion.div className='py-5'
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}>
                      <div className={`absolute right-0 mt-2 py-2 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border border-gray-300 rounded-md shadow-lg z-10`}>
                        <Link
                          to="/profile"
                          className={`block px-4 py-2 text-sm ${theme === 'dark' ? 'text-white' : 'text-black'} hover:bg-gray-100`}
                        >
                          View Profile
                        </Link>
                        <Link
                          to="/settings"
                          className={`block px-4 py-2 text-sm ${theme === 'dark' ? 'text-white' : 'text-black'} hover:bg-gray-100`}
                        >
                          Settings
                        </Link>
                        <button
                          onClick={handleLogout}
                          className={`block w-full text-left px-4 py-2 text-sm ${theme === 'dark' ? 'text-red-400' : 'text-red-600'} hover:bg-gray-100`}
                        >
                          Logout
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              ) : (
                <motion.button
                  onClick={handleLogin}
                  className={`bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 ${theme === 'dark' ? 'hover:bg-blue-400' : ''}`}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
                >
                  Sign up / Log in
                </motion.button>
              )}
            </motion.div>
            <motion.div className="md:hidden flex items-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <button
                type="button"
                onClick={handleToggleDropdown}
                className={`text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 ${theme === 'dark' ? 'text-white' : ''}`}
                aria-label="Toggle menu"
              >
                <svg className={`h-6 w-6 fill-current ${theme === 'dark' ? 'text-white' : ''}`} viewBox="0 0 24 24">
                  <path
                    className="heroicon-ui"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </motion.div>
            <motion.div className="ml-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <button
                type="button"
                onClick={toggleTheme}
                className={`text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 ${theme === 'dark' ? 'text-white' : ''}`}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <motion.span whileHover={{ scale: 1.1 }}>
                    <FiMoon size={35} color='blue' className="glow-icon" />
                  </motion.span>
                ) : (
                  <motion.span whileHover={{ scale: 1.1 }}>
                    <FiSun size={35} color='yellow' className="glow-icon" />
                  </motion.span>
                )}
              </button>
            </motion.div>
            {isAuthenticated && <ReactConfetti recycle={false} />}
          </div>
        </div>
      </nav>
      {/* <PopupboxContainer />
      {isAuthenticated && showStreakPopup()} */}
    </div>
  );
};

export default NavBar;
