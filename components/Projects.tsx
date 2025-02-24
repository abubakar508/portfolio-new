'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Abisma, Abismahat, GitHub } from '@/public/assets';

const Projects = () => {
    const sectionRef = useRef(null);
    const [activeProject, setActiveProject] = useState(0);

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
            title: "DID affinidi ecemmerce webiste",
            description: "A decentralized ecommerce website powered by affinidi DID with Verifieable Credentials & Verifieable Presentations.",
            technologies: ["JavaScript", "Solidity"],
            githubLink: "https://github.com/abubakar508/DID-affinidi-ecemmerce-webiste.git",
            liveLink: "https://github.com/abubakar508/DID-affinidi-ecemmerce-webiste.git",
            image: Abisma
        },
        {
            title: "Image compressor utility npm package",
            description: "Image Compress Utility: A Node.js wrapper for client-side image compression, enhancing website performance by reducing image size before uploading.",
            technologies: ["C#", "TypeScript", "Rust", "Docker"],
            githubLink: "https://github.com/abubakar508/image-compressor-utility",
            liveLink: "https://www.npmjs.com/package/image-compress-utility",
            image: Abisma
        },
        {
            title: "Zetachain -  Omnichain NFT Smart Contract",
            description: "This innovative approach allows users to 'deposit' native EVM tokens into these NFTs and transfer them to different addresses. Recipients of these NFTs are presented with the option to either burn the NFTs to claim the 'deposited' tokens or further send them to other addresses.",
            technologies: ["Solidity", "TypeScript", "Docker"],
            githubLink: "https://github.com/abubakar508/Omnichain-NFT-smart-contract-on-ZetaChain.git",
            liveLink: "https://github.com/abubakar508/Omnichain-NFT-smart-contract-on-ZetaChain.git",
            image: Abisma
        },
        {
            title: "Zetachain -  Crosschain messaging",
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
        <div
            ref={sectionRef}
            className="min-h-screen bg-black text-white py-20 relative overflow-hidden"
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
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                style={{ opacity: opacitySection }}
            >
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    variants={itemVariants}
                    style={{ y: headerY }}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-block mb-3"
                    >
                        <span className="text-sm font-medium bg-[#FFD700]/10 text-[#FFD700] px-4 py-1.5 rounded-full">
                            My Portfolio
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-black mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-white">
                            Featured Projects
                        </span>
                    </h2>

                    <motion.p
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        Innovative solutions that demonstrate technical expertise and creative problem-solving
                    </motion.p>
                </motion.div>

                {/* Projects Container */}
                <div className="flex flex-col-reverse lg:flex-row gap-8 min-h-[600px]">
                    {/* Project Details (Left Side) */}
                    <motion.div
                        className="w-full lg:w-3/4 bg-black/40 backdrop-blur-lg border border-[#FFD700]/20 rounded-2xl p-8"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProject}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-3xl font-bold text-[#FFD700] mb-4">
                                    {projects[activeProject].title}
                                </h3>

                                <p className="text-gray-300 mb-6">
                                    {projects[activeProject].description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="text-xl font-semibold text-[#FFD700] mb-3">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {projects[activeProject].technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-[#FFD700]/10 text-[#FFD700] rounded-full text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex space-x-4">
                                    <motion.a
                                        href={projects[activeProject].githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-black/40 border border-[#FFD700]/20 rounded-full hover:bg-[#FFD700]/10 transition-all"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Image
                                            src={GitHub}
                                            alt="GitHub"
                                            width={20}
                                            height={20}
                                            className="filter brightness-0 invert"
                                        />
                                        GitHub
                                    </motion.a>
                                    <motion.a
                                        href={projects[activeProject].liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-[#FFD700] text-black rounded-full hover:bg-[#FFD700]/90 transition-all"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Live Demo
                                    </motion.a>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                    {/* Project Image (Right Side) */}
                    <motion.div
                        className="w-full lg:w-1/4 relative"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="sticky top-20">
                            <div className="w-full aspect-square relative rounded-2xl overflow-hidden border-4 border-[#FFD700]/20">
                                <Image
                                    src={projects[activeProject].image}
                                    alt={projects[activeProject].title}
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>

                            {/* Project Navigation */}
                            <div className="flex justify-center mt-6 space-x-3">
                                {projects.map((_, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => setActiveProject(index)}
                                        className={`w-6 h-6 rounded-full transition-all duration-300 ${activeProject === index
                                            ? 'bg-[#FFD700] w-6'
                                            : 'bg-gray-600 hover:bg-gray-400'
                                            }`}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Additional Projects */}
                <motion.div
                    className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
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
                                className="h-full relative bg-black/40 backdrop-blur-lg border border-[#FFD700]/20 rounded-xl p-6 transition-all duration-300 group-hover:border-[#FFD700]/40 group-hover:translate-y-[-5px]"
                                whileHover={{
                                    boxShadow: "0 10px 25px -5px rgba(255, 215, 0, 0.05)"
                                }}
                            >
                                <motion.div
                                    className="text-2xl mb-4 mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-[#FFD700]/10"
                                    initial={{ scale: 0, rotate: -20 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: index * 0.1 + 0.5, duration: 0.5, type: "spring" }}
                                >
                                    {stat.icon}
                                </motion.div>
                                <h4 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">
                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 + 0.7, duration: 0.5 }}
                                    >
                                        {stat.value}
                                    </motion.span>
                                </h4>
                                <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>

                                <motion.div
                                    className="w-12 h-0.5 bg-gradient-to-r from-[#FFD700]/5 to-[#FFD700]/80 mx-auto mt-4"
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
                    className="mt-20 text-center"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 215, 0, 0.3)" }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-gradient-to-r from-[#FFD700] to-[#B8860B] text-black font-bold px-8 py-4 rounded-full"
                    >
                        View All Projects
                    </motion.a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Projects;
