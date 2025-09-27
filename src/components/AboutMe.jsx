import React from "react";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-200/10 dark:bg-gray-800/30 p-8 rounded-2xl transition-colors duration-500"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">About Me</h2>

      <p className="mt-4 text-gray-700 dark:text-gray-300">
        Hello! I am <span className="font-semibold text-gray-900 dark:text-white">Prajwal Ingole</span>, a 
        <span className="font-semibold text-gray-900 dark:text-white"> Full Stack Developer</span> with over 
        <span className="font-semibold text-gray-900 dark:text-white"> 3.5 years of professional experience </span> 
        specializing in <span className="text-indigo-500 dark:text-indigo-400 font-medium">React.js</span> and 
        <span className="text-green-500 dark:text-green-400 font-medium"> Laravel</span>. I have extensive experience 
        in developing <span className="font-medium text-gray-900 dark:text-white">scalable, high-performance, and responsive web applications</span> 
        that deliver seamless user experiences across devices.
      </p>

      <p className="mt-4 text-gray-700 dark:text-gray-300">
        My expertise includes <span className="font-medium text-gray-900 dark:text-white">component-driven architecture, state management, RESTful API integration,</span> 
        and designing <span className="font-medium text-gray-900 dark:text-white">intuitive, user-friendly interfaces</span> using <span className="text-blue-400 dark:text-blue-500 font-medium">Bootstrap 5 </span> 
        and <span className="text-pink-400 dark:text-pink-500 font-medium">Tailwind CSS</span>. I am adept at backend development with <span className="text-green-400 dark:text-green-500 font-medium">Laravel</span> and 
        <span className="text-yellow-400 dark:text-yellow-500 font-medium"> Node.js</span>, ensuring robust server-side solutions and smooth client-server interactions.
      </p>

      <p className="mt-4 text-gray-700 dark:text-gray-300">
        I am passionate about solving complex problems and delivering <span className="font-medium text-gray-900 dark:text-white">maintainable, high-quality software</span> 
        that meets both client and end-user needs. I collaborate effectively with cross-functional teams, continuously learn emerging technologies, 
        and aim to create modern, responsive, and visually appealing applications that delight users.
      </p>
    </motion.div>
  );
}
