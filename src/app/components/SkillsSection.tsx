import React from "react";
import { IoMdCheckboxOutline } from "react-icons/io";

const SkillsSection = () => {
  const skills = [
    { name: "HTML", progress: 100 },
    { name: "CSS", progress: 95 },
    { name: "Javascript / Typescript", progress: 90 },
    { name: "NEXT.JS", progress: 70 },
    { name: "TAILWIND CSS", progress: 75 },
    { name: "CANVA", progress: 85 },
    { name: "PHP", progress: 90 },
    { name: "MY SQL", progress: 60 },
    { name: "Bootstrap", progress: 100 }
  ];

  return (
    <section id="skills" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col font-serif text-center w-full mb-20">
            <h1 className="sm:text-5xl text-5xl font-serif font-bold title-font text-white">
              My
              <span className="text-5xl text-white sm:text-5xl font-serif font-bold ml-[15px]">
                Skills
              </span>
            </h1>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="shadow-lg rounded-lg p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 flex items-center justify-center bg-pink-500 text-white rounded-full">
                      <IoMdCheckboxOutline className="text-2xl" />
                    </div>
                  </div>
                  <h2 className="ml-3 text-xl font-semibold text-white">{skill.name}</h2>
                </div>
                <p className="text-sm font-medium text-pink-500">{skill.progress}%</p>
              </div>

              <div className="relative w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-pink-500 h-2.5 rounded-full"
                  style={{ width: `${skill.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
