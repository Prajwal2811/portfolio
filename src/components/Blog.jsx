import React from "react";
import { motion } from "framer-motion";
import { FaPenFancy } from "react-icons/fa";

export default function Blog() {
  return (
    <motion.section
      id="blog"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="px-6 mt-20"
    >
      <div
        className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center 
                   min-h-[80vh] p-8 rounded-2xl shadow-xl
                   bg-gray-100 dark:bg-gray-900 
                   text-gray-900 dark:text-gray-100
                   transition-colors duration-500"
      >
        {/* Left: Text Content */}
        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-indigo-500 font-medium text-lg"
          >
            Beyond Code
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            I Also Write
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed"
          >
            Along with building projects, I love expressing ideas through{" "}
            <span className="font-semibold">blogs, writeups, and storytelling</span>.
            It’s my way of connecting creativity with technology and sharing lessons
            I’ve learned along the way.
          </motion.p>

          <motion.a
            href="https://insanewriteups.blogspot.com/" // 👉 replace with your blog link
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full 
                       bg-indigo-600 dark:bg-indigo-500 
                       text-white font-semibold shadow-md 
                       hover:bg-indigo-500 dark:hover:bg-indigo-400 
                       transition-all duration-300"
          >
            <FaPenFancy className="text-lg" />
            Visit My Blog
          </motion.a>
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1332&auto=format&fit=crop"
            alt="Writing Illustration"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
