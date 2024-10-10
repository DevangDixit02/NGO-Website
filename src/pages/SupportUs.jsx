import React from "react";
import "./SupportUs.css"; // Ensure this CSS file is in place for custom styles

const SupportUs = () => {
  // You can set the Razorpay link from the .env file for security
  const donationLink = process.env.REACT_APP_DONATION_LINK;

  return (
    <div className="container mx-auto px-6 py-12 bg-gray-50 text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-8 animate__animated animate__fadeIn">
        Support Us
      </h1>
      <p className="text-xl text-gray-600 mb-6">
        Your support helps us reach more young minds and make space education
        accessible to all. Every contribution brings us closer to our mission.
      </p>

      <div className="bg-white shadow-md rounded-lg p-8 max-w-md mx-auto transition-transform transform hover:scale-105">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Crowdfunding
        </h2>
        <p className="text-gray-600 mb-6">
          Support our initiatives by contributing to our crowdfunding campaign.
          Every bit counts towards inspiring the next generation of space
          scientists!
        </p>

        <a href={donationLink} target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
            Donate Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default SupportUs;
