import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact Me' }
];

export default function Navbar({ toggleTheme, currentTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="py-2 px-4 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-sm">
          <a href="#home" className="font-semibold text-lg text-gray-900 dark:text-gray-100">
            Prajwal Ingole
          </a>
        </div>

        <div className="hidden md:flex gap-6 items-center bg-white/10 dark:bg-black/20 py-2 px-4 rounded-full backdrop-blur-sm">
          {navLinks.map(l => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-block px-4 py-2 rounded-full bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-500 dark:hover:bg-indigo-400 transition text-white"
          >
            Hire me
          </a>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition text-gray-800 dark:text-gray-200"
          >
            {currentTheme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition text-gray-800 dark:text-gray-200"
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mt-2 p-4 rounded-lg bg-white/10 dark:bg-black/20 backdrop-blur-sm md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map(l => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
