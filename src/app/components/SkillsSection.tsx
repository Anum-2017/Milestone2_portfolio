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
    <section id="skills" className=" text-gray-200 py-16 px-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col font-serif text-center w-full mb-20">
            <h1 className="sm:text-5xl text-5xl font-serif font-bold title-font text-white">
              My
              <span className="text-5xl text-white sm:text-5xl font-serif font-bold ml-[15px]">
                Skills
              </span>
            </h1>
          </div>

        <div className="flex flex-wrap gap-6 justify-between">
          {skills.map((skill, index) => (
            <div className="p-8 rounded-lg flex flex-col justify-between flex-1 min-w-[280px] max-w-[300px] transition-transform transform hover:scale-105 hover:shadow-lg" key={index}>
              <div className="flex items-center mb-5">
                <div className="w-10 h-10 bg-pink-500 rounded-full flex justify-center items-center mr-4">
                  <IoMdCheckboxOutline className="text-white text-xl" />
                </div>
                <h2 className="text-xl font-semibold text-white">{skill.name}</h2>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="w-full h-2 bg-gray-400 rounded-full relative">
                  <div
                    className="bg-pink-500 h-full rounded-full"
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
                <p className="font-bold text-pink-500 ml-4">{skill.progress}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
