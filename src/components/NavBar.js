import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Logo from '../assets/images/logo.png';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">
              <img src={Logo} alt="Logo" className="w-10 h-10" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900 font-medium">
              Home
            </Link>
            <Link to="/summer-program" className="flex items-center text-gray-600 hover:text-gray-900 font-medium">
              Summer Program
            </Link>
            <Link to="/stem-courses" className="flex items-center text-gray-600 hover:text-gray-900 font-medium">
              STEM Courses
            </Link>
            <Link to="/stem-workshops" className="flex items-center text-gray-600 hover:text-gray-900 font-medium">
              STEM Workshops
            </Link>
            <Link to="/mentorship" className="flex items-center text-gray-600 hover:text-gray-900 font-medium">
              Mentorship
            </Link>
            <Link to="/meet-the-team" className="flex items-center text-gray-600 hover:text-gray-900 font-medium">
              Meet the Team
            </Link>
            <Link to="/about" className="flex items-center text-gray-600 hover:text-gray-900 font-medium">
              About
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <img src={user.picture} alt="Profile" className="w-8 h-8 rounded-full" />
                <p className="text-gray-600 font-medium">{user.name}</p>
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
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
