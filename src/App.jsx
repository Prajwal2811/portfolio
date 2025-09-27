import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('dark');

  // Persist theme in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen font-sans scroll-smooth overflow-x-hidden transition-colors duration-500 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <section id="home" className="pt-8"><Hero /></section>
        <section id="about" className="mt-20"><AboutMe /></section>
        <section id="education" className="mt-20"><Education /></section>
        <section id="experience" className="mt-20"><Experience /></section>
        <section id="skills" className="mt-20"><Skills /></section>
        <section id="projects" className="mt-20"><Projects /></section>
        {/* New Blog Section */}
        <section id="blog" className="mt-20"><Blog /></section>
        <section id="contact" className="mt-20 pb-24"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}
