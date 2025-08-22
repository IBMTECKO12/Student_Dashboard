import { motion } from "framer-motion";

const Attendance = () => {
  const attendanceData = [
    { date: "2025-08-01", status: "Present" },
    { date: "2025-08-02", status: "Absent" },
    { date: "2025-08-03", status: "Present" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Attendance</h2>
      <div className="space-y-4">
        {attendanceData.map((record, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-3 rounded-lg ${
              record.status === "Present" ? "bg-green-100" : "bg-red-100"
            }`}
          >
            <p>
              <strong>Date:</strong> {record.date} | <strong>Status:</strong>{" "}
              {record.status}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Attendance;