import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";

const Landing = () => {
  const { user } = useAuth();
  const userName = user?.displayName || "Haleema Sultan";

  const courses = [
    { icon: "E", name: "English", code: "BCS-4A", progress: 70, color: "red" },
    { icon: "S", name: "Science", code: "BCS-4A", progress: 30, color: "red" },
    { icon: "S", name: "Social", code: "BCS-4A", progress: 50, color: "orange" },
    { icon: "P", name: "Projects", code: "BCS-4A", progress: 40, color: "red" },
    { icon: "A", name: "Arts", code: "BCS-4A", progress: 100, color: "green" },
  ];

  const recentResults = [
    { name: "English - Quiz 01", progress: 37, color: "red" },
    { name: "English - Quiz 02", progress: 87, color: "green" },
    { name: "Science - Quiz 01", progress: 50, color: "gray" },
    { name: "English - Quiz 01", progress: 37, color: "red" },
    { name: "English - Quiz 01", progress: 100, color: "blue" },
  ];

  const progressVariants = {
    hidden: { width: 0 },
    visible: (progress) => ({
      width: `${progress}%`,
      transition: { duration: 1, ease: "easeInOut" },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 sm:p-6 space-y-4 sm:space-y-6"
    >
      {/* Greeting Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-blue-100 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center"
      >
        <div className="text-center sm:text-left space-y-2 sm:space-y-4">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-900">Hello {userName.split(" ")[0]},</h2>
          <p className="text-sm sm:text-base text-blue-700">You have learned 80% of your course</p>
          <p className="text-sm sm:text-base text-blue-700">Keep it up and improve your grades to get scholarship</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-2 sm:mt-4 px-3 sm:px-4 py-2 sm:py-3 bg-blue-500 text-white rounded-lg"
          >
            View Result
          </motion.button>
        </div>
        <div className="relative mt-4 sm:mt-0 w-32 sm:w-48">
          <img
            src="/illustration.png"
            alt="Student at desk"
            className="w-full h-auto object-contain"
          />
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 sm:w-2 h-1 sm:h-2 bg-blue-500 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, x: Math.random() * 40 - 20, y: Math.random() * -20 }}
              transition={{ delay: i * 0.1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
            />
          ))}
        </div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        
        {/* Your Courses */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="col-span-1 sm:col-span-2 bg-white rounded-2xl p-4 sm:p-6 shadow-md"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center mb-2 sm:mb-4">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-900">Your Courses</h3>
            <input
              type="text"
              placeholder="Search Course"
              className="w-full sm:w-1/2 lg:w-1/3 p-2 sm:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 sm:mt-0"
            />
          </div>
          <div className="space-y-2 sm:space-y-4">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-between"
              >
                <div className="flex items-center space-x-2 sm:space-x-4 mb-2 sm:mb-0">
                  <div className={`w-8 sm:w-10 h-8 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-900 font-bold`}>
                    {course.icon}
                  </div>
                  <div>
                    <p className="font-bold text-sm sm:text-base">{course.name}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{course.code}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <div className="w-16 sm:w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-${course.color}-500`}
                      variants={progressVariants}
                      initial="hidden"
                      animate="visible"
                      custom={course.progress}
                    />
                  </div>
                  <p className={`font-bold text-${course.color}-500 text-sm sm:text-base`}>{course.progress}%</p>
                  <button className="text-blue-500 text-sm sm:text-base">View &rarr;</button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-between mt-2 sm:mt-4">
            <button className="text-blue-500 text-sm sm:text-base mb-2 sm:mb-0">View More</button>
            <button className="px-2 sm:px-4 py-1 sm:py-2 bg-blue-500 text-white rounded-lg text-sm sm:text-base">Enroll Course</button>
          </div>
        </motion.div>

        {/* Recent Results and Side Cards */}
        <div className="space-y-4 sm:space-y-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-white rounded-2xl p-4 sm:p-6 shadow-md"
          >
            <div className="flex justify-between items-center mb-2 sm:mb-4">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-900">Recent Results</h3>
              <button className="text-blue-500 text-sm sm:text-base">View More &rarr;</button>
            </div>
            <div className="space-y-2 sm:space-y-4">
              {recentResults.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="flex items-center justify-between"
                >
                  <p className="font-bold text-sm sm:text-base">{result.name}</p>
                  <div className="flex items-center space-x-1 sm:space-x-2 w-20 sm:w-32">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-${result.color}-500`}
                        variants={progressVariants}
                        initial="hidden"
                        animate="visible"
                        custom={result.progress}
                      />
                    </div>
                    <p className={`text-${result.color}-500 font-bold text-sm sm:text-base`}>{result.progress}%</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leave and Complaint Cards */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="bg-blue-100 rounded-2xl p-2 sm:p-4 flex flex-col sm:flex-row justify-between items-center"
          >
            <div className="flex items-center space-x-1 sm:space-x-2 mb-2 sm:mb-0">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-white rounded-lg flex items-center justify-center">📅</div>
              <p className="text-blue-900 text-sm sm:text-base">Want to take a leave?</p>
            </div>
            <button className="text-blue-900 text-sm sm:text-base">&rarr;</button>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="bg-blue-100 rounded-2xl p-2 sm:p-4 flex flex-col sm:flex-row justify-between items-center"
          >
            <div className="flex items-center space-x-1 sm:space-x-2 mb-2 sm:mb-0">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-white rounded-lg flex items-center justify-center">✍️</div>
              <p className="text-blue-900 text-sm sm:text-base">Want to complaint against someone?</p>
            </div>
            <button className="text-blue-900 text-sm sm:text-base">&rarr;</button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Landing;