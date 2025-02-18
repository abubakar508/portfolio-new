'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-scroll";
import SideNav from './SideNav';
import { NavData } from '@/constants';

const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-black/80 backdrop-blur-md border-b border-[#FFD700]/20'
                    : 'bg-transparent'
                    }`}
            >
                <div className="w-full px-4 md:px-12 py-5">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex-shrink-0"
                        >
                            <span className="text-[#FFD700] font-black text-xl md:text-2xl">
                                ABISMA
                            </span>
                        </motion.div>

                        {/* Center Logo Placeholder */}
                        {/* <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-[#FFD700]"
                        >
                            logo
                        </motion.div> */}

                        {/* Mobile menu button */}
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-[#FFD700]"
                        >
                            <div className="h-6 w-6 flex flex-col justify-around">
                                <span className={`h-0.5 w-6 bg-[#FFD700] transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                <span className={`h-0.5 w-6 bg-[#FFD700] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                                <span className={`h-0.5 w-6 bg-[#FFD700] transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                            </div>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-black/90 backdrop-blur-lg"
                        >
                            <div className="px-4 pt-2 pb-3 space-y-1">
                                {NavData.map((item: any, index: any) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            to={item.to}
                                            smooth={true}
                                            duration={500}
                                            className="text-gray-300 hover:text-[#FFD700] block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Side Navigation */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="hidden md:block fixed left-0 h-screen z-40"
            >
                <SideNav
                    NavData={NavData}
                    isOpen={isSideNavOpen}
                    onClose={() => setIsSideNavOpen(false)}
                />
            </motion.div>
        </>
    );
};

export default Nav;
