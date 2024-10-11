import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Footer = () => {
const navigate = useNavigate(); // Initialize useNavigate
const donationLink = process.env.REACT_APP_DONATION_LINK;

 

  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              Igniting Dreams of Young Minds, foundation is a platform to
              promote space and satellite education in young minds around the
              world. It is authorized by Indian Space Research Organization
              (ISRO) as “Space Tutor” organization, playing a vibrant role in
              ensuring the dissemination of the enriched knowledge in the space
              domain.
            </p>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a
                  href="https://www.youtube.com/watch?v=4e9QFp-z01k&ab_channel=IDYMINDIATV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline"
                >
                  Mission Documentary
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1xKcPSNkurKnFn_KPMVhsnSZkAbvfFqNP/view?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline"
                >
                  AGA Brochure
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1ucQaPU4WyPLLqiYfCDypr1qaGOXpEgWS/view?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline"
                >
                  AGA Mission Surajpur
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1h9v0DR2CFIIgjqi5HItodFhDykFJa6eV/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline"
                >
                  AGA Mission Chhattisgarh
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a
                  href="https://www.instagram.com/antarikshgyaanabhiyaan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li className="text-gray-400">
                Email:{" "}
                <a
                  href="mailto: idymfoundation@gmail.com"
                  className="text-green-400 hover:underline"
                >
                  idymfoundation@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                Phone:{" "}
                <a
                  href="tel:8879476341"
                  className="text-green-400 hover:underline"
                >
                  8879476341
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Support Button */}
        <div className="mt-8 text-center">
        <a href={donationLink} target="_blank" rel="noopener noreferrer">
          <button
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-500 transition"
          >
            Support Our Cause
          </button>
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} IDYM. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
