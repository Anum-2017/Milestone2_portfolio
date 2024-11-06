"use client"; 

import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        
        {/* Adjust margin on mobile for the image */}
        <Image
          src="/images/about-image.webp" 
          alt="about"
          width={500} 
          height={500} 
          className="object-cover mb-8 sm:mb-0"  // Add bottom margin for mobile screens
        />
        
        <div className="text-container">
          {/* Adjust margin-top for heading on mobile */}
          <h1 className="text-5xl font-bold text-white font-serif mb-4 sm:mt-8">
            About Me
          </h1>
          <p className="text-lg text-[#ADB7BE] leading-relaxed">
            I am a dedicated web developer with a deep passion for crafting visually captivating and highly functional websites. Proficient in HTML, CSS, JavaScript, TypeScript, and frameworks such as Next.js and Tailwind CSS, I excel at creating seamless user interfaces that enhance the browsing experience. My mission is to design innovative digital landscapes that engage users and deliver outstanding results. Driven by the challenge of pushing boundaries, I continually hone my skills to produce work that resonates long after it has been experienced.
            <br /> <br />
            Currently, my focus is on expanding my skill set. I am actively mastering new programming languages, exploring diverse courses, and delving into emerging technologies within the industry. Specifically, I am deeply engaged in Artificial Intelligence, Web 3.0, and the Metaverse.
          </p>
        </div>
        
      </div> 
    </section>
  );
};

export default AboutSection;
