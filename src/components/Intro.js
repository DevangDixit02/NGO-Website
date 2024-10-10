import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import isroLogo from "../assets/partner/isro.png"; // Make sure to have the ISRO logo in your assets

const Intro = () => {
  const navigate = useNavigate(); // Hook to navigate to another page

  const handleReadMore = () => {
    navigate("/about-us"); // Navigates to the About Us page
  };

  return (
    <section className="py-20 bg-white min-h-[500px]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Igniting Dreams of Young Minds Foundation
        </h2>
        <div className="flex items-center justify-center ">
          <img src={isroLogo} alt="ISRO Logo" className="w-24 h-auto mr-2" />{" "}
          {/* Adjust the size as needed */}
          <span className="text-xl font-bold text-gray-700 ">
            ISRO’s Registered Space Tutor
          </span>
        </div>
        <p className="mt-6 text-lg md:text-xl font-medium text-gray-600 leading-relaxed">
          IDYM is a pioneering NGO with a distinctive mission to inspire and
          empower children through space science, focusing especially on
          satellite technology. We provide young minds the opportunity to
          explore their potential by offering hands-on training guided by some
          of the most respected experts in the field.
        </p>
        <p className="mt-4 text-lg md:text-xl font-medium text-gray-600 leading-relaxed">
          Our workshops feature lectures and training delivered by renowned
          professionals from prestigious organizations such as NASA, ISRO, DRDO,
          BARC, HAL, NAL, and top IIT graduates. These workshops aim to provide
          an immersive, real-world experience for children, fostering a deep
          understanding of space science.
        </p>

        {/* ISRO Logo with Text */}

        {/* Read More Button */}
        <button
          onClick={handleReadMore}
          className="mt-8 px-6 py-3 bg-green-600 text-white font-bold text-lg rounded hover:bg-green-700 transition duration-300 shadow-lg"
        >
          Read More
        </button>
      </div>
    </section>
  );
};

export default Intro;
