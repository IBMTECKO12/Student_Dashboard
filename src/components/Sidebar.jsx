import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { FaHome, FaClock, FaBell, FaComment, FaBook, FaUserCircle, FaEnvelope, FaBars } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const userName = user?.displayName || "Haleema Sultan";
  const userRole = "Student";

  const navItems = [
    { path: "/dashboard/", label: "Dashboard", icon: <FaHome /> },
    { path: "/dashboard/attendance", label: "Time Schedule", icon: <FaClock /> },
    { path: "/dashboard/announcements", label: "Notifications", icon: <FaBell /> },
    { path: "/dashboard/assignments", label: "Messages", icon: <FaComment /> },
    { path: "/dashboard/academics", label: "Learning Plan", icon: <FaBook /> },
    { path: "/dashboard/profile", label: "Profile", icon: <FaUserCircle /> },
    { path: "/dashboard/contact", label: "Contact Us", icon: <FaEnvelope /> },
  ];

  const handleHomeClick = () => {
    navigate("/");
    if (isOpen) toggleSidebar();
  };

  return (
    <motion.div
      id="sidebar"
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: isOpen ? 0 : "-100%", opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 h-full w-64 bg-blue-800 text-white p-2 sm:p-4 flex flex-col justify-between z-50 ${
        isOpen ? "translate-x-0 opacity-100" : "translate-x-[-100%] opacity-0"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div>
        <div className="flex justify-between items-center mb-2 sm:mb-4">
          <h2 className="text-lg sm:text-xl font-bold flex items-center space-x-1 sm:space-x-2">
            <a href="/" className="flex items-center space-x-1 sm:space-x-2">
              <img src="/logo.png" alt="Logo" className="w-6 sm:w-8 h-6 sm:h-8" />
            </a>
            <span>Student Dashboard</span>
          </h2>
          <button
            className="p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={toggleSidebar}
            aria-label="Close sidebar"
          >
            <FaBars size={20} />
          </button>
        </div>
        <div className="flex items-center space-x-2 mb-2 sm:mb-4">
          <img
            src="/User.png"
            alt="User Avatar"
            className="w-8 sm:w-10 h-8 sm:h-10 rounded-full"
          />
          <div>
            <p className="text-sm sm:text-base font-bold">{userName}</p>
            <p className="text-xs sm:text-sm">{userRole}</p>
          </div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
        <nav className="space-y-1 sm:space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => isOpen && toggleSidebar()}
              className={({ isActive }) =>
                `flex items-center space-x-1 sm:space-x-2 p-1 sm:p-2 rounded-lg hover:bg-blue-700 transition ${
                  isActive ? "bg-blue-700" : ""
                }`
              }
              aria-current={({ isActive }) => (isActive ? "page" : undefined)}
            >
              <span className="text-sm sm:text-base">{item.icon}</span>
              <span className="text-sm sm:text-base">{item.label}</span>
            </NavLink>
          ))}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-1 sm:space-x-2 p-1 sm:p-2 rounded-lg hover:bg-blue-700 cursor-pointer mt-2 sm:mt-4"
            onClick={handleHomeClick}
            role="button"
            aria-label="Go to home page"
          >
            <FaHome className="text-white" size={14} />
            <span className="text-sm sm:text-base">Home</span>
          </motion.div>
        </nav>
      </div>
      <div className="mt-2 sm:mt-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-800 p-2 sm:p-4 rounded-lg shadow-md"
        >
          <p className="text-sm sm:text-base font-bold">Upgrade to PRO for more resources</p>
          <button className="w-full mt-1 sm:mt-2 p-1 sm:p-2 bg-blue-500 text-white rounded-lg text-sm sm:text-base">
            Upgrade
          </button>
        </motion.div>
        <button
          onClick={() => {
            logout();
            if (isOpen) toggleSidebar();
          }
          }
          className="w-full mt-2 sm:mt-4 p-1 sm:p-2 bg-red-500 rounded-lg hover:bg-red-600 transition text-sm sm:text-base"
        >
          Logout
        </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;