// app/page.jsx

'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import Link from 'next/link';

// Home Page content component
const HomeSectionContent = () => {
  // Define animation variants for a staggered effect
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const profilePictureVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center p-15 bg-black-900 transition-colors duration-300 overflow-hidden font-inter">
      {/* Background with subtle gradient effect */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-1000 via-gray-800 to-purple-900 opacity-90"></div>
      
      {/* Motion.div wraps the main content for a staggered entry effect */}
      <motion.div
        className="relative z-10 max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Profile Picture with Animation */}
        <motion.div
          variants={profilePictureVariants}
          className="mb-8"
        >
          <Image
            src="/me.jpg"
            alt="Kapil Gupta's Profile Picture"
            width={180}
            height={180}
            className="rounded-full w-46 h-46 mx-auto shadow-lg border-4 border-purple-600 object-cover"
          />
        </motion.div>
        
        {/* Name with animation */}
        <motion.h1 
          variants={itemVariants} 
          className="text-3xl md:text-5xl font-extrabold mb-4 text-white"
        >
          Hello, I&apos;m Kapil Gupta
        </motion.h1>
        
        {/* Short & Crispy Intro with animation */}
        <motion.p 
          variants={itemVariants} 
          className="text-2xl md:text-3xl text-gray-200 font-medium mb-8"
        >
          Full Stack Web Developer
        </motion.p>
        
        <motion.p 
          variants={itemVariants} 
          className="text-2lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed mb-8"
        >
          Passionate about building scalable and robust web applications. My background in Electrical Engineering from National Institute of Technology Patna, gives me a unique, problem-solving-driven approach to solving complex real-world problems.
        </motion.p>
        
        {/* Call to Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <Link
            href="/projects" 
            className="inline-block px-8 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-xl 
                        hover:bg-purple-700 transform hover:scale-105 transition-all duration-300"
          >
            View My Work
          </Link>
          <a
            href="https://drive.google.com/file/d/1lfdXLlqtJq0ea9mhsS64aIiJPVfdbUMM/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-8 py-3 bg-gray-100 text-gray-900 font-semibold rounded-full shadow-xl 
                        hover:bg-gray-200 transform hover:scale-105 transition-all duration-300"
          >
            View Resume
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

import About from "./about/page";
import Projects from "./projects/page";
import Education from "./education/page";
import Contact from "./contact/page";

export default function SinglePagePortfolio() {
  return (
    <div className="relative bg-black-900 font-inter text-white">
      {/* Main content sections, each with a unique ID for scrolling */}
      <div id="home">
        <HomeSectionContent />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

