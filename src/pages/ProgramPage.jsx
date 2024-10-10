import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown"; // Import react-markdown
import image1 from "../assets/program/image211.png";
import image2 from "../assets/program/Pratog.png";
import image3 from "../assets/program/image12.png";
import image4 from "../assets/program/mission.png";

// Define the details for each program, including the images
const programDetails = {
  "antariksh-gyaan-abhiyaan": {
    title: "Antariksh Gyaan Abhiyaan",
    description:
      "A comprehensive program to teach students about space, its mechanics, and the importance of space exploration.",
    details: `**Antariksh Gyaan Abhiyaan** is conducted in various districts, bringing space science education to diverse areas:
      \n- **AGA Surajpur**: This program was held in the Surajpur district, focusing on rural students, introducing them to space technology through hands-on activities and interactive sessions.
      \n- **AGA Kanker**: The program in Kanker introduced advanced topics in astrophysics and satellite technology.
      \n- **AGA Chhattisgarh**: Focused on promoting space education throughout the state, engaging local communities with space science exhibitions, photos, and video-based learning.`,
    image: image1,
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
    image: image2,
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
    image: image3,
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
    image: image4,
  },
};

const ProgramPage = () => {
  const { programId } = useParams();
  const program = programDetails[programId];

  if (!program) {
    return <div className="text-center">Program not found!</div>;
  }

  return (
    <section className="bg-gray-100 py-12 flex">
      {/* Banner Section */}
      <div className="flex flex-col lg:flex-row container mx-auto">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src={program.image}
            alt={program.title}
            className="object-cover h-auto w-full max-h-[700px] rounded-lg shadow-lg"
          />
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
