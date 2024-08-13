import React from 'react';
import { FaReact, FaNodeJs,  FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact className="text-blue-500" />, level: 'Advanced' },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 'Intermediate' },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" />, level: 'Intermediate' },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, level: 'Advanced' },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" />, level: 'Advanced' },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" />, level: 'Advanced' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" />, level: 'Advanced' },
];

const Skills = () => {
  return (
    <section className="bg-gray-900 text-white py-20" id="skills">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12 animate-fadeIn">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-fadeIn">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-500"
            >
              <div className="flex items-center justify-center mb-4 text-6xl animate-bounce">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">{skill.name}</h3>
              <p className="text-center text-lg">{skill.level}</p>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-600">
                  <div
                    style={{ width: `${skill.level === 'Advanced' ? '90%' : '70%'}` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
