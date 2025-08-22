import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserGraduate } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingIconVariants = {
    initial: { y: 0, scale: 1 },
    animate: {
      y: [0, -10, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-blue-800 to-blue-900 text-white overflow-hidden">
      {/* Left Side */}
      <motion.div
        className="flex-1 flex flex-col justify-center items-center p-8 lg:p-16 space-y-8 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Floating Icons */}
        <motion.div
          className="absolute top-10 left-10 text-blue-300"
          variants={floatingIconVariants}
          initial="initial"
          animate="animate"
        >
          <FaUserGraduate size={40} />
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-10 text-blue-300"
          variants={floatingIconVariants}
          initial="initial"
          animate="animate"
        >
          <FaUserGraduate size={40} />
        </motion.div>

        <motion.div variants={itemVariants}>
          <h1 className="text-5xl lg:text-6xl font-bold text-center">
            Welcome to Student Dashboard
          </h1>
        </motion.div>
        <motion.p
          variants={itemVariants}
          className="text-xl lg:text-2xl text-center text-blue-100 max-w-md"
        >
          Empower your academic journey with a single platform to track grades,
          attendance, and more.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex space-x-4 mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#93c5fd" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/login")}
            className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition"
          >
            Login
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#93c5fd" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/register")}
            className="px-6 py-3 bg-blue-300 text-blue-900 rounded-full font-semibold hover:bg-blue-400 transition"
          >
            Register
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="flex-1 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >

        {/* Animated Background */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: [0, 0.5, 0],
              transition: {
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 1,
              },
            }}
          />
        ))}

        {/* Illustration */}
        <motion.img
          src="illustration.png"
          alt="Dashboard Illustration"
          className="absolute w-3/4 max-w-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-80"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.9 }}
          transition={{ duration: 1, delay: 0.7 }}
        />
      </motion.div>
    </div>
  );
};

export default Home;