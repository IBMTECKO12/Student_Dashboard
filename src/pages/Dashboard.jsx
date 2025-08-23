import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import AcademicRecords from "../components/dashboard/AcademicRecords";
import Attendance from "../components/dashboard/Attendance";
import Assignments from "../components/dashboard/Assignments";
import Announcements from "../components/dashboard/Announcements";
import Profile from "../components/dashboard/Profile";
import Landing from "../components/dashboard/Landing";
import Contact from "../components/dashboard/Contact";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex-1 w-full p-4 sm:p-6 lg:p-8 overflow-x-auto"
      >
        <button
          className="p-2 text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={toggleSidebar}
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          aria-expanded={isSidebarOpen}
          aria-controls="sidebar"
        >
          <FaBars size={24} />
        </button>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/academics" element={<AcademicRecords />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </div>
  );
};

export default Dashboard;