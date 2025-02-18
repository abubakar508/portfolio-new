'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Skills = () => {
  const skills = [
    {
      category: "Blockchain",
      items: [
        { name: "Solidity", level: 90 },
        { name: "Web3.js", level: 85 },
        { name: "Truffle", level: 80 },
        { name: "Hardhat", level: 90 },
        { name: "Smart Contracts", level: 92 }
      ]
    },
    {
      category: "Frontend",
      items: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 88 },
        { name: "TailwindCSS", level: 90 },
        { name: "Angular", level: 90 },
        { name: "TailwindCSS", level: 90 },
        { name: "TypeScript", level: 85 }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Nest JS", level: 85 },
        { name: "Go", level: 85 },
        { name: "TypeScript", level: 82 },
        { name: "AWS", level: 70 },
        { name: "RESTful APIs", level: 88 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1)_0%,transparent_70%)]" />
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from
      from-black to-transparent" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-6xl font-black text-[#FFD700] mb-4">
            Technical Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Blending blockchain innovation with modern web development to create
            secure and scalable solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillSet, idx) => (
            <motion.div
              key={skillSet.category}
              variants={itemVariants}
              className="bg-black/40 backdrop-blur-lg border border-[#FFD700]/20 rounded-xl p-6 hover:border-[#FFD700]/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-[#FFD700] mb-6">
                {skillSet.category}
              </h3>
              <div className="space-y-6">
                {skillSet.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + idx * 0.2 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-[#FFD700]">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + idx * 0.2 }}
                        className="h-full bg-gradient-to-r from-[#FFD700] to-[#B8860B] rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          variants={containerVariants}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { label: "Years Experience", value: "4+" },
            { label: "Projects Completed", value: "20+" },
            { label: "Smart Contracts", value: "10+" },
            { label: "Satisfied Clients", value: "20+" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="bg-black/40 backdrop-blur-lg border border-[#FFD700]/20 rounded-xl p-6"
            >
              <h4 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">
                {stat.value}
              </h4>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
