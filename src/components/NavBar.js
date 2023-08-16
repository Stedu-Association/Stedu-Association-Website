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
  const [showSteduDropdown, setShowSteduDropdown] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };
  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setShowSteduDropdown(false); // Stedu initiatives dropdown
  };

  const handleToggleSteduDropdown = () => {
    setShowSteduDropdown(!showSteduDropdown);
    setShowDropdown(false); // User Profile dropdown
  };

  // Streak Popup
  const showStreakPopup = () => {
    PopupboxManager.open({
      content: (
        <div className="streak-popup-container">
          <div className="streak-popup">
            <h4>Congratulations!</h4>
            <p>You've logged in for 5 days in a row.</p>
            <button
              onClick={() => {
                PopupboxManager.close();
              }}
              className="bg-blue-500 text-white font-medium py-4 px-4 rounded-md hover:bg-blue-600 mt-4"
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
          backgroundColor: (showDropdown || showSteduDropdown) ? 'rgba(0, 0, 0, 0.1)' : 'transparent'
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
              transition={{ duration: 0.5, delay: 0.4 }}>
              <Link to="/" className="flex items-center hover:text-blue-500  font-medium whitespace-nowrap">
                <FiHome size={18} className="mr-1 inline" />
                Home
              </Link>
              <Link to="/about" className="flex items-center hover:text-blue-500  font-medium whitespace-nowrap">
                <FiInfo size={18} className="mr-1 inline" />
                About
              </Link>
              <Link to="/meet_the_team" className="flex items-center hover:text-blue-500 font-medium whitespace-nowrap">
                <FiUsers size={18} className="mr-1 inline" />
                Meet the Team
              </Link>

              {/*Stedu Initiatives */}
                <div className="relative group">
                  <div
                    className={`flex items-center hover:text-blue-500 font-medium whitespace-nowrap cursor-pointer ${theme === 'dark' ? 'text-white' : ''}`}
                    onClick={handleToggleSteduDropdown}
                  >
                    <FiBriefcase size={18} className="mr-1 inline" />
                    Stedu Initiatives
                  </div>
                  {showSteduDropdown && (
                    <motion.div
                      className={`absolute right-0 mt-2 w-72 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border border-gray-300 rounded-md shadow-lg z-10`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ maxHeight: '300px', overflowY: 'auto' }}
                    >
                      <div className="grid grid-cols-2 gap-2 p-4">
                        <Link to="/stedu_lab" className={`block text-sm ${theme === 'dark' ? 'text-white dark:hover:bg-gray-700' : 'text-black'} hover:bg-gray-100 p-2 rounded-md`}>
                          <FiCalendar size={18} className="mr-2 inline" />
                          Stedu Lab
                        </Link>
                        <Link to="/stedu_club" className={`block text-sm ${theme === 'dark' ? 'text-white dark:hover:bg-gray-700' : 'text-black'} hover:bg-gray-100 p-2 rounded-md`}>
                          <FiBriefcase size={18} className="mr-2 inline" />
                          Stedu Club
                        </Link>
                        <Link to="/stedu_courses" className={`block text-sm ${theme === 'dark' ? 'text-white dark:hover:bg-gray-700' : 'text-black'} hover:bg-gray-100 p-2 rounded-md`}>
                          <FiBookOpen size={18} className="mr-2 inline" />
                          Stedu Courses
                        </Link>
                        <Link to="/stedu_hack" className={`block text-sm ${theme === 'dark' ? 'text-white dark:hover:bg-gray-700' : 'text-black'} hover:bg-gray-100 p-2 rounded-md`}>
                          <FiPlus size={18} className="mr-2 inline" />
                          Stedu Hack
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </div>
                <Link to="/community" className="flex items-center hover:text-blue-500 font-medium whitespace-nowrap">
                  <FiUsers size={18} className="mr-1 inline" />
                  Community
                </Link>
            </motion.div>

            <motion.div className="md:flex space-x-4 items-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}>
              {isAuthenticated ? (
                <div className="relative flex items-center space-x-4">
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
                      viewBox="0 0 44 44"
                      stroke="currentColor"
                      whileHover={{ rotate: 90 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={4}
                        d={showDropdown ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'}
                      />
                    </motion.svg>
                  </motion.button>
                  
              {/* User Profile Dropdown */}
                  {showDropdown && (
                    <motion.div className='py-5'
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}>
                      <div className={`absolute right-0 mt-4 py-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border border-gray-300 rounded-md shadow-lg z-10`}>
                        <Link
                          to="/profile"
                          className={`block px-4 py-4 text-sm ${theme === 'dark' ? 'text-white ' : 'text-black'} `}
                        >
                          View Profile
                        </Link>
                        <Link
                          to="/settings"
                          className={`block px-4 py-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                        >
                          Settings
                        </Link>
                        <button
                          onClick={handleLogout}
                          className={`block w-full text-left px-4 py-4 text-sm ${theme === 'dark' ? 'text-red-400' : 'text-red-600'} `}
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
                  className={`bg-blue-500 text-white font-medium py-4 px-4 rounded-md hover:bg-blue-600 ${theme === 'dark' ? 'hover:bg-blue-400' : ''}`}
                  whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
                  whileTap={{ scale: 0.95, transition: { duration: 0.4 } }}
                >
                  Sign up / Log in
                </motion.button>
              )}
            </motion.div>
            <motion.div className="md:hidden flex items-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}>
              <button
                type="button"
                onClick={handleToggleDropdown}
                className={`text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 ${theme === 'dark' ? 'text-white' : ''}`}
                aria-label="Toggle menu"
              >
                <svg className={`h-2 w-6 fill-current ${theme === 'dark' ? 'text-white' : ''}`} viewBox="0 0 44 44">
                  <path
                    className="heroicon-ui"
                    d="M4 6h16M4 14h16m-7 6h7"
                  />
                </svg>
              </button>
            </motion.div>
            <motion.div className="ml-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}>
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
                    <FiSun size={35} color='blue' className="glow-icon" />
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
