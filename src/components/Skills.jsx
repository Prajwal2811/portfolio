import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const technicalSkills = {
    "Languages / Frameworks": ["React.js", "PHP (Laravel 8)", "JavaScript", "Node.js", "Ajax", "jQuery"],
    "Frontend Development": ["HTML5", "CSS3", "Bootstrap 5", "Tailwind CSS", "React.js"],
    "Backend / Database": ["Laravel", "Node.js (Express.js)", "MySQL", "RESTful API Development"],
    "Tools": ["Git", "GitHub", "VS Code", "Postman", "npm", "Composer"],
    "Professional Skills": ["Problem Solving", "Team Collaboration", "Attention to Detail", "Time Management"],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-200/10 dark:bg-gray-800/30 p-8 rounded-2xl transition-colors duration-500"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Skills</h2>
      <p className="mt-2 text-gray-700 dark:text-gray-300">Technologies, tools, and professional skills I use frequently.</p>

      <div className="mt-4 space-y-6">
        {Object.keys(technicalSkills).map((category) => (
          <div key={category}>
            <h3 className="text-gray-900 dark:text-gray-100 font-semibold">{category}</h3>
            <div className="mt-2 flex flex-wrap gap-3">
              {technicalSkills[category].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.06 }}
                  className="px-3 py-2 bg-gray-100/10 dark:bg-gray-700/30 rounded-full text-sm text-gray-800 dark:text-gray-200 transition-colors duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
