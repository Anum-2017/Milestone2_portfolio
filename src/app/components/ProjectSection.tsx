"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import {motion, useInView} from "framer-motion"; 

const projectsData = [
  {
    id: 1,
    title: "Facebook Login Page Clone",
    description: "Facebook login page clone using next.js and tailwind css.",
    image: "images/projects/facebookclone.png",
    tag: ["All", "Next.JS"],
    gitUrl: "https://github.com/Anum-2017/facebook_login_page_clone.git",
    previewUrl: "https://facebook-login-page-clone-sand.vercel.app/",
  },
  {
    id: 2,
    title: "Calculator",
    description: "Calculator built with HTML, CSS, JavaScript and deployed on Vercel ",
    image: "images/projects/calculator.png",
    tag: ["All", "HTML/CSS/JS"],
    gitUrl: "https://github.com/Anum-2017/calculator_using_html_css_javascript.git",
    previewUrl: "https://calculator-using-html-css-javascript-gules.vercel.app/",
  },
  {
    id: 3,
    title: "Typescript Word Counter Project",
    description: "Word Counter - Dynamic Word Counter: Accurate Text Analysis with TypeScript Precision.",
    image: "images/projects/word-counter.jpg",
    tag: ["All", "Typescript"],
    gitUrl: "https://github.com/Anum-2017/Project05_word_counter.git",
  },
  {
    id: 4,
    title: "Travel Website",
    description: "Responsive Travel Website using html css javascript",
    image: "images/projects/tourwebsite.png",
    tag: ["All", "HTML/CSS/JS"],
    gitUrl: "https://github.com/Anum-2017/Travel-Website-using-html-css-javascript.git",
    previewUrl: "https://travel-website-using-html-css-javascript.vercel.app/",
  },
  {
    id: 5,
    title: "Number Guessing game",
    description: "This guess the number game is a short TypeScript/Node.js project that allows the user to guess the number generated by the computer.",
    image: "images/projects/numberguessing.png",
    tag: ["All", "Typescript"],
    gitUrl: "https://github.com/Anum-2017/Project01_number_guessing-game.git",
  },
  {
    id: 6,
    title: "Landing Page Website",
    description: "Website Landing page design using html css javascript",
    image: "images/projects/landingpage.png",
    tag: ["All", "HTML/CSS/JS"],
    gitUrl: "https://github.com/Anum-2017/Website-Landing-Page-using-html-css.git",
    previewUrl: "https://website-landing-page-using-html-css.vercel.app/",
  },
  {
    id: 7,
    title: "Ecommerce Website (Figma Template)",
    description: "Ecommerce Website using next.js and tailwind css.",
    image: "images/projects/ecommerce website.png",
    tag: ["All", "Next.JS"],
    gitUrl: "https://github.com/Anum-2017/shop.co-eCommerce-website.git",
    previewUrl: "https://shop-co-e-commerce-website.vercel.app/",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = filter === "All"
    ? projectsData
    : projectsData.filter(project => project.tag.includes(filter));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <div className="py-16">
        <div className="container mx-auto px-4">
        <div className="flex flex-col font-serif text-center w-full mb-20">
            <h1 className="sm:text-5xl text-5xl font-serif font-bold title-font text-white">
              My
              <span className="text-5xl text-white sm:text-5xl font-serif font-bold ml-[15px]">
                Projects
              </span>
            </h1>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["All","Typescript","HTML/CSS/JS","Next.JS"].map((tag) => (
              <button
                key={tag}
                className={`rounded-full border-2 px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl text-white cursor-pointer transition-colors duration-300 ${
                  filter === tag ? 'border-primary-500' : 'border-slate-600 hover:border-white'
                }`}
                onClick={() => setFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          <ul ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.li 
                key={index}
                variants={cardVariants} 
                initial="initial" 
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.2 }}
              >
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
