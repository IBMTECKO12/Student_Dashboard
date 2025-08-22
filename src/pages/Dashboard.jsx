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

const Dashboard = () => {
  return (
    <div className="flex lg:flex-row ">
      <Sidebar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-1 p-4 sm:p-6 lg:p-6"
      >
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