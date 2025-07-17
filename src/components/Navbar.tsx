import React, { useState, useEffect } from 'react';
import { Menu, X, Sun } from 'lucide-react';
import { Link } from './Link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <Sun className="mr-2 text-yellow-500" size={24} />
            <span className={scrolled ? 'text-primary' : 'text-white'}>Agri<span className="text-green-600">Malawi</span></span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`font-medium hover:text-green-500 transition ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/solution" 
            className={`font-medium hover:text-green-500 transition ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            Solution
          </Link>
          <Link 
            to="/about" 
            className={`font-medium hover:text-green-500 transition ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            About Us
          </Link>
          <Link 
            to="/how-it-works" 
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
          >
            How It Works?
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={scrolled ? 'text-gray-800' : 'text-white'} size={24} />
          ) : (
            <Menu className={scrolled ? 'text-gray-800' : 'text-white'} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link 
              to="/" 
              className="block py-2 font-medium text-gray-800 hover:text-green-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/solution" 
              className="block py-2 font-medium text-gray-800 hover:text-green-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Solution
            </Link>
            <Link 
              to="/about" 
              className="block py-2 font-medium text-gray-800 hover:text-green-500 transition"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/how-it-works" 
              className="block py-2 font-medium text-green-600 hover:text-green-700 transition"
              onClick={() => setIsOpen(false)}
            >
              How It Works?
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;