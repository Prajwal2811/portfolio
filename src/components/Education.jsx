import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-200/10 dark:bg-gray-800/30 p-8 rounded-2xl transition-colors duration-500"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Education</h2>
      <p className="mt-4 text-gray-700 dark:text-gray-300">
        Bachelor of Engineering (B.E.), Nagpur University, Graduated 2020
      </p>
    </motion.div>
  );
}
