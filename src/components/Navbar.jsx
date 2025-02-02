import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 right-4 z-50 p-3 bg-primary shadow-lg rounded-full hover:bg-primary-dark transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <FiX className="text-white w-6 h-6" />
        ) : (
          <FiMenu className="text-white w-6 h-6" />
        )}
      </button>

      {/* Navigation Container */}
      <nav className={`fixed top-0 left-0 h-full w-64 bg-primary text-white transform transition-transform duration-300 lg:translate-x-0 z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-6 h-full flex flex-col">
          {/* Logo */}
          <h1 className="text-2xl font-bold mb-8 border-b border-white/20 pb-4">
            <span className="text-accent">Meals</span> App
          </h1>

          {/* Navigation Links */}
          <div className="flex-1 space-y-4">
            <Link 
              to="/" 
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <FiHome className="text-xl text-accent" />
              <span className="text-lg">Home</span>
            </Link>
          </div>

          {/* Close Button for Mobile */}
          <div className="lg:hidden border-t border-white/20 pt-4">
            <button
              className="w-full text-center p-2 hover:bg-white/10 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Close Menu
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;