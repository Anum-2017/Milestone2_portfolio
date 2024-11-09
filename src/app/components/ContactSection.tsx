'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ContactSection = () => {
  const socials = [
    { icon: 'github-icon.svg', path: 'https://github.com/Anum-2017' },
    { icon: 'linkedin-icon.svg', path: 'https://www.linkedin.com/in/anum-k-442b2022b/' },
  ];

  return (
    <section id="contact" className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-12 pt-24 pb-24 relative z-10">
      <div className="z-10 flex flex-col">
        <h1 className="text-xl font-bold text-white mb-4">Lets Connect</h1>
        <p className="text-[#ADB7BE] mb-4 max-w-[25rem]">
          I am currently looking for new opportunities, my inbox is always open. 
          Whenever you have a question, or just want to say hi, 
          I will try my best to get back to you!
        </p>
        <div className="flex gap-2">
          {socials.map((social, index) => (
            <Link key={index} href={social.path} target="_blank">
              <Image
                src={`/icons/${social.icon}`}
                alt={`Visit my ${social.path.split('/')[2]} profile`}
                className="w-6 h-6 filter brightness-0 invert transition-all duration-300 ease-in-out hover:brightness-75"
                width={24}
                height={24}
              />
            </Link>
          ))}
        </div>
      </div>

      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label htmlFor="email" className="text-white text-sm font-medium mb-2">Your Email</label>
               <br/> <br/>
            <input
              name="email"
              type="email"
              id="email"
              required
              placeholder="Your email"
              className="bg-[#18191E] border border-[#33353F] text-[#9CA2A9] text-sm rounded-md p-2 w-full transition-all duration-300 ease-in-out focus:border-primary-500 focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="text-white text-sm font-medium mb-2">Subject</label>
                 <br/> <br/>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              placeholder="Just saying hi"
              className="bg-[#18191E] border border-[#33353F] text-[#9CA2A9] text-sm rounded-md p-2 w-full transition-all duration-300 ease-in-out focus:border-primary-500 focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="text-white text-sm font-medium mb-2">Message</label>
               <br/> <br/>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] text-[#9CA2A9] text-sm rounded-md p-2 w-full transition-all duration-300 ease-in-out focus:border-primary-500 focus:outline-none"
              placeholder="Lets talk about..."
            />
          </div>
          <button type="submit" className="bg-gradient-to-r from-blue-500 via-pink-500 to-green-500 text-white font-medium p-2.5 px-5 rounded-md w-full transition-all duration-300 ease-in-out">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
