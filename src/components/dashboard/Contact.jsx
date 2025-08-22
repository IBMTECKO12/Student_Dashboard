import { useState } from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError("Please fill out all fields.");
      return;
    }
    setError("");
    setSuccess("Your message has been sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="flex flex-row min-h-screen bg-gradient-to-br from-blue-500 to-blue-800 text-white">

      {/* Left Side: Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex flex-col justify-center p-4 xs:p-6 sm:p-8 md:p-12 xl:p-16 space-y-6"
        role="region"
        aria-labelledby="contact-form-heading"
      >
        <h1 id="contact-form-heading" className="text-2xl sm:text-3xl font-bold">
          Get in Touch
        </h1>
        <p className="text-base sm:text-lg">
          We'd love to hear from you! Fill out the form below or reach out via social media.
        </p>
        {error && (
          <p className="text-red-300 bg-red-800 p-2 rounded-lg text-sm sm:text-base" role="alert">
            {error}
          </p>
        )}
        {success && (
          <p className="text-green-300 bg-green-800 p-2 rounded-lg text-sm sm:text-base" role="alert">
            {success}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4" aria-describedby="form-description">
          <div>
            <label htmlFor="name" className="block text-sm mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 bg-blue-900 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
              required
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full p-3 bg-blue-900 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
              required
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full p-3 bg-blue-900 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
              required
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows="5"
              className="w-full p-3 bg-blue-900 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
              required
              aria-required="true"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full p-3 bg-blue-300 text-blue-900 rounded-full font-bold hover:bg-blue-200 transition text-sm sm:text-base"
            aria-label="Submit contact form"
          >
            Send Message
          </motion.button>
        </form>
        <div className="flex justify-center space-x-4 pt-4">
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white rounded-full shadow-md"
            aria-label="Follow us on Twitter"
          >
            <FaTwitter size={20} className="text-blue-500" />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white rounded-full shadow-md"
            aria-label="Connect with us on LinkedIn"
          >
            <FaLinkedin size={20} className="text-blue-700" />
          </motion.a>
          <motion.a
            href="mailto:support@example.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white rounded-full shadow-md"
            aria-label="Email us"
          >
            <FaEnvelope size={20} className="text-blue-900" />
          </motion.a>
        </div>
      </motion.div>

      {/* Right Side: Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 flex items-center justify-center p-4 xs:p-6 sm:p-8 md:p-12 xl:p-16 bg-blue-900 bg-opacity-80"
        role="region"
        aria-label="Contact illustration"
      >
        <img
          src="/contact.png"
          alt="Contact Illustration"
          className="w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg xl:max-w-xl h-auto object-cover rounded-lg"
        />
      </motion.div>
    </div>
  );
};

export default Contact;