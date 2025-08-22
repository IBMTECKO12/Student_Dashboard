import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub } from "react-icons/fa";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const { register, googleLogin, facebookLogin, githubLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreeTerms) {
      setError("You must agree to the Terms & Conditions");
      return;
    }
    try {
      const userCredential = await register(email, password);
      await updateProfile(userCredential.user, { displayName: name });
      navigate("/dashboard");
    } catch (err) {
      setError("Failed to create an account");
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await googleLogin();
      navigate("/dashboard");
    } catch (err) {
      setError("Google sign-up failed");
    }
  };

  const handleFacebookRegister = async () => {
    try {
      await facebookLogin();
      navigate("/dashboard");
    } catch (err) {
      setError("Facebook sign-up failed");
    }
  };

  const handleGitHubRegister = async () => {
    try {
      await githubLogin();
      navigate("/dashboard");
    } catch (err) {
      setError("GitHub sign-up failed");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">

      {/* Left Side: Promotional */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex flex-col justify-center items-center p-4 sm:p-6 lg:p-16 bg-gradient-to-br from-blue-800 to-blue-900 text-white space-y-4 sm:space-y-6 lg:space-y-8"
      >
        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12" />
          Student Dashboard
        </div>
        <a href="/" className="flex items-center space-x-2">
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            src="/Dashboard-preview.png"
            alt="Dashboard Preview"
            className="w-1/2 sm:w-2/3 lg:w-3/4 max-w-md rounded-xl shadow-2xl"
          />
        </a>
        <div className="text-center space-y-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Easy to Use Dashboard</h2>
          <p className="text-sm sm:text-base lg:text-lg opacity-80">Track your academic records, attendance, and assignments in one place.</p>
        </div>
      </motion.div>

      {/* Right Side: Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 flex flex-col justify-center p-4 sm:p-6 lg:p-16 bg-white space-y-4 sm:space-y-6"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900">Create Your Account</h2>
        {error && <p className="text-red-500 bg-red-100 p-2 rounded-lg">{error}</p>}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleGoogleRegister}
          className="w-full p-2 sm:p-3 bg-gray-100 text-gray-800 rounded-lg flex items-center justify-center space-x-2 border border-gray-300 hover:bg-gray-200 transition"
        >
          <FcGoogle size={20} sm:size={24} />
          <span className="text-sm sm:text-base">Sign up with Google</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleFacebookRegister}
          className="w-full p-2 sm:p-3 bg-gray-100 text-gray-800 rounded-lg flex items-center justify-center space-x-2 border border-gray-300 hover:bg-gray-200 transition"
        >
          <FaFacebookF size={20} sm:size={24} className="text-blue-600" />
          <span className="text-sm sm:text-base">Sign up with Facebook</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleGitHubRegister}
          className="w-full p-2 sm:p-3 bg-gray-100 text-gray-800 rounded-lg flex items-center justify-center space-x-2 border border-gray-300 hover:bg-gray-200 transition"
        >
          <FaGithub size={20} sm:size={24} className="text-gray-800" />
          <span className="text-sm sm:text-base">Sign up with GitHub</span>
        </motion.button>
        <div className="text-center text-gray-500 text-sm sm:text-base">OR</div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm sm:text-base mb-1 text-gray-700">Your Name</label>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 sm:p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              required
            />
          </div>
          <div>
            <label className="block text-sm sm:text-base mb-1 text-gray-700">Your Email</label>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 sm:p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              required
            />
          </div>
          <div>
            <label className="block text-sm sm:text-base mb-1 text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 sm:p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              required
            />
            <p className="text-xs sm:text-sm text-gray-500 mt-1">Must be 8 characters at least</p>
          </div>
          <label className="flex items-center space-x-2 text-sm sm:text-base text-gray-700">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="form-checkbox text-blue-500"
            />
            <span>I agree to the Terms & Conditions</span>
          </label>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full p-2 sm:p-3 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition"
          >
            Register
          </motion.button>
        </form>
        <p className="text-center text-sm sm:text-base text-gray-700">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Sign In
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;