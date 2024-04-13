"use client";
import { DevFrame, Web2, Web3 } from "@/constants"; // Assuming DevFrame is imported from constants
import Image from "next/image";
import { useState } from "react";

const TechStacks = () => {
  const [showWeb2, setShowWeb2] = useState(true);

  return (
    <div className="mt-24 p-4 relative flex items-center justify-center">
      <div className=" absolute top-0 ">
      <div className="flex justify-center mb-4">
        {/* Buttons to toggle between categories */}
        <button
          className={`mr-2 px-4 py-2 rounded ${
            showWeb2 ? "bg-[#123524] text-white" : "bg-gradient-to-br from-[#28F8F8] to-[#07A4FA]"
          }`}
          onClick={() => setShowWeb2(true)}
        >
          Web 2
        </button>
        <button
          className={`px-4 py-2 rounded ${
            !showWeb2 ? "bg-[#123524]  text-white" : "bg-gradient-to-br from-[#28F8F8] to-[#07A4FA]"
          }`}
          onClick={() => setShowWeb2(false)}
        >
          Web 3
        </button>
      </div>
      </div>
      <div className=" mt-20">
        {showWeb2 ? (
          <div>
            <div className="grid gap-2 grid-cols-3 p-2">
              {Web2.map((stack, index) => (
                <div key={index}>
                  <span>
                    <strong>{stack.name}</strong>
                  </span>
                  <div className=" w-[150px] h-[130px]">
                    <Image
                      src={stack.image}
                      width={100}
                      height={100}
                      alt={stack.name}
                      quality={100}
                      priority
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="grid gap-2 grid-cols-3">
              {Web3.map((stack, index) => (
                <div key={index}>
                  <div>
                    <strong>{stack.name}</strong>
                  </div>
                  <div className=" w-[150px] h-[130px]">
                  <Image
                    src={stack.image}
                    width={100}
                    height={100}
                    alt={stack.name}
                    quality={100}
                    priority
                  />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechStacks;
