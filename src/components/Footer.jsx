import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-300/10 dark:border-gray-700 mt-20 bg-gray-200/10 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-700 dark:text-gray-300 text-center md:text-left">
          © {new Date().getFullYear()} Prajwal Ingole. All rights reserved.
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Prajwal2811"
            aria-label="github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition transform hover:scale-110"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/prajwal-ingole-948b25180"
            aria-label="linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-500 transition transform hover:scale-110"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        <div className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition cursor-pointer">
          <a href="#top">Back to Top ↑</a>
        </div>
      </div>
    </footer>
  );
}
