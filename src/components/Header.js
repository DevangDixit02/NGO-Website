import React, { useState } from "react";
import logo from "../assets/logo.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <img src={logo} alt="NGO Logo" className="h-12" />
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
        <nav className="hidden md:flex md:space-x-10">
          <a
            href="#home"
            className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300 py-2 px-4 rounded"
          >
            Home
          </a>
          <a
            href="#impact"
            className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300 py-2 px-4 rounded"
          >
            Impact
          </a>
          <a
            href="#programs"
            className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300 py-2 px-4 rounded"
          >
            Programs
          </a>
          <a
            href="#about-us"
            className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300 py-2 px-4 rounded"
          >
            About Us
          </a>
          <a
            href="#stories"
            className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300 py-2 px-4 rounded"
          >
            Stories
          </a>
          <a
            href="#contact"
            className="bg-green-600 text-white hover:bg-green-700 transition-colors duration-300 py-2 px-4 rounded"
          >
            Contact Us
          </a>
        </nav>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-2 py-4 px-6">
            <a
              href="#home"
              className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300 py-2 px-4 rounded"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#impact"
              className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300 py-2 px-4 rounded"
              onClick={toggleMenu}
            >
              Impact
            </a>
            <a
              href="#programs"
              className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300 py-2 px-4 rounded"
              onClick={toggleMenu}
            >
              Programs
            </a>
            <a
              href="#about-us"
              className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300 py-2 px-4 rounded"
              onClick={toggleMenu}
            >
              About Us
            </a>
            <a
              href="#stories"
              className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300 py-2 px-4 rounded"
              onClick={toggleMenu}
            >
              Stories
            </a>
            <a
              href="#contact"
              className="bg-green-600 text-white hover:bg-green-700 transition-colors duration-300 py-2 px-4 rounded"
              onClick={toggleMenu}
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
