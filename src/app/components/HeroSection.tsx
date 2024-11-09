"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import images from '../../../public/images/pic 2.png'; // Ensure the path is correct

const HeroSection = () => {
  return (
    <section className="pt-24 pb-24 flex justify-center items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Hero Text (Left side) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-white text-center md:text-left md:w-[50%] mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 via-pink-500 to-green-500 text-transparent bg-clip-text">
              Hello, I am{' '}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Anum Kamal', 1000,
                'Software Engineer', 1000,
                'Web Developer', 1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-4xl md:text-5xl inline-block"
            />
          </h1>
          <p className="text-gray-400 text-base mb-6">
            Welcome to my portfolio! Scroll down to discover more about my skills, projects, and how I can help bring your ideas to life.
          </p>
          <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0 md:flex-row md:space-x-6">
            <a
              href="https://www.linkedin.com/in/anum-k-442b2022b/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 via-pink-500 to-green-500 text-white py-3 px-8 rounded-full transition-all duration-300 hover:bg-opacity-20"
            >
              Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/1Lm2bNrQ_EUL31TNnc2TdqVN2HUj5EuCz/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 via-pink-500 to-green-500 text-white py-3 px-8 rounded-full transition-all duration-300 hover:bg-opacity-20"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Hero Image (Right side) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center w-full md:w-[45%]">
          <div className="relative w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-black transition-all duration-300">
            <Image
              src={images}
              alt="profile"
              className="object-cover"
              width={320}
              height={320}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
