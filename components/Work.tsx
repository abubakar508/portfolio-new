'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Abismahat } from '@/public/assets';

const WorkExperience = () => {
    const sectionRef = useRef(null);
    const [activeCompany, setActiveCompany] = useState('ImmersiCloud Consulting');

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax effects
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const headerY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-10%"]);
    const opacitySection = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

    const workExperience = [
        {
            company: "ImmersiCloud Consulting",
            title: "Developer Relations",
            period: "Jan 2022 - Present",
            location: "Remote, Global",
            highlights: [
                "Lead development of decentralized financial (DeFi) platforms, and blockchain integrations to client applications",
                "Ensure prior and top notch communication and operations channel between developers.",
                "Lead blockchain talks and refreshers for the new developers in the company",
                "Architect smart contract solutions using Solidity, ensuring high security and gas efficiency",
            ],
            technologies: ["Solidity", "Web3.js", "Truffle", "Polygon", "Ethereum"]
        },
        {
            company: "Bells Corporate",
            title: "Backend Developer",
            period: "Jun 2024 - Dec 2024",
            location: "Kenya",
            highlights: [
                "Developed scalable microservices architecture for financial analytics platform",
                "Created real-time trading dashboard with financial analysis",
                "Optimized backend performance, reducing API response times by 65%",
            ],
            technologies: ["TypeScript", "React", "NestJS", "GraphQL", "Docker", "Go"]
        },
        {
            company: "Bells Corporate",
            title: "Lead Blockchain Developer",
            period: "Jan 2025 - Present",
            location: "Kenya",
            highlights: [
                "Led a team of developers in building a high-performance blockchain-based payment gateway",
                "Integrated blockchain with traditional financial systems",
                "Designed and deployed secure smart contracts",
            ],
            technologies: ["TypeScript", "React", "NestJS", "GraphQL", "Docker", "Go"]
        },
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

    return (
        <div
            ref={sectionRef}
            className="min-h-screen bg-black text-white py-16 sm:py-20 relative overflow-hidden"
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
                {/* Header - Improved for mobile */}
                <motion.div
                    className="text-center mb-12 sm:mb-16"
                    variants={itemVariants}
                    style={{ y: headerY }}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-block mb-4"
                    >
                        <span className="text-xs sm:text-sm font-medium bg-[#FFD700]/10 text-[#FFD700] px-3 sm:px-4 py-1.5 rounded-full">
                            Professional Journey
                        </span>
                    </motion.div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-white">
                            Work Experience
                        </span>
                    </h2>

                    <motion.p
                        className="text-gray-400 text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto px-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        Transforming complex challenges into innovative technological solutions
                    </motion.p>
                </motion.div>

                {/* Company Navigation - Made more mobile friendly */}
                <motion.div
                    className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 px-1"
                    variants={itemVariants}
                >
                    {workExperience.map((exp) => (
                        <motion.button
                            key={exp.company}
                            onClick={() => setActiveCompany(exp.company)}
                            className={`px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center space-x-1 sm:space-x-2 ${activeCompany === exp.company
                                ? "bg-[#FFD700] text-black shadow-lg shadow-[#FFD700]/20"
                                : "bg-black/40 backdrop-blur-md border border-[#FFD700]/20 text-white hover:border-[#FFD700]/50"
                                }`}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span>{exp.company}</span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Active Experience Display - Optimized for mobile */}
                <div className="my-8 sm:my-10 md:my-12 relative min-h-[450px] sm:min-h-[500px]">
                    <AnimatePresence mode="wait">
                        {workExperience.filter(exp => exp.company === activeCompany).map((exp) => (
                            <motion.div
                                key={exp.company}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={slideVariants}
                                className="w-full"
                            >
                                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                                    {/* Left: Company Info - Mobile optimized */}
                                    <motion.div
                                        className="w-full md:w-1/3 bg-black/40 backdrop-blur-lg border border-[#FFD700]/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:border-[#FFD700]/40 transition-all duration-300"
                                        initial={{ x: -30, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.2, duration: 0.6 }}
                                    >
                                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FFD700]/10 flex items-center justify-center text-3xl sm:text-4xl mb-5 sm:mb-6">
                                            🏢
                                        </div>

                                        <h3 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-white mb-3 sm:mb-4">
                                            {exp.company}
                                        </h3>

                                        <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
                                            <strong className="text-white">{exp.title}</strong>
                                            <br />
                                            {exp.period}
                                        </p>

                                        <p className="text-gray-300 text-sm sm:text-base">
                                            {exp.location}
                                        </p>
                                    </motion.div>

                                    {/* Right: Experience Details - Mobile optimized */}
                                    <motion.div
                                        className="w-full md:w-2/3 bg-black/40 backdrop-blur-lg border border-[#FFD700]/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8"
                                        initial={{ x: 30, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.3, duration: 0.6 }}
                                    >
                                        <h4 className="text-xl sm:text-2xl font-bold text-[#FFD700] mb-4 sm:mb-6">Key Achievements</h4>

                                        <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                            {exp.highlights.map((highlight, index) => (
                                                <motion.li
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.1 * index + 0.4, duration: 0.5 }}
                                                    className="flex items-start"
                                                >
                                                    <span className="text-[#FFD700] mr-2 sm:mr-3 text-lg sm:text-xl mt-0.5 sm:mt-0">•</span>
                                                    <span className="text-gray-300 text-sm sm:text-base">{highlight}</span>
                                                </motion.li>
                                            ))}
                                        </ul>

                                        <div>
                                            <h4 className="text-lg sm:text-xl font-semibold text-[#FFD700] mb-3 sm:mb-4">Technologies</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.map((tech, index) => (
                                                    <motion.span
                                                        key={tech}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: 0.1 * index + 0.6, duration: 0.4 }}
                                                        className="px-2 sm:px-3 py-1 bg-[#FFD700]/10 text-[#FFD700] rounded-full text-xs sm:text-sm"
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Career Stats - Mobile grid optimized */}
                <motion.div
                    variants={containerVariants}
                    className="mt-16 sm:mt-20 md:mt-24 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center"
                >
                    {[
                        { label: "Companies", value: "3+", icon: "🏢" },
                        { label: "Projects", value: "15+", icon: "🚀" },
                        { label: "Experience", value: "4+", icon: "⏱️" },
                        { label: "Technologies", value: "20+", icon: "💻" }
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

                {/* Background Image - More subtle on mobile */}
                <motion.div
                    className="absolute bottom-0 right-0 w-2/3 md:w-1/2 h-1/3 md:h-1/2 opacity-10 sm:opacity-20 pointer-events-none"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 0.2, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="relative w-full h-full">
                        <Image
                            src={Abismahat}
                            alt="Background"
                            fill
                            className="object-cover grayscale"
                            style={{
                                maskImage: 'linear-gradient(to bottom right, black 50%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom right, black 50%, transparent 100%)'
                            }}
                        />
                    </div>
                </motion.div>

                {/* Call to Action - Better spacing for mobile */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.7 }}
                    className="mt-16 sm:mt-20 text-center pb-4 sm:pb-0"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 215, 0, 0.3)" }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-gradient-to-r from-[#FFD700] to-[#B8860B] text-black text-sm sm:text-base font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full inline-block"
                    >
                        Download Resume
                    </motion.a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default WorkExperience;
