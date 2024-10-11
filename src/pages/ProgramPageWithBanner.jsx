import React from "react";
import ReactMarkdown from "react-markdown"; // Import react-markdown
import bannerImage from "../assets/hero/3.png";
import image1 from "../assets/program/2.png";
import image2 from "../assets/program/Untitled design.png";
import image3 from "../assets/program/10.png";
import image4 from "../assets/program/16.png";
import image5 from "../assets/program/17.png";
import eventImage1 from "../assets/program/5.png"; // Add event images
import eventImage2 from "../assets/program/35.png";
import eventImage3 from "../assets/program/32.png";
import eventImage4 from "../assets/program/33.png";

// Define the details for each program, including images and detailed descriptions
const programs = [
  {
    title: "Antariksh Gyaan Abhiyaan",
    description:
      "A comprehensive program to teach students about space, its mechanics, and the importance of space exploration.",
    detailedDescription: `**Antariksh Gyaan Abhiyaan** is conducted in various districts, bringing space science education to diverse areas:
      \n- **AGA Surajpur**: This program was held in the Surajpur district, focusing on rural students, introducing them to space technology through hands-on activities and interactive sessions.
      \n- **AGA Kanker**: The program in Kanker introduced advanced topics in astrophysics and satellite technology.
      \n- **AGA Chhattisgarh**: Focused on promoting space education throughout the state, engaging local communities with space science exhibitions, photos, and video-based learning.`,
    image: image1,
  },
  {
    title: "Student Satellite",
    description:
      "Building a student satellite project for schools & universities, with opportunities to launch it into space.",
    detailedDescription: `The **Student Satellite** project allows students to be directly involved in designing and building a satellite:
      \n- **Consulting**: Expert mentoring on how to design and manage satellite projects.
      \n- **Launch Options**: Satellites are launched using drones, balloons, POEM, and SSLV (Small Satellite Launch Vehicle).
      \n- **Mentorship**: Students are guided through **ISRO challenges** and competitions, gaining practical experience in satellite technology.`,
    image: image4,
  },
  {
    title: "Space Course and Trainings",
    description:
      "Learn from space experts from ISRO, IIT, and NASA through our STC sessions, bringing 20-40 years of experience.",
    detailedDescription: `This program includes comprehensive courses led by experts:
      \n- **Courses Offered**: Diploma and Elective Courses on **space science**, **rocket science**, and satellite technology.
      \n- **Hands-On Workshops**: Students can participate in **telescope making**, satellite kit building, and satellite tracking sessions.
      \n- **Ground Stations**: Students learn to track live signals from space and use data from satellites to work on real-world projects.
      \n- **Certification**: Participants receive an **ISRO’s Space Tutor Affiliated Certificate**.`,
    image: image3,
  },
  {
    title: "Antariksh Prayogshala",
    description:
      "IDYM helps schools and universities build Space Labs to promote hands-on experiments in satellite and rocket science.",
    detailedDescription: `**Antariksh Prayogshala** offers rural students opportunities to explore space science:
      \n- **Space Lab Setup**: Schools and universities receive assistance in setting up space labs to conduct hands-on experiments.
      \n- **Rural Outreach**: IDYM runs the program in rural areas like **Village Dumar** in **Ahiwara Durg, C.G.**, allowing schools to make free visits and engage with satellite tracking, rocket model creation, and more.
      \n- **Satellite Construction**: Students are encouraged to build their own small satellite as part of the lab experience.`,
    image: image2,
  },
];

const ProgramPageWithBanner = () => {
  return (
    <section className="bg-gray-100">
      {/* Banner Section */}
      <div className="w-full h-[600px] relative">
        <img
          src={bannerImage}
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title and Description below Banner */}
      <div className="text-center mt-8 px-4">
        <h1 className="text-gray-900 text-5xl md:text-7xl font-bold mb-4">
          Our Programs
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          Explore our diverse range of programs designed to educate and engage
          students in space science and technology. Our offerings prepare
          students for future careers in aerospace, satellite projects, and
          hands-on experiments.
        </p>
      </div>

      {/* Program Sections */}
      <div className="container mx-auto py-16">
        {programs.map((program, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            } items-center mb-16 bg-white shadow-lg rounded-lg overflow-hidden`}
          >
            {/* Program Image */}
            <div className="md:w-1/2 p-4">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-80 object-cover aspect-square" // Ensuring square image
              />
            </div>

            {/* Program Details */}
            <div
              className={`md:w-1/2 p-8 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
              }`}
            >
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                {program.title}
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                {program.description}
              </p>
              <div className="text-md text-gray-600">
                <ReactMarkdown>{program.detailedDescription}</ReactMarkdown>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramPageWithBanner;
