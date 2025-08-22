import { useAuth } from "../../context/AuthContext";
import { motion } from "framer-motion";

const Profile = () => {
  const { user } = useAuth();
  const userName = user?.displayName || "Haleema Sultan";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-4 sm:p-6 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Profile</h2>
      <div className="space-y-2 sm:space-y-4">
        <p className="text-sm sm:text-base"><strong>Email:</strong> {user?.email || "N/A"}</p>
        <p className="text-sm sm:text-base"><strong>Name:</strong>{userName}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 sm:p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition w-full sm:w-auto"
        >
          Update Profile
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Profile;