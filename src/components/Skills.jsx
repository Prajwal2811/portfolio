import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaPhp,
  FaJs,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaNpm,
} from "react-icons/fa";
import { SiLaravel, SiTailwindcss, SiMysql, SiPostman, SiComposer, SiJquery } from "react-icons/si";

export default function Skills() {
  const technicalSkills = {
    "Languages / Frameworks": [
      { name: "React.js", icon: <FaReact className="text-sky-500" /> },
      { name: "PHP (Laravel 8)", icon: <SiLaravel className="text-red-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Ajax", icon: <FaJs className="text-yellow-500" /> },
      { name: "jQuery", icon: <SiJquery className="text-blue-500" /> },
    ],
    "Frontend Development": [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
      { name: "Bootstrap 5", icon: <FaBootstrap className="text-purple-600" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "React.js", icon: <FaReact className="text-sky-500" /> },
    ],
    "Backend / Database": [
      { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
      { name: "Node.js (Express.js)", icon: <FaNodeJs className="text-green-600" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      { name: "RESTful API Development", icon: <FaNodeJs className="text-green-600" /> },
    ],
    "Tools": [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-white" /> },
      { name: "VS Code", icon: <FaReact className="text-blue-500" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "npm", icon: <FaNpm className="text-red-600" /> },
      { name: "Composer", icon: <SiComposer className="text-blue-500" /> },
    ],
    "Professional Skills": [
      { name: "Problem Solving", icon: <FaReact className="text-indigo-500" /> },
      { name: "Team Collaboration", icon: <FaReact className="text-indigo-500" /> },
      { name: "Attention to Detail", icon: <FaReact className="text-indigo-500" /> },
      { name: "Time Management", icon: <FaReact className="text-indigo-500" /> },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-200/10 dark:bg-gray-800/30 p-8 rounded-2xl transition-colors duration-500"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Skills</h2>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        Technologies, tools, and professional skills I use frequently.
      </p>

      <div className="mt-4 space-y-6">
        {Object.keys(technicalSkills).map((category) => (
          <div key={category}>
            <h3 className="text-gray-900 dark:text-gray-100 font-semibold">{category}</h3>
            <div className="mt-2 flex flex-wrap gap-3">
              {technicalSkills[category].map((skill) => (
                <motion.span
                  key={skill.name}
                  whileHover={{ scale: 1.06 }}
                  className="flex items-center gap-2 px-3 py-2 bg-gray-100/10 dark:bg-gray-700/30 rounded-full text-sm text-gray-800 dark:text-gray-200 transition-colors duration-300"
                >
                  <span className="text-lg">{skill.icon}</span>
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
