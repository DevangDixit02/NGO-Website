import React, { useState } from "react";
import "./JoinUs.css";

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    message: "",
  });

  const [faqs] = useState([
    {
      question: "What is the IDYM Foundation?",
      answer:
        "IDYM is a platform to promote space education among young minds globally.",
    },
    {
      question: "How can I join the IDYM Foundation?",
      answer: "You can join us by filling out the form on this page.",
    },
    {
      question: "Is there a fee to join?",
      answer: "No, joining IDYM is free of cost.",
    },
    {
      question: "Can I volunteer with IDYM?",
      answer: "Yes, we welcome volunteers to help us with our programs.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can reach out to our support team via the contact details on the left.",
    },
    {
      question: "What programs do you offer?",
      answer: "We offer various programs in space education and outreach.",
    },
    {
      question: "How can I give feedback?",
      answer: "You can provide feedback using the message field in the form.",
    },
  ]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="left-section w-full md:w-1/3 p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-2">
            Support Email:{" "}
            <a href="mailto:idymfoundation@gmail.com" className="text-blue-600">
              idymfoundation@gmail.com
            </a>
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2">General Inquiries</h3>
          <p className="text-gray-600 mb-2">
            For general inquiries, please contact us via our support email.
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Feedback</h3>
          <p className="text-gray-600 mb-2">
            We appreciate your feedback. Please share your thoughts with us.
          </p>
        </div>

        <div className="right-section w-full md:w-2/3 p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Help Desk</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
            />
            <button
              type="submit"
              className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="faq-section mt-12">
        <h2 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item bg-gray-100 p-4 rounded-lg shadow"
            >
              <h3 className="font-bold cursor-pointer">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
