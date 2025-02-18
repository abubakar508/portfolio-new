"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Abismahat, GitHub, Linkedin, User, X } from "@/public/assets";

const Hero = () => {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const socialHover = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1)_0%,transparent_70%)]" />

      <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-16 lg:px-32 gap-8 md:gap-16">
        {/* Image section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-72 h-72 md:w-[500px] md:h-[500px]"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFD700] to-[#B8860B] opacity-20 blur-xl" />
          <div className="relative w-full h-full rounded-full border-2 border-[#FFD700] overflow-hidden">
            <Image
              src={Abismahat}
              alt="hero-image"
              fill
              className="object-cover"
              quality={100}
              priority
            />
          </div>
        </motion.div>

        {/* Text section */}
        <motion.div
          {...fadeIn}
          className="flex flex-col items-start justify-center max-w-xl"
        >
          <div className="absolute text-8xl md:text-[200px] font-black text-[#FFD700]/5 -z-10">
            .eth
          </div>

          <div className="flex flex-col gap-y-4">
            <motion.span
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="text-4xl md:text-6xl font-black text-[#FFD700]"
            >
              Abismahat!
            </motion.span>

            <div className="flex flex-col gap-y-2">
              <motion.span
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="text-4xl md:text-6xl font-black text-white"
              >
                Developer
              </motion.span>
              <span className="text-sm md:text-base font-medium text-[#FFD700]">
                Abubakar Ismail
              </span>
            </div>

            <motion.p
              {...fadeIn}
              className="text-sm md:text-base font-medium text-gray-300 max-w-md"
            >
              By blending data analysis with blockchain innovation, I craft solutions
              that simplify complex data and lead the way in secure transactions.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-0 py-4 px-4 md:px-16 lg:px-32 w-full flex items-center justify-between border-t border-[#FFD700]/20"
      >
        <span className="font-bold text-[#FFD700]">Abismahat.eth</span>
        <motion.a
          href="https://github.com/abubakar508"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 md:w-16 md:h-16"
        >
          <Image
            src={User}
            alt="user-icon"
            width={64}
            height={64}
            className="rounded-full border border-[#FFD700]/50"
          />
        </motion.a>
      </motion.div>

      {/* Social links */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="absolute left-4 md:left-8 h-screen flex items-center"
      >
        <div className="flex flex-col gap-6 p-4 rounded-full bg-black/50 backdrop-blur-sm border border-[#FFD700]/20">
          {[X, Linkedin, GitHub].map((Icon, index) => (
            <motion.div
              key={index}
              variants={socialHover}
              whileHover="hover"
              className="w-8 h-8 md:w-12 md:h-12 relative"
            >
              <Image
                src={Icon}
                alt="social-icon"
                fill
                className="object-contain filter invert sepia hue-rotate-[340deg] saturate-[500%]"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
