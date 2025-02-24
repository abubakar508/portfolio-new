'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const Contact = () => {
    const sectionRef = useRef(null);
    const [formStatus, setFormStatus] = useState({
        isSubmitting: false,
        isSubmitted: false,
        isError: false,
        message: ''
    });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax effects
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const headerY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-10%"]);
    const opacitySection = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

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

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setFormStatus({
            isSubmitting: true,
            isSubmitted: false,
            isError: false,
            message: 'Sending your message...'
        });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setFormStatus({
                    isSubmitting: false,
                    isSubmitted: true,
                    isError: false,
                    message: 'Message sent successfully! I will get back to you soon.'
                });
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            } else {
                throw new Error(data.message || 'Something went wrong');
            }
        } catch (error: any) {
            setFormStatus({
                isSubmitting: false,
                isSubmitted: false,
                isError: true,
                message: error.message || 'Failed to send message. Please try again.'
            });
        }
    };

    const emailAddresses = [
        { email: 'imabubakar508@gmail.com', label: 'Primary' },
        { email: 'abubakarismail508@gmail.com', label: 'Secondary' },
        { email: 'contact@abisma.xyz', label: 'Business' }
    ];

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
                            Get In Touch
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-black mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-white">
                            Contact Me
                        </span>
                    </h2>

                    <motion.p
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        Have a project in mind or want to discuss a collaboration? I&apos;d love to hear from you!
                    </motion.p>
                </motion.div>

                {/* Contact Section */}
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left: Contact Info */}
                    <motion.div
                        variants={itemVariants}
                        className="w-full lg:w-2/5"
                    >
                        <div className="bg-black/40 backdrop-blur-lg border border-[#FFD700]/20 rounded-2xl p-8 h-full">
                            <h3 className="text-2xl font-bold text-[#FFD700] mb-6">Contact Information</h3>

                            <div className="space-y-8">
                                {/* Email Addresses */}
                                <div>
                                    <h4 className="text-lg font-semibold mb-4 flex items-center">
                                        <span className="text-xl mr-3">✉️</span>
                                        Email Addresses
                                    </h4>
                                    <ul className="space-y-3">
                                        {emailAddresses.map((item, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 * index + 0.5 }}
                                                className="group"
                                            >
                                                <a
                                                    href={`mailto:${item.email}`}
                                                    className="flex items-center justify-between border border-[#FFD700]/10 hover:border-[#FFD700]/30 p-3 rounded-lg transition-all duration-300 bg-black/20 hover:bg-[#FFD700]/5"
                                                >
                                                    <span className="text-gray-300 group-hover:text-white transition-colors">{item.email}</span>
                                                    <span className="text-xs bg-[#FFD700]/10 text-[#FFD700] px-2 py-1 rounded-full">{item.label}</span>
                                                </a>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Social Links */}
                                <div>
                                    <h4 className="text-lg font-semibold mb-4 flex items-center">
                                        <span className="text-xl mr-3">🌐</span>
                                        Social Profiles
                                    </h4>
                                    <div className="flex gap-4">
                                        {["GitHub", "LinkedIn", "Twitter"].map((platform, index) => (
                                            <motion.a
                                                key={platform}
                                                href="#"
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                transition={{ delay: 0.1 * index + 0.7 }}
                                                whileHover={{ y: -5, scale: 1.1 }}
                                                className="w-12 h-12 rounded-full bg-[#FFD700]/10 flex items-center justify-center text-white hover:bg-[#FFD700]/30 transition-all duration-300"
                                            >
                                                {platform === "GitHub" ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                                ) : platform === "LinkedIn" ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                                                )}
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>

                                {/* Location */}
                                <motion.div
                                    variants={itemVariants}
                                >
                                    <h4 className="text-lg font-semibold mb-4 flex items-center">
                                        <span className="text-xl mr-3">📍</span>
                                        Location
                                    </h4>
                                    <p className="text-gray-300">Working remotely from Kenya and available worldwide for projects.</p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        variants={itemVariants}
                        className="w-full lg:w-3/5"
                    >
                        <div className="bg-black/40 backdrop-blur-lg border border-[#FFD700]/20 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-[#FFD700] mb-6">Send Me a Message</h3>

                            {formStatus.isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-lg p-6 text-center"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#FFD700] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <p className="text-lg text-white mb-4">{formStatus.message}</p>
                                    <motion.button
                                        onClick={() => setFormStatus(prev => ({ ...prev, isSubmitted: false }))}
                                        className="px-6 py-2 bg-[#FFD700] text-black rounded-full font-medium hover:bg-[#FFD700]/90 transition-all"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Send Another Message
                                    </motion.button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full bg-black/70 border border-[#FFD700]/20 rounded-lg px-4 py-3 text-white focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] transition-all outline-none"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full bg-black/70 border border-[#FFD700]/20 rounded-lg px-4 py-3 text-white focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] transition-all outline-none"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number (optional)</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full bg-black/70 border border-[#FFD700]/20 rounded-lg px-4 py-3 text-white focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] transition-all outline-none"
                                            placeholder="+123 456 7890"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={5}
                                            className="w-full bg-black/70 border border-[#FFD700]/20 rounded-lg px-4 py-3 text-white focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] transition-all outline-none resize-none"
                                            placeholder="Tell me about your project, questions, or just say hi!"
                                        ></textarea>
                                    </div>

                                    {formStatus.isError && (
                                        <div className="bg-red-900/30 border border-red-500/50 text-red-200 p-3 rounded-lg">
                                            {formStatus.message}
                                        </div>
                                    )}

                                    <motion.button
                                        type="submit"
                                        disabled={formStatus.isSubmitting}
                                        className={`w-full bg-gradient-to-r from-[#FFD700] to-[#B8860B] text-black font-bold py-4 rounded-lg hover:opacity-90 transition-all ${formStatus.isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        whileHover={{ scale: formStatus.isSubmitting ? 1 : 1.02 }}
                                        whileTap={{ scale: formStatus.isSubmitting ? 1 : 0.98 }}
                                    >
                                        {formStatus.isSubmitting ? (
                                            <span className="flex items-center justify-center">
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending Message...
                                            </span>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* Stats */}
                <motion.div
                    className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
                    variants={containerVariants}
                >
                    {[
                        { label: "Client Satisfaction", value: "100%", icon: "😀" },
                        { label: "Projects Completed", value: "25+", icon: "🚀" },
                        { label: "Support", value: "24/7", icon: "🛠️" },
                        { label: "Response Time", value: "< 24hrs", icon: "⏱️" }
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
            </motion.div>
        </div>
    );
};

export default Contact;
