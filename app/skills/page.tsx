"use client";
import { TechStacks } from '@/components';
import { MotionWrapper } from '@/wrapper/MotionWrapper';
import React from 'react'

const page = () => {
  return (
    <MotionWrapper>
    <div className=" md:h-screen flex items-center justify-center relative">
    <div className=' flex flex-col md:flex-row items-center justify-between gap-y-6 px-64 w-full'>
      {/* text section */}
      <div>
      <div className=" overflow-hidden md:h-[600px] md:w-[500px] flex flex-col items-center justify-center">
          <div className=" upper text-3xl md:text-[256px] font-black text-neutral-900/10 absolute -z-50">
            .icp
          </div>
          <div className=" flex flex-col gap-y-2 text-6xl font-black text-[#28282B]">
            <span>Abisma</span>
            <div className=" flex flex-col">
              <span>Skillset</span>
              <span className=" text-sm font-medium text-[#28282B]">Abubakar Ismail</span>
            </div>
            <span className=" text-sm font-medium text-[#28282B]">
            By blending data analysis with blockchain innovation, I craft solutions that simplify complex data and lead the way in secure transactions.
              </span>
            <div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <TechStacks  />
        </div>
    </div>
    </div>
    </MotionWrapper>
  )
}

export default page;
