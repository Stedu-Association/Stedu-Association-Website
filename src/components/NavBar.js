import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { FiHome, FiCalendar, FiBookOpen, FiBriefcase, FiUsers, FiInfo, FiSettings, FiLogOut, FiUser, FiMoon, FiSun } from 'react-icons/fi';
import Logo from '../assets/images/logo.png';
import { ThemeContext } from './ThemeContext';
import Cloud from '../assets/images/cloud.png';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [showDropdown, setShowDropdown] = useState(false);
  const {theme,toggleTheme} = useContext(ThemeContext);

  const handleLogin = () => {
    loginWithRedirect();
  };
  
  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <nav className={`shadow-lg ${theme==='dark' ? 'bg-black text-white':'bg-white'}`}>
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">
              <img src={Logo} alt="Logo" className="w-10 h-10" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900 font-medium">
              <FiHome size={18} className="mr-1 inline" />
              Home
            </Link>
            <Link to="/summer-program" className="flex items-center text-gray-600 hover:text-gray-900 font-medium">
              <FiCalendar size={18} className="mr-1 inline" />
              Summer Program
            </Link>
            <Link to="/stem-courses" className="flex items-center text-gray-600 hover:text-gray-900 font-medium">
              <FiBookOpen size={18} className="mr-1 inline" />
              STEM Courses
            </Link>
            <Link to="/stem-workshops" className="flex items-center text-gray-600 hover:text-gray-900 font-medium">
              <FiBriefcase size={18} className="mr-1 inline" />
              STEM Workshops
            </Link>
            <Link to="/mentorship" className="flex items-center text-gray-600 hover:text-gray-900 font-medium">
              <FiUsers size={18} className="mr-1 inline" />
              Mentorship
            </Link>
            <Link to="/meet-the-team" className="flex items-center text-gray-600 hover:text-gray-900 font-medium">
              <FiUsers size={18} className="mr-1 inline" />
              Meet the Team
            </Link>
            <Link to="/about" className="flex items-center text-gray-600 hover:text-gray-900 font-medium">
              <FiInfo size={18} className="mr-1 inline" />
              About
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            {isAuthenticated ? (
              <div className="relative flex items-center space-x-2">
                <button
                  onClick={handleToggleDropdown}
                  className="flex items-center space-x-1 cursor-pointer focus:outline-none"
                >
                  <img src={user.picture} alt="Profile" className="w-8 h-8 rounded-full" />
                  <p className="text-gray-600 font-medium">{user.name}</p>
                  <svg
                    className={`w-4 h-4 text-gray-600 ${showDropdown ? 'transform rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={showDropdown ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'}
                    />
                  </svg>
                </button>
                {showDropdown && (
                  <div className='py-5'>
                  <div className="absolute right-0 mt-2 py-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      View Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={handleLogin}
                className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
              >
                Sign up / Log in
              </button>
            )}
          </div>
          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={handleToggleDropdown}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  className="heroicon-ui"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
           {/* Theme Toggle Button */}
        <div className="ml-4">
          <button
            type="button"
            onClick={toggleTheme}
            className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <FiMoon size={20} color='blue'/>
            ) : (
              <FiSun size={20} color='yellow'/>
            )}
          </button>
        </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default NavBar;
