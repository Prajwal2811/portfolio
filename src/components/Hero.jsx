import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const roles = [
  "Full Stack Developer",
  "React Developer",
  "Laravel Developer",
  "Node.js Developer",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const fullText = roles[currentRole];

    const timeout = setTimeout(() => {
      if (typing) {
        // Typing characters
        setDisplayedText(fullText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === fullText.length) {
          setTyping(false); // start deleting after full text
        }
      } else {
        // Deleting characters
        setDisplayedText(fullText.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setTyping(true);
          setCurrentRole((prev) => (prev + 1) % roles.length); // next role
        }
      }
    }, typing ? 150 : 50); // slower typing, faster deleting

    return () => clearTimeout(timeout);
  }, [charIndex, typing, currentRole]);

  return (
    <motion.div
      className="grid md:grid-cols-2 gap-8 items-center min-h-screen px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="space-y-6">
        <motion.p className="text-indigo-500 font-medium text-lg">
          Hello, I'm
        </motion.p>
        <motion.h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Prajwal Ingole
        </motion.h1>

        <motion.h2 className="text-indigo-500 text-3xl md:text-4xl font-semibold min-h-[56px]">
          {displayedText}
          <span className="border-r-2 border-indigo-500 ml-1 animate-pulse"></span>
        </motion.h2>

        <motion.p className="text-gray-700 dark:text-gray-300 max-w-xl">
          I develop scalable, responsive web applications using React.js,
          Laravel, Node.js, and modern frontend frameworks with a focus on clean
          UI, performance, and animations.
        </motion.p>

        <motion.div className="flex gap-4 mt-6">
          <motion.a
            href="#projects"
            className="px-5 py-3 bg-indigo-600 dark:bg-indigo-500 rounded-full font-medium hover:bg-indigo-500 dark:hover:bg-indigo-400 transition text-white"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="px-5 py-3 border border-gray-400 dark:border-gray-600 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            Contact
          </motion.a>
        </motion.div>

        <motion.div className="flex items-center gap-4 mt-6 text-gray-700 dark:text-gray-300">
          <motion.a target="_blank" href="https://github.com/Prajwal2811"><FaGithub size={22} /></motion.a>
          <motion.a target="_blank" href="https://linkedin.com/in/prajwal-ingole-948b25180"><FaLinkedin size={22} /></motion.a>
          <motion.a target="_blank" href="https://www.instagram.com/its_me_half_writtensoul/"><FaInstagram size={22} /></motion.a>
        </motion.div>
      </div>

      <motion.div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Developer at work"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
}
