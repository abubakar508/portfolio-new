'use client';

import React from 'react';
import { Link } from "react-scroll";
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  name: string;
  id: string;
}

interface SideNavProps {
  NavData: NavItem[];
  isOpen?: boolean;
  onClose?: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ NavData, isOpen = false, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Side Navigation Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-screen w-full md:w-[400px] bg-black border-l border-[#FFD700]/20 z-50"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-[#FFD700] hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation Content */}
            <div className="h-full flex flex-col justify-center items-center p-8">
              <motion.div className="flex flex-col gap-8 items-center">
                {NavData.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full"
                  >
                    <Link
                      to={item.id}
                      smooth={true}
                      duration={500}
                      onClick={onClose}
                      className="text-2xl text-gray-300 hover:text-[#FFD700] cursor-pointer transition-all duration-300 block py-3 px-6 rounded-lg hover:bg-[#FFD700]/10 text-center"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SideNav;
