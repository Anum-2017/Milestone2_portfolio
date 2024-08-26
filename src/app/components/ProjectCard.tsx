import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl?: string;  
  previewUrl?: string;  
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  title,
  description,
  gitUrl = "#",
  previewUrl = "#"
}) => {

  if (!imgUrl || !title || !description) {
    return null;
  }

  return (
    <div className="bg-[#181818] rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <div className='h-48 md:h-48 lg:h-52 relative group'>
        <div
          className='w-full h-full bg-center bg-cover'
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
            <Link href={gitUrl} className='h-12 w-12 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link transition-all duration-300'>
              <CodeBracketIcon className='h-6 w-6 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white transition-all duration-300' />
            </Link>
            <Link href={previewUrl} className='h-12 w-12 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link transition-all duration-300'>
              <EyeIcon className='h-6 w-6 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white transition-all duration-300' />
            </Link>
          </div>
        </div>
      </div>
      <div className='text-white p-4'>
        <h5 className='text-lg font-semibold text-center mb-2'>{title}</h5>
        <p className='text-[#ADB7BE] text-sm text-center '>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;