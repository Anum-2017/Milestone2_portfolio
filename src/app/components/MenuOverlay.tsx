import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { XMarkIcon } from "@heroicons/react/24/solid";


interface LinkItem {
  path: string;
  title: string;
}

interface MenuOverlayProps {
  links: LinkItem[];
  setNavbarOpen: (isOpen: boolean) => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links, setNavbarOpen }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-black bg-opacity-90 p-4 z-50">
      <div className="flex justify-between items-center mb-4">
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          className="text-2xl md:text-5xl text-white font-semibold cursor-pointer"
          onClick={() => setNavbarOpen(false)}
        >
          Anum Kamal
        </ScrollLink>
        <button onClick={() => setNavbarOpen(false)} className="text-white z-50">
          <XMarkIcon className="h-8 w-8" />
        </button>
      </div>
      <ul className="flex flex-col items-center">
        {links.map((link, index) => (
          <li key={index} className="mb-4">
            <ScrollLink
              to={link.path}
              smooth={true}
              duration={500}
              className="text-white hover:text-primary-500 cursor-pointer"
              onClick={() => setNavbarOpen(false)}
            >
              {link.title}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
