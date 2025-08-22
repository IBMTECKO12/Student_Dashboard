import { motion } from "framer-motion";

const AcademicRecords = () => {
  const records = [
    { term: "Fall 2024", subject: "Mathematics", grade: "A" },
    { term: "Fall 2024", subject: "Physics", grade: "B+" },
    { term: "Spring 2024", subject: "Chemistry", grade: "A-" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Academic Records</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3">Term</th>
              <th className="p-3">Subject</th>
              <th className="p-3">Grade</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b"
              >
                <td className="p-3">{record.term}</td>
                <td className="p-3">{record.subject}</td>
                <td className="p-3">{record.grade}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default AcademicRecords;