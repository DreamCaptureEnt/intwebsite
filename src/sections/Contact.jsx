import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_w3a2xs8";
    const templateId = "template_au4ikw6";
    const userId = "BKKsHAKg5igQOOzwA";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Email failed to send:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <section id="contact" className="w-full min-h-screen flex items-center justify-center text-white">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row py-10">
        {/* Left Section - Contact Information */}
        <div className="lg:w-1/2 flex flex-col justify-center px-4 lg:px-16">
          <div className="max-w-md">
            <div className="w-12 h-1 bg-blue-500 mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <div className="w-12 h-1 bg-blue-500 mb-6"></div>

            <div className="flex flex-col md:flex-row gap-16">
              <div>
                <h3 className="uppercase text-sm tracking-wider mb-4">
                  Reach us through
                </h3>
                <div className="w-8 h-1 bg-gray-700 mb-6"></div>
                <div className="flex items-start mb-4">
                  <a href="tel:+919884691234" className="text-blue-400 hover:underline">
                    +91 9884691234
                  </a>
                </div>
                <div className="flex items-start">
                  <a href="mailto:ramanigold@gmail.com" className="text-blue-400 hover:underline">
                    ramanigold@gmail.com
                  </a>
                </div>
              </div>

              <div>
                <h3 className="uppercase text-sm tracking-wider mb-4">
                  Social Networks
                </h3>
                <div className="w-8 h-1 bg-gray-700 mb-6"></div>
                <div className="flex items-center mb-3">
                  <div className="text-yellow-500 mr-3">•</div>
                  <a 
                    href="https://www.youtube.com/@INTMedia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    YouTube
                  </a>
                </div>
                <div className="flex items-center mb-3">
                  <div className="text-yellow-500 mr-3">•</div>
                  <p>Instagram</p>
                </div>
                <div className="flex items-center">
                  <div className="text-yellow-500 mr-3">•</div>
                  <p>Whatsapp</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="lg:w-1/2 p-8 lg:p-16 bg-opacity-70 flex flex-col justify-center">
        <div className="max-w-md">
          <h2 className="text-2xl font-bold mb-6">Send Us A Message</h2>
            <div className="w-12 h-1 bg-blue-500 mb-8"></div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="someone@example.com"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="5"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-black font-medium p-3 rounded transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
