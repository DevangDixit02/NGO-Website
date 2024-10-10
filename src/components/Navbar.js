import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import logo from "../assets/logo.jpg";
import isroLogo from "../assets/partner/isro.png"; // Assuming this is the ISRO logo path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // To navigate programmatically

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateTo = (path) => {
    toggleMenu(); // Close the mobile menu on navigation
    navigate(path); // Navigate to the chosen path
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-6 px-6">
        {/* Logo Section with Navigation to Home */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="NGO Logo"
            className="h-12 cursor-pointer"
            onClick={() => navigate("/")} // Navigate to home page
          />
          <div className="relative">
            <img
              src={isroLogo}
              alt="ISRO Logo"
              className="h-12 cursor-pointer"
              onClick={() => navigate("/isro")} // Navigate to ISRO page
            />
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs rounded px-1 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              ISRO Logo
            </span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex md:space-x-10">
          <button
            onClick={() => navigateTo("/")}
            className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300 py-2 px-4 rounded"
          >
            Home
          </button>
          <button
            onClick={() => navigateTo("/program")}
            className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300 py-2 px-4 rounded"
          >
            Program
          </button>
          <button
            onClick={() => navigateTo("/about-us")}
            className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300 py-2 px-4 rounded"
          >
            About Us
          </button>
          <button
            onClick={() => navigateTo("/gallery")}
            className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300 py-2 px-4 rounded"
          >
            Gallery
          </button>
          <button
            onClick={() => navigateTo("/join-us")}
            className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300 py-2 px-4 rounded"
          >
            Join Us
          </button>
          <button
            onClick={() => navigateTo("/support-us")}
            className="bg-green-600 text-white hover:bg-green-700 transition-colors duration-300 py-2 px-4 rounded"
          >
            Support Us
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-2 py-4 px-6">
            <button
              onClick={() => navigateTo("/")}
              className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300 py-2 px-4 rounded"
            >
              Home
            </button>
            <button
              onClick={() => navigateTo("/program")}
              className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300 py-2 px-4 rounded"
            >
              Program
            </button>
            <button
              onClick={() => navigateTo("/about-us")}
              className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300 py-2 px-4 rounded"
            >
              About Us
            </button>
            <button
              onClick={() => navigateTo("/gallery")}
              className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300 py-2 px-4 rounded"
            >
              Gallery
            </button>
            <button
              onClick={() => navigateTo("/join-us")}
              className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300 py-2 px-4 rounded"
            >
              Join Us
            </button>
            <button
              onClick={() => navigateTo("/support-us")}
              className="bg-green-600 text-white hover:bg-green-700 transition-colors duration-300 py-2 px-4 rounded"
            >
              Support Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
