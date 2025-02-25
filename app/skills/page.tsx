'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Abisma, Abismahat } from '@/public/assets';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Blockchain');
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const headerY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-10%"]);
  const opacitySection = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  const skills = [
    {
      category: "Blockchain",
      icon: "🔗",
      description: "Developing secure and efficient smart contracts and decentralized applications",
      items: [
        { name: "Solidity", level: 90, color: "#6EE7B7" },
        { name: "Truffle/Hardhat", level: 80, color: "#A78BFA" },
        { name: "TypeScript", level: 92, color: "#60A5FA" }
      ]
    },
    {
      category: "Frontend",
      icon: "🎨",
      description: "Creating responsive and interactive user interfaces with modern frameworks",
      items: [
        { name: "ReactJS/NextJS", level: 88, color: "#6EE7B7" },
        { name: "Svelte", level: 60, color: "#F87378" },
        { name: "Angular", level: 80, color: "#F87171" },
        { name: "TypeScript", level: 85, color: "#A78BFA" }
      ]
    },
    {
      category: "Backend",
      icon: "⚙️",
      description: "Building robust server-side applications and APIs with scalable architecture",
      items: [
        { name: "TypeScript", level: 85, color: "#F87171" },
        { name: "Go", level: 80, color: "#60A5FA" },
        { name: "AWS", level: 70, color: "#FCD34D" },
      ]
    },
    {
      category: "Finance",
      icon: "💰",
      description: "Building robust server-side applications and APIs with scalable architecture",
      items: [
        { name: "Financial Modelling", level: 70, color: "#F87171" },
        { name: "Data & Analytics (SQL, Power BI)", level: 50, color: "#60A5FA" },
        { name: "DeFi & Crypto markets", level: 50, color: "#A78BFA" },
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

  const slideVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    exit: {
      x: 50,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  // Function to calculate bar fill delay based on skill level
  const calculateDelay = (level: any) => {
    return 0.5 + ((100 - level) / 100);
  };

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-black text-white py-16 sm:py-20 md:py-24 relative overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)]">
          {Array.from({ length: 400 }).map((_, index) => (
            <motion.div
              key={index}
              className="bg-[#FFD700]/10 m-0.5 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: Math.random() * 0.5 }}
              transition={{
                duration: Math.random() * 5 + 2,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black pointer-events-none" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10"
        style={{ opacity: opacitySection }}
      >
        {/* Header - Improved spacing */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          variants={itemVariants}
          style={{ y: headerY }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-4 sm:mb-5"
          >
            <span className="text-xs sm:text-sm font-medium bg-[#FFD700]/10 text-[#FFD700] px-3 sm:px-4 py-1.5 rounded-full">
              Technical Stack
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-white">
              Technical Expertise
            </span>
          </h2>

          <motion.p
            className="text-gray-400 text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Blending blockchain innovation with modern web development to create
            secure and scalable solutions.
          </motion.p>
        </motion.div>

        {/* Category Navigation - Improved for mobile */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-10 sm:mb-12 px-1"
          variants={itemVariants}
        >
          {skills.map((skillSet) => (
            <motion.button
              key={skillSet.category}
              onClick={() => setActiveCategory(skillSet.category)}
              className={`px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center space-x-1 sm:space-x-2 ${activeCategory === skillSet.category
                ? "bg-[#FFD700] text-black shadow-lg shadow-[#FFD700]/20"
                : "bg-black/40 backdrop-blur-md border border-[#FFD700]/20 text-white hover:border-[#FFD700]/50"
                }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-base sm:text-lg">{skillSet.icon}</span>
              <span>{skillSet.category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Active Skill Category Display - Optimized for mobile */}
        <div className="my-8 sm:my-10 md:my-12 relative min-h-[450px] sm:min-h-[500px]">
          <AnimatePresence mode="wait">
            {skills.filter(skill => skill.category === activeCategory).map((skillSet) => (
              <motion.div
                key={skillSet.category}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={slideVariants}
                className="w-full"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  {/* Left: Category Info - Mobile optimized */}
                  <motion.div
                    className="w-full md:w-1/3 bg-black/40 backdrop-blur-lg border border-[#FFD700]/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:border-[#FFD700]/40 transition-all duration-300"
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FFD700]/10 flex items-center justify-center text-3xl sm:text-4xl mb-5 sm:mb-6">
                      {skillSet.icon}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-white mb-3 sm:mb-4">
                      {skillSet.category}
                    </h3>

                    <p className="text-gray-400 text-sm sm:text-base mb-5 sm:mb-6">
                      {skillSet.description}
                    </p>

                    <div className="flex space-x-2">
                      {skillSet.items.map((skill) => (
                        <motion.div
                          key={skill.name}
                          className="h-1.5 flex-1 rounded-full overflow-hidden bg-white/10"
                          whileHover={{ height: "8px", transition: { duration: 0.2 } }}
                        >
                          <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: skill.color }}
                            initial={{ width: "0%" }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1.5,
                              ease: [0.25, 0.1, 0.25, 1],
                              delay: 0.3
                            }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Right: Skills Detail - Mobile optimized */}
                  <motion.div className="w-full md:w-2/3 bg-black/40 backdrop-blur-lg border border-[#FFD700]/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
                    <div className="space-y-5 sm:space-y-6">
                      {skillSet.items.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
                          className="relative"
                        >
                          <div className="flex justify-between items-center mb-2 sm:mb-3">
                            <div className="flex items-center">
                              <motion.div
                                className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full mr-2 sm:mr-3"
                                style={{ backgroundColor: skill.color }}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.1 * index + 0.5, duration: 0.4 }}
                              />
                              <span className="text-white text-sm sm:text-base font-medium">{skill.name}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="text-2xs sm:text-xs text-gray-400">Proficiency</div>
                              <motion.span
                                className="text-[#FFD700] text-sm sm:text-base font-bold"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: calculateDelay(skill.level), duration: 0.3 }}
                              >
                                {skill.level}%
                              </motion.span>
                            </div>
                          </div>

                          <div className="h-2 sm:h-2.5 bg-gray-800 rounded-full overflow-hidden flex">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{
                                duration: 2,
                                ease: [0.25, 0.1, 0.25, 1],
                                delay: 0.2 * index + 0.3
                              }}
                              className="h-full rounded-full relative overflow-hidden"
                              style={{ backgroundColor: skill.color }}
                            >
                              <motion.div
                                className="absolute inset-0 opacity-50"
                                initial={{ x: '-100%' }}
                                animate={{ x: '100%' }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  repeatType: 'loop',
                                  ease: "linear",
                                  delay: 0.2 * index
                                }}
                                style={{
                                  background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)`
                                }}
                              />
                            </motion.div>
                          </div>

                          {/* Experience Bar - More mobile friendly */}
                          <div className="flex justify-between text-2xs sm:text-xs mt-1 sm:mt-1.5 text-gray-500">
                            <span>Beginner</span>
                            <span>Intermediate</span>
                            <span>Expert</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Additional Info - Improved for mobile */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-800"
                    >
                      <h4 className="text-base sm:text-lg font-medium text-[#FFD700] mb-3">Projects Showcase</h4>
                      <div className="flex space-x-3 overflow-x-auto pb-2 px-1">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
                            className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br from-[#FFD700]/20 to-black overflow-hidden relative"
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-xl sm:text-2xl">{skillSet.icon}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Stats - Mobile grid optimized */}
        <motion.div
          variants={containerVariants}
          className="mt-16 sm:mt-20 md:mt-24 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center"
        >
          {[
            { label: "Years Experience", value: "3+", icon: "⏱️" },
            { label: "Projects Completed", value: "20+", icon: "🚀" },
            { label: "Smart Contracts", value: "10+", icon: "📄" },
            { label: "Satisfied Clients", value: "20+", icon: "🤝" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="group relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-[#FFD700]/5 rounded-xl transform rotate-6 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300"
                initial={{ rotate: 6 }}
                whileHover={{ rotate: 0 }}
              />
              <motion.div
                className="h-full relative bg-black/40 backdrop-blur-lg border border-[#FFD700]/20 rounded-xl p-4 sm:p-5 md:p-6 transition-all duration-300 group-hover:border-[#FFD700]/40 group-hover:translate-y-[-5px]"
                whileHover={{
                  boxShadow: "0 10px 25px -5px rgba(255, 215, 0, 0.05)"
                }}
              >
                <motion.div
                  className="text-xl sm:text-2xl mb-3 sm:mb-4 mx-auto flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFD700]/10"
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5, type: "spring" }}
                >
                  {stat.icon}
                </motion.div>
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FFD700] mb-1 sm:mb-2">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.7, duration: 0.5 }}
                  >
                    {stat.value}
                  </motion.span>
                </h4>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">{stat.label}</p>

                <motion.div
                  className="w-10 sm:w-12 h-0.5 bg-gradient-to-r from-[#FFD700]/5 to-[#FFD700]/80 mx-auto mt-3 sm:mt-4"
                  initial={{ width: 0 }}
                  animate={{ width: 48 }}
                  transition={{ delay: index * 0.1 + 0.9, duration: 0.5 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action - Improved spacing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="mt-16 sm:mt-20 text-center py-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 215, 0, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-[#FFD700] to-[#B8860B] text-black text-sm sm:text-base font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full"
          >
            View My Portfolio
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
