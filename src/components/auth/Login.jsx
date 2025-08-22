import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, googleLogin, facebookLogin, githubLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      navigate("/dashboard");
    } catch (err) {
      setError("Google sign-in failed");
    }
  };

  const handleFacebookLogin = async () => {
  try {
    const result = await facebookLogin();
    console.log('Facebook user:', result.user);
  } catch (error) {
    console.error('Facebook login error:', error);
  }
};

  const handleGitHubLogin = async () => {
  try {
    const result = await githubLogin();
    console.log('GitHub user:', result.user);
  } catch (error) {
    console.error('GitHub login error:', error);
  }
};

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-blue-500 to-blue-800 text-white">
      {/* Left Side: Form */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex flex-col justify-center p-8 lg:p-16 space-y-8"
      >
        <div className="text-3xl font-bold">Welcome back</div>
        <p className="text-lg">Please Enter Your Account details</p>
        {error && <p className="text-red-300 bg-red-800 p-2 rounded-lg">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="Johndoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-blue-900 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-blue-900 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>
          <div className="flex justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox text-blue-500" />
              <span>Keep me logged in</span>
            </label>
            <a href="/register" className="hover:underline">
            Sign up
          </a>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full p-3 bg-blue-300 text-blue-900 rounded-full font-bold hover:bg-blue-200 transition"
          >
            Sign In
          </motion.button>
        </form>
        <div className="flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleGoogleLogin}
            className="p-2 bg-white rounded-full shadow-md"
          >
            <FcGoogle size={24} />
          </motion.button>

          {/* Placeholder for GitHub and Facebook - add providers if needed */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleGitHubLogin}
            className="p-2 bg-white rounded-full shadow-md"
          >
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="w-6 h-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleFacebookLogin}
            className="p-2 bg-white rounded-full shadow-md"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-6 h-6" />
          </motion.button>
        </div>
      </motion.div>

      {/* Right Side: Testimonial and CTA */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 flex flex-col justify-center p-8 lg:p-16 bg-blue-900 bg-opacity-80 space-y-12"
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">What's our Students Said.</h2>
          <blockquote className="text-lg italic">
            "Tracking your academic records and assignments is now easier than ever. Just log in, view your grades, and stay on top of everything in one place."
          </blockquote>
          <p className="font-bold">Alex Rivera</p>
          <p>Computer Science Student at Stanford University</p>
        </div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white text-blue-900 p-6 rounded-2xl shadow-lg space-y-2"
        >
          <h3 className="text-xl font-bold">Get your right education and succeed in your studies now</h3>
          <p>Be among the first students to experience the easiest way to manage your academic life.</p>
          <div className="flex space-x-2">

            {/* Placeholder avatars */}
            <img src="/Avatar1.png" alt="Avatar1" className="w-8 h-8 rounded-full" />
            <img src="/Avatar2.png" alt="Avatar2" className="w-8 h-8 rounded-full" />
            <img src="/Avatar3.png" alt="Avatar3" className="w-8 h-8 rounded-full" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;