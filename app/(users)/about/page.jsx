'use client';

import { motion } from 'framer-motion';
import { FaUserCircle } from "react-icons/fa";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const skills = [
    { title: "Programming Languages", items: ["JavaScript", "C++", "Python", "Solidity"] },
    { title: "Web Technologies", items: ["React", "Next.js", "Node.js", "Express", "Django", "Tailwind CSS", "Postman", "HTML", "CSS"] },
    { title: "Databases", items: ["MongoDB", "SQL"] },
    { title: "Tools & Platforms", items: ["Git", "GitHub", "Vercel"] },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center p-9 bg-black-900 transition-colors duration-300 font-inter text-white overflow-hidden">
      <motion.div
        className="relative z-10 max-w-4xl mx-auto py-12 px-6 sm:px-10 md:px-12 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariants} className="mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white flex items-center justify-center space-x-4">
            <FaUserCircle className="text-4xl md:text-6xl" />
            <span>About Me</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400">
            A Glimpse Into My Journey
          </p>
        </motion.div>

        {/* About Me Section */}
        <motion.div variants={itemVariants} className="mb-16 text-left">
          <h2 className="text-3xl text-purple-400 md:text-4xl font-bold mb-4">
            Who I Am
          </h2>
          <p className="text-lg md:text-xl mb-4 text-gray-200 leading-relaxed">
            I'm a B.Tech student in Electrical Engineering at the National Institute of Technology, Patna, with a strong passion for web development and problem-solving. My academic journey has fueled my interest in building scalable, robust, and user-friendly full-stack applications that transform ideas into impactful solutions.
          </p>
          <p className="text-lg md:text-xl mb-4 text-gray-200 leading-relaxed">
            My skills span across MERN stack development, C++, Python, and Data Structures & Algorithms, enabling me to design solutions that are both functional and efficient. I constantly strive to improve my technical expertise and stay adaptable in the ever-evolving tech landscape.
          </p>
          <p className="text-lg md:text-xl mb-4 text-gray-200 leading-relaxed">
            Beyond academics and coding, I am deeply committed to personal growth and community impact. I enjoy playing chess, cricket, volleyball, and running, which help me stay grounded, disciplined, and energized.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div variants={itemVariants} className="mb-10 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-8 text-left">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-800">
                <h3 className="text-2xl font-semibold mb-3 text-purple-300">{skill.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="bg-gray-700 text-gray-200 px-4 py-1 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
