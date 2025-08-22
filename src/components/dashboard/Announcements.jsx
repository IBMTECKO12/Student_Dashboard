import { motion } from "framer-motion";

const Announcements = () => {
  const announcements = [
    { title: "School Event", date: "2025-08-30", content: "Annual science fair on August 30." },
    { title: "Holiday Notice", date: "2025-09-01", content: "School closed for Labor Day." },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Announcements</h2>
      <div className="space-y-4">
        {announcements.map((announcement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-3 bg-gray-50 rounded-lg"
          >
            <p>
              <strong>{announcement.title}</strong> - {announcement.date}
            </p>
            <p>{announcement.content}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Announcements;