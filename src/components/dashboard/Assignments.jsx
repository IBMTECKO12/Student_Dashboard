import { motion } from "framer-motion";

const Assignments = () => {
  const assignments = [
    { title: "Math Homework", dueDate: "2025-08-25", status: "Pending" },
    { title: "Physics Lab Report", dueDate: "2025-08-20", status: "Submitted" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Assignments</h2>
      <div className="space-y-4">
        {assignments.map((assignment, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-3 bg-gray-50 rounded-lg"
          >
            <p>
              <strong>Title:</strong> {assignment.title}
            </p>
            <p>
              <strong>Due Date:</strong> {assignment.dueDate}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span
                className={
                  assignment.status === "Pending" ? "text-red-500" : "text-green-500"
                }
              >
                {assignment.status}
              </span>
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Assignments;