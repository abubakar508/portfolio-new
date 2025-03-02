'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Abisma, Abismahat, GitHub } from '@/public/assets';

const Projects = () => {
    const sectionRef = useRef(null);
    const sliderRef = useRef<any>(null);
    const [activeProject, setActiveProject] = useState(0);
    const [sliderWidth, setSliderWidth] = useState<any>(0);
    const [isMobile, setIsMobile] = useState(false);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax effects
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const headerY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-10%"]);
    const opacitySection = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

    const projects = [
        {
            title: "People's Liberation Party Website",
            description: "A website that digitizes the operation of PLP-Party (formerly Narc Kenya)",
            technologies: ["NextJS", "React", "NestJS", "TypeScript"],
            githubLink: "peoplesliberationparty.co.ke",
            liveLink: "plp.co.ke",
            image: Abisma
        },
        {
            title: "DID Affinidi Ecommerce Website",
            description: "A decentralized ecommerce website powered by affinidi DID with Verifiable Credentials & Verifiable Presentations.",
            technologies: ["JavaScript", "Solidity"],
            githubLink: "https://github.com/abubakar508/DID-affinidi-ecemmerce-webiste.git",
            liveLink: "https://github.com/abubakar508/DID-affinidi-ecemmerce-webiste.git",
            image: Abisma
        },
        {
            title: "Image Compressor Utility NPM Package",
            description: "Image Compress Utility: A Node.js wrapper for client-side image compression, enhancing website performance by reducing image size before uploading.",
            technologies: ["C#", "TypeScript", "Rust", "Docker"],
            githubLink: "https://github.com/abubakar508/image-compressor-utility",
            liveLink: "https://www.npmjs.com/package/image-compress-utility",
            image: Abisma
        },
        {
            title: "Zetachain - Omnichain NFT Smart Contract",
            description: "This innovative approach allows users to 'deposit' native EVM tokens into these NFTs and transfer them to different addresses. Recipients of these NFTs are presented with the option to either burn the NFTs to claim the 'deposited' tokens or further send them to other addresses.",
            technologies: ["Solidity", "TypeScript", "Docker"],
            githubLink: "https://github.com/abubakar508/Omnichain-NFT-smart-contract-on-ZetaChain.git",
            liveLink: "https://github.com/abubakar508/Omnichain-NFT-smart-contract-on-ZetaChain.git",
            image: Abisma
        },
        {
            title: "Zetachain - Crosschain Messaging",
            description: "Cross-Chain Messaging protocol with ZetaChain enables seamless communication between different blockchain networks, facilitating secure and efficient data exchange across diverse blockchain environments.",
            technologies: ["Solidity", "TypeScript", "Docker"],
            githubLink: "https://github.com/abubakar508/Omnichain-NFT-smart-contract-on-ZetaChain.git",
            liveLink: "https://github.com/abubakar508/Omnichain-NFT-smart-contract-on-ZetaChain.git",
            image: Abisma
        },
        {
            title: "Hedera X Hashgraph Campaign",
            description: "A Hedera X Hashgraph Campaign",
            technologies: ["Solidity", "TypeScript", "Docker"],
            githubLink: "https://github.com/abubakar508",
            liveLink: "https://github.com/abubakar508",
            image: Abisma
        },
        {
            title: "Linera Blockchain Campaign",
            description: "A Hedera X Hashgraph Campaign",
            technologies: ["Rust", "Docker", "Vue", "TypeScript", "Shell", "Nix"],
            githubLink: "https://github.com/abubakar508/linera-blockchain.git",
            liveLink: "https://github.com/abubakar508/linera-blockchain.git",
            image: Abisma
        }
    ];

    // Check if on mobile device
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);

            if (sliderRef.current) {
                setSliderWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const nextProject = () => {
        setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };

    const prevProject = () => {
        setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

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

    // Arrow button animations
    const arrowVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.1, backgroundColor: "rgba(255, 215, 0, 0.2)" },
        tap: { scale: 0.95 }
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
                    className="text-center mb-10 sm:mb-16"
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
                            My Portfolio
                        </span>
                    </motion.div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-white">
                            Featured Projects
                        </span>
                    </h2>

                    <motion.p
                        className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto px-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        Innovative solutions that demonstrate technical expertise and creative problem-solving
                    </motion.p>
                </motion.div>

                {/* Custom Slider with Arrows */}
                <div className="relative mb-12">
                    {/* Progress Bar */}
                    <div className="w-full h-1 bg-gray-800 rounded-full mb-8 overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-[#FFD700] to-amber-400"
                            initial={{ width: '0%' }}
                            animate={{ width: `${(activeProject / (projects.length - 1)) * 100}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>

                    <motion.div
                        className="flex items-center mb-6 justify-between"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FFD700]">
                            {projects[activeProject].title}
                        </h3>

                        <div className="flex space-x-3">
                            <motion.button
                                onClick={prevProject}
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-black/60 border border-[#FFD700]/30 text-white"
                                variants={arrowVariants}
                                initial="initial"
                                whileHover="hover"
                                whileTap="tap"
                                aria-label="Previous project"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </motion.button>

                            <motion.button
                                onClick={nextProject}
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-black/60 border border-[#FFD700]/30 text-white"
                                variants={arrowVariants}
                                initial="initial"
                                whileHover="hover"
                                whileTap="tap"
                                aria-label="Next project"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </motion.button>
                        </div>
                    </motion.div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeProject}
                            className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Project Details */}
                            <motion.div
                                className="lg:col-span-3 bg-black/40 backdrop-blur-lg border border-[#FFD700]/20 rounded-xl p-6 md:p-8"
                                initial={{ x: -30, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <p className="text-gray-300 text-sm sm:text-base mb-6">
                                    {projects[activeProject].description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold text-[#FFD700] mb-3">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {projects[activeProject].technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-[#FFD700]/10 text-[#FFD700] rounded-full text-xs sm:text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <motion.a
                                        href={projects[activeProject].githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-black/40 border border-[#FFD700]/20 rounded-full hover:bg-[#FFD700]/10 transition-all text-sm sm:text-base"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Image
                                            src={GitHub}
                                            alt="GitHub"
                                            width={16}
                                            height={16}
                                            className="filter brightness-0 invert"
                                        />
                                        GitHub
                                    </motion.a>
                                    <motion.a
                                        href={projects[activeProject].liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-[#FFD700] text-black rounded-full hover:bg-[#FFD700]/90 transition-all text-sm sm:text-base"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Live Demo
                                    </motion.a>
                                </div>
                            </motion.div>

                            {/* Project Image */}
                            <motion.div
                                className="lg:col-span-2"
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <div className="group relative h-56 sm:h-64 md:h-80 lg:h-full rounded-xl overflow-hidden border-2 border-[#FFD700]/20">
                                    <Image
                                        src={projects[activeProject].image}
                                        alt={projects[activeProject].title}
                                        fill
                                        className="object-cover transition-all duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />

                                    {/* Project number indicator */}
                                    <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs border border-[#FFD700]/30">
                                        {activeProject + 1} / {projects.length}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Thumbnail Navigation */}
                <div className="mb-16">
                    <div
                        ref={sliderRef}
                        className="overflow-x-auto pb-4 hide-scrollbar"
                    >
                        <motion.div className="flex space-x-3 min-w-max px-1">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-300 border-2 ${activeProject === index ? 'border-[#FFD700]' : 'border-gray-700/50'
                                        }`}
                                    onClick={() => setActiveProject(index)}
                                    whileHover={{ y: -5 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    {/* <div className="w-20 h-20 sm:w-24 sm:h-24 relative">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className={`object-cover transition-opacity ${activeProject === index ? 'grayscale-0' : 'grayscale'}`}
                                        />
                                        <div className={`absolute inset-0 ${activeProject === index ? 'bg-[#FFD700]/20' : 'bg-black/50'}`} />
                                    </div> */}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Additional Projects Stats - Mobile grid optimized */}
                <motion.div
                    className="mt-16 sm:mt-20 md:mt-24 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center"
                    variants={containerVariants}
                >
                    {[
                        { label: "Total Projects", value: "10+", icon: "🚀" },
                        { label: "Open Source", value: "5+", icon: "💻" },
                        { label: "Blockchain", value: "3+", icon: "🔗" },
                        { label: "Web Apps", value: "7+", icon: "🌐" }
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

                {/* Call to Action */}
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
                        View All Projects
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Add custom styles for hiding scrollbar */}
            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default Projects;
