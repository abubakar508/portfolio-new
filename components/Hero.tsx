"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, AnimatePresence } from "framer-motion";
import { Abismahat, GitHub, Linkedin, User, X } from "@/public/assets";

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("developer");

  // For parallax effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useMotionValue(0);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: any) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    })
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const revealVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        duration: 1.2,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  const skills = [
    { name: "Developer", value: "developer", description: "Building robust backend systems and blockchain solutions" },
    { name: "Financial Analyst", value: "analyst", description: "Analyzing market trends and investment opportunities on stock market and crypto market" },
    { name: "Blockchain Specialist", value: "blockchain", description: "Creating secure and decentralized applications" }
  ];

  return (
    <motion.div
      ref={heroRef}
      className="min-h-screen w-full bg-[#050505] flex flex-col relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic grid pattern */}
        <motion.div
          className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-20"
          style={{ y: backgroundY }}
        >
          {Array.from({ length: 400 }).map((_, index) => (
            <motion.div
              key={index}
              className="bg-[#FFD700]/5 m-0.5 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: Math.random() * 0.7 + 0.1 }}
              transition={{
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            />
          ))}
        </motion.div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
      </div>

      {/* Content container - Improved mobile layout */}
      <div className="relative z-10 flex flex-col w-full px-4 sm:px-6 md:px-12 lg:px-32 pt-24 pb-24 sm:pt-32 lg:pt-0 items-center justify-center lg:flex-row lg:items-center h-screen lg:justify-evenly lg:gap-20">
        {/* Image section - Improved mobile sizing and positioning */}
        <motion.div
          className="relative order-1 lg:order-2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] mb-6 sm:mb-8 lg:mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Animated background elements */}
          <motion.div
            className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-[#FFD700]/20 to-transparent rounded-full blur-2xl"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />

          {/* Rotating border */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#FFD700]/30"
            style={{
              background: "conic-gradient(from 0deg, transparent 0%, transparent 85%, #FFD700 90%, transparent 95%)",
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Image container */}
          <motion.div
            className="relative w-full h-full rounded-full border-2 border-[#FFD700]/40 overflow-hidden"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={Abismahat}
              alt="Abubakar Ismail"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              quality={100}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>

          {/* Floating elements - Repositioned for mobile */}
          <motion.div
            className="absolute top-0 -right-4 sm:-right-8 md:-right-12 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#FFD700]/10 backdrop-blur-md rounded-lg p-2 sm:p-3 md:p-4 border border-[#FFD700]/20 flex items-center justify-center"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FFD700]">3+</div>
              <div className="text-[9px] sm:text-xs text-gray-300">Years Experience</div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-0 -left-4 sm:-left-8 md:-left-16 w-20 h-14 sm:w-24 sm:h-16 md:w-32 md:h-20 bg-[#FFD700]/5 backdrop-blur-md rounded-lg p-2 sm:p-3 border border-[#FFD700]/20 flex items-center justify-center"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.7 }}
          >
            <div className="text-center flex flex-col items-center">
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-[9px] sm:text-xs text-gray-300">Top-rated Developer</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Text section - Improved mobile spacing and font sizes */}
        <motion.div
          className="flex flex-col w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl order-2 lg:order-1 mt-0 lg:mt-0 text-center lg:text-left"
          variants={staggerContainer}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {/* Introduction line */}
          <motion.div
            className="overflow-hidden mb-3 sm:mb-4"
            variants={fadeInUp}
            custom={0}
          >
            <motion.div className="h-0.5 w-16 bg-[#FFD700] mb-3 mx-auto lg:mx-0" />
            <motion.span className="text-gray-400 uppercase tracking-widest text-xs sm:text-sm">Bringing ideas to reality</motion.span>
          </motion.div>

          {/* Name with reveal animation */}
          <motion.div
            className="overflow-hidden mb-3 sm:mb-4"
            variants={fadeInUp}
            custom={1}
          >
            <div className="relative">
              <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-1">
                Abubakar <span className="text-[#FFD700]">Ismail</span>
              </motion.h1>
              <motion.div
                className="absolute inset-0 bg-[#050505]"
                variants={revealVariants}
                initial="visible"
                animate="hidden"
              />
            </div>
          </motion.div>

          {/* Role tabs - Improved mobile layout */}
          <motion.div
            variants={fadeInUp}
            custom={2}
            className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6 justify-center lg:justify-start"
          >
            {skills.map((skill) => (
              <motion.button
                key={skill.value}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border transition-all duration-300 ${activeTab === skill.value
                  ? "bg-[#FFD700] text-black border-[#FFD700]"
                  : "bg-transparent text-white border-gray-700 hover:border-[#FFD700]/50"
                  }`}
                onClick={() => setActiveTab(skill.value)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {skill.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Dynamic description based on active tab - Improved mobile text size */}
          <motion.div className="mb-4 sm:mb-6 md:mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-4">
                  {skills.find(s => s.value === activeTab)?.name}
                </h2>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed px-1">
                  {skills.find(s => s.value === activeTab)?.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* CTA buttons - Improved for mobile */}
          <motion.div
            className="flex gap-3 sm:gap-4 mt-2 sm:mt-4 md:mt-6 justify-center lg:justify-start"
            variants={fadeInUp}
            custom={4}
          >
            <motion.a
              href="#projects"
              className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-[#FFD700] text-black text-sm sm:text-base font-medium rounded-full flex items-center gap-2 overflow-hidden group relative"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">View Projects</span>
              <motion.span
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="#contact"
              className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 border border-[#FFD700]/30 text-white text-sm sm:text-base font-medium rounded-full hover:border-[#FFD700] transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Social links - Hide on mobile, show with media query */}
      <motion.div
        className="fixed left-8 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div
          className="flex flex-col gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {[
            { icon: GitHub, url: "https://github.com/abubakar508" },
            { icon: Linkedin, url: "#" },
            { icon: X, url: "#" }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 relative flex items-center justify-center group"
              variants={fadeInUp}
              custom={index}
              whileHover={{ y: -5 }}
            >
              <span className="absolute -right-8 opacity-0 group-hover:opacity-100 group-hover:-right-20 text-white text-sm transition-all duration-300">
                {index === 0 ? "GitHub" : index === 1 ? "LinkedIn" : "Twitter"}
              </span>
              <div className="w-10 h-10 rounded-full border border-[#FFD700]/20 flex items-center justify-center bg-black/30 backdrop-blur-md hover:border-[#FFD700] transition-all duration-300">
                <Image
                  src={item.icon}
                  alt="social icon"
                  width={20}
                  height={20}
                  className="object-contain filter brightness-0 invert"
                />
              </div>
            </motion.a>
          ))}
          <motion.div
            className="w-px h-32 mx-auto bg-gradient-to-b from-[#FFD700]/50 to-transparent"
            initial={{ height: 0 }}
            animate={{ height: 128 }}
            transition={{ delay: 1.5, duration: 1 }}
          />
        </motion.div>
      </motion.div>

      {/* Mobile social links - New component for mobile only */}
      <motion.div
        className="fixed bottom-24 left-0 right-0 z-30 flex justify-center lg:hidden"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div
          className="flex gap-5 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-[#FFD700]/20"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {[
            { icon: GitHub, url: "https://github.com/abubakar508" },
            { icon: Linkedin, url: "#" },
            { icon: X, url: "#" }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
              variants={fadeInUp}
              custom={index}
              whileHover={{ y: -3 }}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#FFD700]/20 flex items-center justify-center hover:border-[#FFD700] transition-all duration-300">
                <Image
                  src={item.icon}
                  alt="social icon"
                  width={16}
                  height={16}
                  className="object-contain filter brightness-0 invert"
                />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator - Adjusted for mobile */}
      <motion.div
        className="absolute bottom-20 sm:bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <span className="text-[#FFD700] text-xs sm:text-sm tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-[#FFD700]/30 flex justify-center p-1"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#FFD700] rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Bottom bar - Adjusted for mobile */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 py-2 sm:py-3 md:py-4 px-3 sm:px-6 md:px-8 flex items-center justify-between border-t border-[#FFD700]/10 backdrop-blur-sm bg-black/30"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="text-[#FFD700] text-xs sm:text-sm md:text-base font-medium tracking-wider">abismahat.eth</div>

        <div className="flex items-center">
          <span className="text-gray-400 text-xxs sm:text-xs md:text-sm mr-2 sm:mr-4 hidden xs:inline-block">© 2025 · All Rights Reserved</span>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 relative rounded-full overflow-hidden border border-[#FFD700]/20"
          >
            <Image
              src={User}
              alt="user icon"
              fill
              className="object-cover"
            />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
