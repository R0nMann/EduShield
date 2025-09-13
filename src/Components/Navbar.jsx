import React, { useState } from 'react';
import { Menu, X, BookOpen, Zap, Phone, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
           
                
                  <img className='w-10' src="logo.png" alt="" />
                
             
              <span className="text-xl font-semibold text-gray-900">EduShield</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href=""
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Learning Modules
              </a>
              <a
                href=""
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200"
              >
                <Zap className="w-4 h-4 mr-2" />
                Virtual Drills
              </a>
              <a
                href=""
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200"
              >
                <Phone className="w-4 h-4 mr-2" />
                Emergency Contacts
              </a>
            </div>
          </div>

          {/* Desktop Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            
            <Link to="/dashboard"><button className="bg-black text-white px-6 py-2 rounded-md text-sm cursor-pointer font-medium hover:bg-gray-800 transition-colors duration-200">
              Dashboard
            </button></Link>
            <Link to="/"><button className="text-gray-600 hover:text-gray-900 border-2 rounded-md px-6 py-2 text-sm cursor-pointer font-medium transition-colors duration-200">
              Log Out
            </button></Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <a
              href=""
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 text-base font-medium rounded-md flex items-center"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Learning Modules
            </a>
            <a
              href=""
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 text-base font-medium rounded-md flex items-center"
            >
              <Zap className="w-4 h-4 mr-2" />
              Virtual Drills
            </a>
            <a
              href=""
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 text-base font-medium rounded-md flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Emergency Contacts
            </a>
            <a
              href=""
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 text-base font-medium rounded-md flex items-center"
            >
              <Users className="w-4 h-4 mr-2" />
              Community
            </a>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex flex-col space-y-2 px-3">
                <button className="text-gray-600 hover:text-gray-900 text-left px-3 py-2 text-base font-medium">
                  Login
                </button>
                <button className="bg-black text-white px-4 py-2 rounded-md text-base font-medium hover:bg-gray-800 transition-colors duration-200">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;