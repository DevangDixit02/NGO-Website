import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import supportImage from "../assets/donate.png"; // Import your image

const SupportCause = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleDonateClick = () => {
    navigate("/support-us"); // Navigate to the Support Us page
  };

  return (
    <section
      id="support-cause"
      className="relative bg-black py-20 text-center"
      style={{
        height: "600px",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${supportImage})`, // Set the background image
          opacity: 0.4, // Adjust the opacity here
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto h-full flex flex-col justify-center items-center relative z-10">
        <h2 className="text-4xl font-bold mb-4 animate__animated animate__fadeIn text-yellow-300">
          Support Our Cause
        </h2>
        <p className="mb-6 text-lg max-w-xl text-white">
          Your contribution can make a huge difference in someone's life. Join
          us in our mission to provide resources, education, and support to
          those in need.
        </p>
        <button
          onClick={handleDonateClick} // Add onClick handler to the button
          className="bg-yellow-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300"
        >
          Donate Now
        </button>
        <div className="mt-8">
          <p className="text-sm italic text-white">
            Every little bit counts. Your donation helps us to continue our
            vital work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SupportCause;
