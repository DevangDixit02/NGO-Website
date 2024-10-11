import React from "react";
import "./SupportUs.css"; // Ensure this CSS file is in place for custom styles
import impactImage from "../assets/impact.jpeg"; // Importing the image from the assets folder

const SupportUs = () => {
  const donationLink = process.env.REACT_APP_DONATION_LINK;

  return (
    <div className="container mx-auto px-6 py-12 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-8 animate__animated animate__fadeIn">
          Support Us
        </h1>

        {/* Moto Section */}
        <p className="text-3xl font-semibold text-gray-700 italic mb-6">
          Gift Young Minds "A Space Dream"
        </p>

        <p className="text-xl text-gray-600 mb-6">
          Your support helps us reach more young minds and make space education
          accessible to all. Every contribution brings us closer to our mission.
        </p>
      </div>

      {/* Crowdfunding Section */}
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-4xl mx-auto mb-12 transition-transform transform hover:scale-105">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Crowdfunding Request
        </h2>
        <p className="text-gray-700 mb-6">
          A crowdfunding request of <strong>85 Lakhs INR</strong> to expand the
          space mission to other states of India like MP, MH, Bihar, Punjab,
          Orissa, and Jharkhand, helping students to make their dreams a
          reality, becoming future scientists and astronauts.
        </p>
        <p className="text-gray-700 mb-6">
          Similar to the impact made in Chhattisgarh by{" "}
          <strong>Antariksh Gyaan Abhiyaan</strong>, this mission aims to ignite
          curiosity and advance scientific knowledge through space, satellites,
          rockets, drones, astronomy, and more.
        </p>
        <a href={donationLink} target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300">
            Donate Now
          </button>
        </a>
      </div>

      {/* Impact Section */}
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-4xl mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        {/* Image */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-8">
          <img
            src={impactImage}
            alt="Impact in Chhattisgarh"
            className="object-cover w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Impact Text */}
        <div className="w-full lg:w-1/2 text-left">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            1 State Chhattisgarh
          </h3>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>36 Days:</strong> Dedicated time to promote space
              education.
            </p>
            <p>
              <strong>3400 km:</strong> Distance covered across Chhattisgarh.
            </p>
            <p>
              <strong>30 Districts:</strong> Reached to educate students.
            </p>
            <p>
              <strong>104 Sessions:</strong> Interactive and educational
              sessions conducted.
            </p>
            <p>
              <strong>20,000+ Students:</strong> Impacted across various
              regions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportUs;
