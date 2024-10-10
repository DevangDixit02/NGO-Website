import React from "react";
import "./AboutPage.css";

// Import images from assets/aboutus
import teamMember1 from "../assets/aboutus/rat.png";
import teamMember2 from "../assets/aboutus/man.png";
import teamMember3 from "../assets/aboutus/rav.png";
import visionImage from "../assets/hero/1.png";
import journey from "../assets/hero/35.png";
import missionImage from "../assets/hero/3.png";
import futureAspirationsImage from "../assets/hero/5.png";

// Partner logos
import isroLogo from "../assets/partner/isro.png";
import armstrongLogo from "../assets/partner/armstrong-logo.png";
import maytreeLogo from "../assets/partner/may.jpg";
import chhattisgarhLogo from "../assets/partner/gov.png";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-6 py-12 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 animate__animated animate__fadeIn">
          About Us
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Igniting Dreams of Young Minds (IDYM) is dedicated to fostering
          curiosity and innovation in the field of space science.
        </p>
      </div>

      <section className="flex flex-col md:flex-row items-center mb-12">
        <img
          src={journey}
          alt="Inspiring Space Education"
          className="rounded-lg shadow-lg w-full h-108 md:w-1/2 mb-4 md:mb-0 transform transition duration-500 hover:scale-105"
        />
        <div className="md:w-1/2 md:ml-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Journey</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At IDYM, we believe in the power of education to transform lives.
            Our mission is to inspire young minds to explore the wonders of
            space and technology.
          </p>
        </div>
      </section>

      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <img
              src={teamMember1}
              alt="RATNESH MISHRA"
              className="rounded-full h-32 w-32 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              RATNESH MISHRA
            </h3>
            <p className="text-gray-600">President</p>
            <p className="text-gray-600">Space Scientist</p>
            <p className="text-gray-600">Aerospace Engineer IITB</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <img
              src={teamMember2}
              alt="Manvi Dhawan"
              className="rounded-full h-32 w-32 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              Manvi Dhawan
            </h3>
            <p className="text-gray-600">Director</p>
            <p className="text-gray-600">Space Scientist</p>
            <p className="text-gray-600">Aerospace Engineer IITB</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <img
              src={teamMember3}
              alt="Ravishankar Kumar"
              className="rounded-full h-32 w-32 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              Ravishankar Kumar
            </h3>
            <p className="text-gray-600">Founder</p>
            <p className="text-gray-600">Educationist</p>
            <p className="text-gray-600">Space Expert</p>
          </div>
        </div>
        <p className="mt-6 text-xl font-bold text-gray-800">
          Makers of India’s 1st student satellite “PRATHAM” launched via PSLV
          C-35
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl transform hover:-translate-y-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our vision is to create a world where curiosity about space is
            nurtured in every child. We aim to inspire the next generation of
            scientists and engineers who will lead humanity into the cosmos.
          </p>
          <img
            src={visionImage}
            alt="Vision Image"
            className="rounded-lg shadow-md mt-4"
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl transform hover:-translate-y-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our mission is to make space education accessible and engaging for
            every young mind, fostering a deep understanding of space science
            and technology.
          </p>
          <img
            src={missionImage}
            alt="Mission Image"
            className="rounded-lg shadow-md mt-4"
          />
        </div>
      </div>

      <section className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Supported By</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <img
              src={isroLogo}
              alt="ISRO’s Space Tutor"
              className="mx-auto mb-4 h-24 w-auto"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              ISRO’s Space Tutor
            </h3>
            <p className="text-gray-600 mb-0">
              Leading educational initiatives in space science.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <img
              src={armstrongLogo}
              alt="Armstrong"
              className="mx-auto mb-4 h-24 w-auto"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              Armstrong
            </h3>
            <p className="text-gray-600 mb-0">
              Promoting aerospace education globally.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <img
              src={maytreeLogo}
              alt="Maytree School"
              className="mx-auto mb-4 h-24 w-auto"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              Maytree School
            </h3>
            <p className="text-gray-600 mb-0">
              Fostering young minds in technology.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <img
              src={chhattisgarhLogo}
              alt="Chhattisgarh RSC"
              className="mx-auto mb-4 h-24 w-auto"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              Chhattisgarh RSC
            </h3>
            <p className="text-gray-600 mb-0">
              Regional Science Center promoting scientific exploration.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
