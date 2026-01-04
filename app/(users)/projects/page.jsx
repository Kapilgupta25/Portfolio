// (users)/projects/page.jsx

'use client';

import { motion } from 'framer-motion';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const projects = [
    {
      title: "DSA Instructor Bot",
      description: "An AI-powered chatbot that helps users understand Data Structures & Algorithms (DSA) concepts in the simplest possible way. Built using React and Tailwind CSS, it leverages Google's Gemini 2.5 Flash model via the Gemini API to provide focused, topic-restricted explanations.",
      image: "/DSA_Instructor_BOT.png",
      tech: ["React", "Tailwind CSS", "Gemini API", "JavaScript"],
      codeLink: "https://github.com/Kapilgupta25/DSA-Instructor-Bot",
      liveLink: "https://dsa-instructor-bot.vercel.app/",
    },
    {
      title: "VideoTube",
      description: "A scalable video hosting and channel platform supporting uploads, subscriptions, likes, comments, playlists, and personalized watch history. Built with a modular backend architecture and optimized for performance and horizontal scalability.",
      image: "/Videotube.jpeg",
      tech: ["Node.js", "Express", "MongoDB", "JWT", "Cloudinary", "Multer"],
      codeLink: "https://github.com/Kapilgupta25/VideoTube",
      liveLink: "https://drive.google.com/file/d/13H9m2e9U0uXcxZAmGAhybI8J2XLQGpMJ/view?usp=drive_link" 
    },
    {
      title: "Weather Sphere",
      description: "A responsive, user-friendly weather application that delivers real-time weather updates. Built using React and Tailwind CSS, it integrates the WeatherAPI to fetch live weather data based on user input.",
      image: "/WeatherSphere.png",
      tech: ["React", "Tailwind CSS", "JavaScript", "WeatherAPI"],
      codeLink: "https://github.com/Kapilgupta25/Weather-Sphere",
      liveLink: "https://weather-sphere-amber.vercel.app/",
    },
    {
      title: "Tic Tac Toe Game",
      description: "A classic two-player game built using pure HTML, CSS, and JavaScript. It includes features such as a reset button to clear the current game and a new game button to reinitialize the board for a fresh start.",
      image: "/Tic-Tac-Toe.png",
      tech: ["HTML", "CSS", "JavaScript"],
      codeLink: "https://github.com/Kapilgupta25/Tic-Tac-Toe_Game",
      liveLink: "#",
    },
    
    // Add more projects here
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center p-9 font-inter text-white">
      <motion.div
        className="relative z-10 max-w-6xl mx-auto py-12 px-6 sm:px-10 md:px-12 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={cardVariants} className="mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 flex items-center justify-center space-x-4">
            <FaCode className="text-4xl md:text-6xl text-purple-400" />
            <span>My Projects</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            Here are some of the projects I've completed across different programming languages and technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl shadow-lg border-2 border-transparent hover:border-purple-600 transform hover:scale-105 transition-all duration-300 overflow-hidden text-left"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center z-20">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-purple-400 hover:text-white transition-colors duration-300"
                  >
                    <FaCode />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-purple-400 hover:text-white transition-colors duration-300"
                  >
                    <FaExternalLinkAlt />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}


