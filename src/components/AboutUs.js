import React from "react";

const AboutUs = () => {
  return (
    <section id="about-us" className="py-20 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="md:w-1/2 relative right-4 mb-8 md:mb-0 animate__animated animate__fadeInLeft">
            <h3 className="text-4xl font-bold mb-4 text-blue-600 hover:text-blue-800 transition-colors duration-300">
              Who We Are
            </h3>
            <p className="text-lg mb-4 leading-relaxed">
              We are a dedicated team committed to empowering communities through education, health, and support services.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              Our mission is to create lasting change in the lives of those we serve. With over a decade of experience, we focus on delivering innovative solutions to tackle the challenges faced by marginalized groups.
            </p>
            <p className="text-lg leading-relaxed">
              Our core values of integrity, collaboration, and compassion guide us in our quest to make a difference.
            </p>
          </div>
          <div className="md:w-1/2 animate__animated animate__fadeInRight relative group">
            <img
              src="https://images.unsplash.com/photo-1511314797109-6ba9c4854fd0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Us"
              className="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center rounded-lg opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-xl font-bold text-white">Who We Are</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="md:w-1/2 animate__animated animate__fadeInLeft relative group">
            <img
              src="https://cdn.pixabay.com/photo/2023/04/20/12/22/globe-7939725_1280.jpg"
              alt="Our Mission"
              className="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center rounded-lg opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-xl font-bold text-white">Our Mission</h3>
            </div>
          </div>
          <div className="md:w-1/2 relative left-8 mb-8 md:mb-0 animate__animated animate__fadeInRight">
            <h3 className="text-4xl font-bold mb-4 text-green-600 hover:text-green-800 transition-colors duration-300">
              Our Mission
            </h3>
            <p className="text-lg mb-4 leading-relaxed">
              To empower individuals and communities by providing access to essential resources, promoting sustainable development, and fostering an inclusive environment.
            </p>
            <p className="text-lg leading-relaxed">
              We strive to ensure that everyone has the opportunity to lead a fulfilling life, participate actively in society, and achieve their full potential.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="md:w-1/2 relative right-4 mb-8 md:mb-0 animate__animated animate__fadeInLeft">
            <h3 className="text-4xl font-bold mb-4 text-purple-600 hover:text-purple-800 transition-colors duration-300">
              Our Vision
            </h3>
            <p className="text-lg leading-relaxed">
              We envision a world where every individual has the opportunity to thrive and contribute to society, creating a more equitable and sustainable future for all.
            </p>
            <p className="text-lg leading-relaxed">
              Our vision is driven by our belief in the power of community, education, and the transformative potential of every person.
            </p>
          </div>
          <div className="md:w-1/2 animate__animated animate__fadeInRight relative group">
            <img
              src="https://images.unsplash.com/photo-1511314797109-6ba9c4854fd0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our Vision"
              className="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center rounded-lg opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-xl font-bold text-white">Our Vision</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
