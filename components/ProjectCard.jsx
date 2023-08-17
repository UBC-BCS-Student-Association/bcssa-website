import React from 'react';
import Image from 'next/image';


const ProjectCard = ({ 
    name,
    image,
    blurb,
    videoLink,
    projectLink,
 }) => {
  return (
    <div 
        className="border border-gray-300 p-4 m-4 rounded-lg shadow-md"
    >
        <a href={videoLink || projectLink} target="_blank" rel="noopener noreferrer">
            <Image 
                // layout="fill"
                // objectFit="cover"
                className="rounded-t-lg"
                src={image} 
                alt={name} 
                width={300}
                height={300} 
            />
            <h3 className="mt-2 text-xl text-center font-semibold">{name}</h3>
        </a>
        <p className="mt-2 text-gray-600" break-words w-full>{blurb}</p>
    </div>
  );
};

export default ProjectCard;
