import React from "react";
import Slider from "react-slick"; // Import Slider from react-slick
import image4 from "../assets/hero/1.png";
import image2 from "../assets/hero/2.png";
import image3 from "../assets/hero/3.png";
import image1 from "../assets/hero/4.png";
import image5 from "../assets/hero/5.png";
import image6 from "../assets/hero/6.png";
import image7 from "../assets/hero/7.png";

import "slick-carousel/slick/slick.css"; // Import slick styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme styles

const Hero = () => {
  const slides = [image1, image2, image3, image4, image5, image6, image7];
  const texts = [
    "Igniting Dreams, Empowering the Future",
    "Exploring the endless possibilities of space",
    "Inspiring the next generation to dream big",
    "Reaching for the stars with hands-on experience",
    "Connecting young minds with NASA and ISRO",
    "Building the future of space science today",
    "Transforming ideas into reality through innovation",
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
  };

  return (
    <section
      id="home"
      className="relative py-3 w-full h-[90vh] overflow-hidden"
    >
      <Slider {...settings}>
        {slides.map((image, index) => (
          <div key={index} className="h-full relative">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover"
            />
            {/* Overlay with semi-opacity */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white px-4 md:px-8">
                <h2 className="text-2xl md:text-4xl font-bold mb-2">
                  {texts[index]}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
