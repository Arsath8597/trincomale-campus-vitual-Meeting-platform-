import React from "react";
import FacultiesCard from "../components/facultiesCard";
import { motion } from "framer-motion";

const facultyData = [
  { title: "#Management", description: "Faculty of Management" },
  { title: "#Technology", description: "Faculty of Technology" },
  { title: "#Science", description: "Faculty of Science" },
  { title: "#Information Technology", description: "Faculty of IT" },
  { title: "#Engineering", description: "Faculty of Engineering" },
  { title: "#Humanities", description: "Faculty of Humanities" },
];

const Faculties = () => {
  return (
    <div
      id="Faculties"
      className="bg-custom-gradient1 py-10 flex flex-col items-center"
    >
      <h1 className="text-center py-10 text-4xl text-white font-semibold">
        Here are our Faculties
      </h1>

      <div className="bg-custom-gradient1 lg:grid lg:gap-7 lg:grid-cols-3">
        {facultyData.map((faculty, index) => (
          <motion.div
            key={faculty.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
          >
            <FacultiesCard
              title={faculty.title}
              description={faculty.description}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Faculties;
