import React from "react";
import logo1 from "../assets/partner/gov.png";
import logo2 from "../assets/partner/may.jpg";
import logo3 from "../assets/partner/armstrong-logo.png";
import logo4 from "../assets/partner/isro.png";

const logoData = [
  { src: logo4, name: "ISRO" },
  { src: logo1, name: "Government" },
  { src: logo2, name: "Maytree School" },
  { src: logo3, name: "Armstrong" },
];

const Partners = () => {
  return (
    <section id="partners" className="bg-white py-32">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Our Partners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {logoData.map((logo, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={logo.src}
                alt={`Partner Logo ${index + 1}`}
                className="w-full h-24 object-contain mb-4 transition-transform transform hover:scale-110" // Scale on hover
              />
              <p className="text-lg font-semibold text-gray-800">{logo.name}</p>{" "}
              {/* Partner name */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
