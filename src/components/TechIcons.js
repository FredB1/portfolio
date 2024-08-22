import React from 'react'
import { FaCss3, FaHtml5, FaNodeJs, FaReact, FaPhp, FaWordpress } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMysql } from 'react-icons/si';


const techIconMap = {
    'CSS': <FaCss3 />,
    'HTML': <FaHtml5 />,
    'Node.js': <FaNodeJs />,
    'React': <FaReact />,
    'PHP': <FaPhp />,
    'Nextjs': <SiNextdotjs />,
    'Tailwind': <SiTailwindcss />,
    'WordPress': <FaWordpress />,
    'MySQL': <SiMysql />,
};
const TechIcons = ({ tech }) => {
    return (
        <span className="inline-block p-1 text-5xl font-bold text-white bg-gray-600 rounded">
            {techIconMap[tech]}
        </span>
    )
}

export default TechIcons