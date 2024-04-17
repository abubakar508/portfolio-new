import Image from "next/image";
import React from "react";

// images
import { Abismahat, GitHub, Linkedin, User, X } from "@/public/assets";
import { MotionWrapper } from "@/wrapper/MotionWrapper";

const Hero = () => {
  return (
    <MotionWrapper>
      <div className="md:h-screen flex flex-col md:flex-row items-center justify-center relative">
        <div className="flex items-center justify-center md:w-1/2 mb-10 md:mb-0">
          <div className="md:w-[500px] md:h-[500px] overflow-hidden rounded-full bg-gradient-to-br from-[#28F8F8] to-[#07A4FA] items-center justify-center">
            <Image
              src={Abismahat}
              alt="hero-image"
              width={400}
              height={400}
              quality={100}
              priority
            />
          </div>
        </div>
        <div className="overflow-hidden md:h-[600px] md:w-[500px] flex flex-col items-center justify-center">
          <div className="upper text-3xl md:text-[256px] font-black text-neutral-900/10 absolute -z-50">
            .eth
          </div>
          <div className="flex flex-col gap-y-2 text-6xl font-black text-[#28282B]">
            <span>Abisma</span>
            <div className="flex flex-col">
              <span>Blockchain</span>
              <span className="text-sm font-medium text-[#28282B]">Abubakar Ismail</span>
            </div>
            <span className="text-sm font-medium text-[#28282B]">
              By blending data analysis with blockchain innovation, I craft solutions that simplify complex data and lead the way in secure transactions.
            </span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 py-7 px-32 w-full flex items-center justify-between">
        <div>
          <span className="font-bold text-[14px]">Abismahat.eth</span>
        </div>
        <a href="https://github.com/abubakar508" target="_blank" rel="noopener noreferrer">
          <Image 
            src={User}
            width={70}
            height={70}
            alt="user-icon"
            quality={100}
            priority
          />
        </a>
      </div>
      {/* socials */}
      <div className="absolute h-screen left-3 hidden md:flex items-center flex-col justify-center">
        <div className="flex flex-col items-center justify-center bg-[#28282B]/10 rounded-full h-[400px]">
          <div className="relative overflow-hidden w-100 h-100">
            <Image
              src={X}
              alt="x-logo"
              width={100}
              height={100}
              quality={100}
              priority
              className="transform transition-transform duration-300 hover:scale-110"
            />
          </div>
          <Image
            src={Linkedin}
            alt="x-logo"
            width={100}
            height={100}
            quality={100}
            priority
            className="transform transition-transform duration-300 hover:scale-110"
          />
          <Image
            src={GitHub}
            alt="x-logo"
            width={100}
            height={100}
            quality={100}
            priority
            className="transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </MotionWrapper>
  );
};

export default Hero;
