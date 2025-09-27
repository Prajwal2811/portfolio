import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="grid md:grid-cols-2 gap-8 items-start"
    >
      <motion.div
        className="bg-gray-200/10 dark:bg-gray-800/30 p-8 rounded-2xl transition-colors duration-500"
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Let's grab a chai and build something
        </h3>
        <p className="mt-3 text-gray-700 dark:text-gray-300">
          If you have an idea, a project, or just want to chat over a virtual
          chai ☕, drop me a message. I’ll get back to you within a few days!
        </p>
        <div className="mt-6 flex flex-col gap-3 text-gray-700 dark:text-gray-300">
          <a
            href="mailto:prajwalingole280@gmail.com"
            className="flex items-center gap-3 hover:text-indigo-500 transition"
          >
            <FaEnvelope /> <span>prajwalingole280@gmail.com</span>
          </a>
          <a
            href="https://linkedin.com/in/prajwal-ingole-948b25180"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-indigo-500 transition"
          >
            <FaLinkedin />{" "}
            <span>linkedin.com/in/prajwal-ingole-948b25180</span>
          </a>
        </div>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className="bg-gray-200/10 dark:bg-gray-800/30 p-6 rounded-2xl flex flex-col gap-4 transition-colors duration-500"
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <label className="text-sm text-gray-700 dark:text-gray-300">Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="p-3 rounded bg-gray-100/10 dark:bg-gray-700/30 border border-gray-300/20 dark:border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
          required
        />

        <label className="text-sm text-gray-700 dark:text-gray-300">Email</label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          className="p-3 rounded bg-gray-100/10 dark:bg-gray-700/30 border border-gray-300/20 dark:border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
          required
        />

        <label className="text-sm text-gray-700 dark:text-gray-300">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Type your message here… maybe we can chat over chai ☕"
          className="p-3 rounded bg-gray-100/10 dark:bg-gray-700/30 border border-gray-300/20 dark:border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition h-28 resize-none"
          required
        />

        <div className="flex items-center gap-3 mt-2">
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-full hover:bg-indigo-500 dark:hover:bg-indigo-400 active:scale-95 transition"
          >
            Send
          </button>
          {sent && (
            <motion.span
              className="text-sm text-green-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Message sent! ☕
            </motion.span>
          )}
        </div>
      </motion.form>
    </motion.div>
  );
}
