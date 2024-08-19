import React from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Experience = ({ experienceData = [] }) => {
  if (experienceData.length === 0) {
    return null;
  }

  return (
    <section className="bg-[var(--box-background)] text-[var(--text-color-heading)] px-5 py-32" id="experience">
  <div className="container mx-auto">
    <h2 className="text-5xl font-bold text-center mb-12 animate-fadeIn text-[var(--text-color-heading)]">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-fadeIn">
          {experienceData.map((experience, index) => (
            <div
              key={index}
              className="bg-[var(--box-background)] p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-500"
            >
              <div className="flex items-center justify-center mb-4 text-4xl text-blue-500 animate-pulse">
                <FaBriefcase />
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">{experience.role}</h3>
              <h4 className="text-xl text-center mb-2">{experience.company}</h4>
              <div className="flex items-center justify-center mb-4 text-gray-400">
                <FaCalendarAlt className="mr-2" />
                <span>{experience.period}</span>
              </div>
              <p className="text-center text-lg">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
