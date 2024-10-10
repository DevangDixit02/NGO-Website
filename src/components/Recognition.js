import React from "react";
import heroImage from "../assets/hero/image44.png"; // Update with your actual image path

const achievements = [
  "ISRO space tutor",
  "Chhattisgarh Approval",
  "Certificate Anudaan",
  "MoU with SCERT",
  "CSR certificate, 10A, 80G certified",
];

const Recognition = () => {
  return (
    <section id="recognition" className="bg-gray-100 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section: Image */}
        <div className="md:w-1/2 p-4">
          <img
            src={heroImage}
            alt="Recognition"
            className="w-full h-64 object-cover object-top rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105" // Added hover effect
          />
        </div>

        {/* Right Section: Achievements */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Achievements
          </h2>
          <h3 className="text-2xl font-semibold text-gray-600 mb-6">
            Recognition and Certifications
          </h3>
          <ul className="list-disc pl-5">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-lg mb-2 text-gray-700">
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Recognition;
