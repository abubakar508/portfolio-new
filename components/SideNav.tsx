"use client";
import { MotionWrapper } from "@/wrapper/MotionWrapper";
import React, { useState } from "react";

// link from react-scroll
import Link from "next/link";

const SideNav = ({ NavData }: any) => {
  const [hoveredLinkId, setHoveredLinkId] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => {
    setHoveredLinkId(id);
  };

  const handleMouseLeave = () => {
    setHoveredLinkId(null);
  };

  return (
    <div className="absolute h-screen right-10 p-2 flex items-center justify-center z-50">
      <div className="py-5 flex items-center flex-col justify-between p-2 h-[40%]">
        {NavData.map((item: any, index: number) => (
          <div className="relative" key={index}>
            <Link
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
              href={item.id}
              className=""
            >
              <div className="bg-slate-950 p-4 rounded-full" />
            </Link>
            {hoveredLinkId === item.id && (
                <MotionWrapper>
              <div className="absolute bg-[#123524] text-neutral-200 p-4 -left-28 items-end top-0 rounded-md">
                {item.name}
              </div>
              </MotionWrapper>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
