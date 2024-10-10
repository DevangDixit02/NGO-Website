import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Footer = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSupportClick = () => {
    navigate("/support-us"); // Navigate to the Support Us page
  };

  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are committed to making a difference in the lives of
              individuals and communities through our various initiatives.
            </p>
            <p className="text-gray-400">
              <a
                href="https://www.youtube.com/watch?v=4e9QFp-z01k"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                Watch our NGO Documentary
              </a>
            </p>
            <p className="text-gray-400">
              <a
                href="https://drive.google.com/file/d/1h9v0DR2CFIIgjqi5HItodFhDykFJa6eV/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                AGA Mission Report
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a
                  href="https://drive.google.com/file/d/1xKcPSNkurKnFn_KPMVhsnSZkAbvfFqNP/view?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline"
                >
                  Brochure
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1ucQaPU4WyPLLqiYfCDypr1qaGOXpEgWS/view?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline"
                >
                  Surajpur AGA Mission
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/antarikshgyaanabhiyaan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline"
                >
                  Follow us on Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={handleSupportClick}
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-500 transition"
          >
            Support Our Cause
          </button>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} IDYM. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
