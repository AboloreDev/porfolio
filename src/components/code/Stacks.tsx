"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import { stacks } from "@/constants/stacks";

const Stacks = () => {
  // Duplicate the brands array to create seamless infinite scroll
  const duplicatedBrands = [...stacks, ...stacks];

  return (
    <div className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
      {/* Infinite Scroll Container */}
      <div className="relative overflow-hidden">
        {/* Gradient masks for smooth fade effect - responsive widths */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 lg:w-20 xl:w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 lg:w-20 xl:w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling Content */}
        <motion.div
          className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12"
          animate={{
            x: [0, -50 * stacks.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          style={{
            width: `${100 * stacks.length}px`,
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <motion.div
              key={`${brand.id}-${index}`}
              className="flex-shrink-0 flex items-center justify-center 
                         w-16 h-12 
                         sm:w-20 sm:h-14 
                         md:w-24 md:h-16 
                         lg:w-28 lg:h-18 
                         xl:w-32 xl:h-20
                         2xl:w-36 2xl:h-22"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-full p-1 sm:p-1.5 md:p-2">
                {/* Brand Logo Image */}
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                  sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, (max-width: 1280px) 112px, 128px"
                  priority={index < 10} // Optimize loading for first 10 logos
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Second Row - Reverse Direction */}
      <div className="relative mt-4 sm:mt-6 md:mt-8 overflow-hidden">
        {/* Gradient masks - responsive widths */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 lg:w-20 xl:w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 lg:w-20 xl:w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12"
          animate={{
            x: [-50 * stacks.length, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
          style={{
            width: `${100 * stacks.length}px`,
          }}
        >
          {[...duplicatedBrands].reverse().map((brand, index) => (
            <motion.div
              key={`reverse-${brand.id}-${index}`}
              className="flex-shrink-0 flex items-center justify-center 
                         w-16 h-12 
                         sm:w-20 sm:h-14 
                         md:w-24 md:h-16 
                         lg:w-28 lg:h-18 
                         xl:w-32 xl:h-20
                         2xl:w-36 2xl:h-22"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-full p-1 sm:p-1.5 md:p-2">
                {/* Brand Logo Image */}
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                  sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, (max-width: 1280px) 112px, 128px"
                  priority={index < 10} // Optimize loading for first 10 logos
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Stacks;
