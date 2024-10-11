import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown"; // Import react-markdown
import image1 from "../assets/program/2.png";
import image2 from "../assets/program/Untitled design.png";
import image3 from "../assets/program/10.png";
import image4 from "../assets/program/16.png";
import image5 from "../assets/program/17.png";
import eventImage1 from "../assets/program/5.png"; // Add event images
import eventImage2 from "../assets/program/35.png";
import eventImage3 from "../assets/program/32.png"
import eventImage4 from "../assets/program/33.png";
import prg from "../assets/program/39.png"
import another from "../assets/program/41.png";
import pr from "../assets/program/43.png";
import pr2 from "../assets/program/40.png";




const programDetails = {
  "antariksh-gyaan-abhiyaan": {
    title: "Antariksh Gyaan Abhiyaan",
    description:
      "A comprehensive program to teach students about space, its mechanics, and the importance of space exploration.",
    details: `**Antariksh Gyaan Abhiyaan** is conducted in various districts, bringing space science education to diverse areas:
      \n- **AGA Surajpur**: This program was held in the Surajpur district, focusing on rural students, introducing them to space technology through hands-on activities and interactive sessions.
      \n- **AGA Kanker**: The program in Kanker introduced advanced topics in astrophysics and satellite technology.
      \n- **AGA Chhattisgarh**: Focused on promoting space education throughout the state, engaging local communities with space science exhibitions, photos, and video-based learning.`,
    images: [image1, eventImage1, eventImage2], // Array of images
  },
  "antariksh-prayogshala": {
    title: "Antariksh Prayogshala",
    description:
      "IDYM assists schools and universities in building space labs (Antariksh Prayogshala) to foster hands-on engagement in space science, satellite technology, and rocket science.",
    details: `Antariksh Prayogshala is designed to help students gain practical experience in space science through a dedicated lab setup on their campus. This program enables students to perform experiments, simulate satellite launches, and understand satellite tracking. The Prayogshala setup includes the following modules:
      \n- **Hands-on experiments** in space science using modern technology.
      \n- **Live satellite tracking** and decoding.
      \n- **Building prototypes** such as satellite kits, rocket models, and astronaut models.
      \n- **Sky-gazing sessions**, where students learn how to use telescopes and track celestial objects.
      \n- Prototyping an active environment to inspire students in rural and urban areas. Schools interested in setting up their own space labs can take advantage of free consultations and training.`,
    images: [pr, pr2  ,another],
  },
  "space-course-and-trainings": {
    title: "Space Course and Trainings",
    description:
      "Expert-led space courses and training programs by professionals from ISRO, IIT, and NASA, aimed at enhancing knowledge in space science, satellite technology, and rocket engineering.",
    details: `Our space courses offer participants a unique opportunity to learn from some of the best experts in the industry. With 20-40 years of experience, professionals from ISRO, IIT, and NASA lead the training sessions. The courses include:
      \n- **Diploma and Elective courses** in space science.
      \n- **Satellite tracking**, rocket science, and astronaut mission training.
      \n- **Curriculum development** for universities and colleges interested in integrating space science into their academic offerings.
      \n- Special **summer camps** where students engage in activities like telescope making, satellite kit building, and live signal tracking from space through ground stations.
      \n- **Ground station setup** for automated satellite tracking and data utilization projects. Students also get the chance to track and analyze data from satellites in India and around the world.`,
    images: [image3, eventImage4, eventImage3],
  },
  "student-satellite": {
    title: "Student Satellite",
    description:
      "A hands-on project that allows students to design, build, and launch a satellite into space, with mentorship from experienced professionals.",
    details: `The Student Satellite project provides students with a unique opportunity to be directly involved in designing, building, and launching a satellite. This project is an excellent introduction to the aerospace industry and prepares students for future careers in satellite technology and engineering. Key features of the program include:
      \n- **Consulting services** for student satellite projects in schools and universities.
      \n- Multiple **launch methods**, including by drone, balloon, POEM (Payload Orbital Experiment Module), and SSLV (Small Satellite Launch Vehicle).
      \n- **Mentorship support** throughout the project lifecycle, from concept design to the satellite launch.
      \n- Participation in **ISRO’s various challenges and competitions**, where students can gain real-world experience and showcase their projects to space experts.`,
    images: [image4, image5, prg],
  },
};

const ProgramPage = () => {
  const { programId } = useParams();
  const program = programDetails[programId];
  const [mainImage, setMainImage] = useState(program.images[0]); // State to track the main image

  if (!program) {
    return <div className="text-center">Program not found!</div>;
  }

  return (
    <section className="bg-gray-100 py-12 flex">
      <div className="flex flex-col lg:flex-row container mx-auto">
        {/* Image Section */}
        <div className="lg:w-1/2 flex flex-col items-center">
          <img
            src={mainImage}
            alt={`${program.title} Main`}
            className="object-cover h-auto w-full max-h-[700px] rounded-lg shadow-lg mb-4"
          />

          <div className="grid grid-cols-3 gap-4">
            {program.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${program.title} Thumbnail ${index + 1}`}
                className={`object-cover h-24 w-full rounded-lg shadow-lg cursor-pointer ${
                  mainImage === image ? "border-4 border-indigo-500" : ""
                }`}
                onClick={() => setMainImage(image)} // Change the main image on click
              />
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 flex flex-col justify-center p-6">
          <h1 className="text-4xl font-bold mb-4">{program.title}</h1>
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Overview
          </h2>
          <p className="text-lg mb-4 text-gray-600">{program.description}</p>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Details</h3>
          <div className="text-gray-700">
            <ReactMarkdown>{program.details}</ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramPage;
