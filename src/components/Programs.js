import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import image1 from "../assets/program/2.png";
import image2 from "../assets/program/Untitled design.png";
import image3 from "../assets/program/10.png";
import image4 from "../assets/program/16.png";

const Programs = () => {
  const programs = [
    {
      title: "Antariksh Gyaan Abhiyaan",
      description: "Teaching about space and how space works",
      image: image1,
      path: "/programs/antariksh-gyaan-abhiyaan",
    },
    {
      title: "Antariksh Prayogshala",
      description:
        "IDYM helps schools and universities to build Space Lab (Antariksh Prayogshala) at their own campus to promote hands-on experiments and projects for deeper engagement in space, satellite, and rocket science.",
      image: image2,
      path: "/programs/antariksh-prayogshala",
    },
    {
      title: "Space Course and Trainings",
      description:
        "Space experts from ISRO, IIT, NASA will be conducting STC sessions. Their dynamic and vast experience in the domain of 20 - 40 years of experience will bring incredible learning for the participants.",
      image: image3,
      path: "/programs/space-course-and-trainings",
    },
    {
      title: "Student Satellite",
      description:
        "Building of student satellite project for schools & universities and getting it launched into space.",
      image: image4,
      path: "/programs/student-satellite",
    },
  ];

  return (
    <section id="programs" className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-12 text-gray-800">
          Our Programs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <Link to={program.path} key={index} className="no-underline">
              <div className="bg-gray-100 p-8 rounded-xl shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105 flex flex-col justify-between h-full">
                <img
                  src={program.image}
                  alt={program.title}
                  className="mx-auto mb-6 h-48 w-full object-cover rounded-lg" // Enlarge the image for better visibility
                />
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {program.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed overflow-hidden text-ellipsis">
                  {program.description.length > 100
                    ? `${program.description.substring(0, 100)}...`
                    : program.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
