import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-200/10 dark:bg-gray-800/30 p-8 rounded-2xl transition-colors duration-500"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Experience</h2>

      <div className="mt-4 space-y-6 text-gray-700 dark:text-gray-300">
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Full Stack Web Developer - Pixel Values Technolabs
          </h3>
          <p className="text-gray-500 dark:text-gray-400">Jan 2023 – Present | Nagpur</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Developed and maintained dynamic <span className="text-indigo-500 dark:text-indigo-400 font-medium">React.js applications</span> with reusable components.</li>
            <li>Designed and integrated <span className="text-green-500 dark:text-green-400 font-medium">RESTful APIs</span>.</li>
            <li>Built responsive interfaces using <span className="text-blue-400 dark:text-blue-500 font-medium">Bootstrap 5</span> and <span className="text-pink-400 dark:text-pink-500 font-medium">Tailwind CSS</span>.</li>
            <li>Optimized application performance and database queries.</li>
            <li>Collaborated with cross-functional teams to deliver high-quality solutions.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            WordPress Developer - Pixel Values Technolabs
          </h3>
          <p className="text-gray-500 dark:text-gray-400">May 2022 – Dec 2022 | Nagpur</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Developed custom WordPress themes and templates.</li>
            <li>Integrated plugins and APIs to enhance functionality.</li>
            <li>Managed and optimized <span className="text-yellow-500 dark:text-yellow-400 font-medium">MySQL databases</span>.</li>
            <li>Performed troubleshooting, maintenance, and performance optimization.</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
