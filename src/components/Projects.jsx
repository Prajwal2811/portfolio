import React from "react";
import { motion } from "framer-motion";

const projects = [
  
  {
    title: "B2B Lead Generation",
    description: "Lead generation platform with React.js frontend and Node.js backend, including CRM API integration and admin dashboard.",
    link: "https://buzzberry.store",
    tech: ["React.js", "Node.js", "REST API"],
  },
  {
    title: "QuickEats",
    description: "AI-powered Restaurant Web App with voice assistant, menu browsing, category filters, and cart functionality.",
    link: "https://quickeats-github-io-jdvt.vercel.app/",
    tech: ["React.js", "Tailwind CSS", "Voice Recognition API"],
  },
  {
    title: "RentUp",
    description: "Property Rental Platform with React.js, advanced search, filters, booking workflow, and responsive UI.",
    link: "https://rentup-five.vercel.app/",
    tech: ["React.js", "Bootstrap 5", "Tailwind CSS"],
  },
  {
    title: "Blog Website",
    description: "Responsive blogging platform with post creation, categorization, commenting, and smooth client-side navigation.",
    link: "https://blog-website-gamma-five.vercel.app/",
    tech: ["React.js", "Bootstrap", "CSS3"],
  },
  {
    title: "GoWash",
    description: "Laundry Service Platform with service selection, booking slots, order tracking, and user management.",
    link: "https://gowash-react-github-io-8ah2.vercel.app/",
    tech: ["React.js", "Tailwind CSS"],
  },
  {
    title: "MyShop",
    description: "eCommerce web app with React.js frontend and Node.js backend featuring product catalog, cart, and secure checkout.",
    link: "https://myshop-ecommerce-github-io.vercel.app/",
    tech: ["React.js", "Node.js", "Bootstrap 5"],
  }
];


export default function Projects() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Projects</h2>
        <p className="text-sm text-gray-700 dark:text-gray-300">Some highlights of my personal projects.</p>
      </div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
        }}
      >
        {projects.map((project, idx) => (
          <motion.a
            key={idx}
            href={project.link}
            target="_blank"
            className="block p-5 rounded-2xl bg-gray-200/10 dark:bg-gray-800/30 hover:scale-105 hover:shadow-lg transform transition duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{project.title}</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-gray-100/10 dark:bg-gray-700/20 text-xs text-gray-800 dark:text-gray-200 rounded-full transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
