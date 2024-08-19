import React from 'react';

const Skills = ({ skillsData }) => {
  return (
    <section className="bg-[var(--box-background)] text-[var(--text-color-heading)] py-20" id="skills">
  <div className="section-container">
    <h2 className="text-5xl font-bold text-center mb-12 animate-fadeIn text-[var(--text-color-heading)]">Skills</h2>
    <div className="grid-container">
      {skillsData.map((skill, index) => (
        <div
          key={index}
          className="bg-[var(--box-background)] p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-500"
        >
          <div className="flex items-center justify-center mb-4 text-6xl animate-bounce">
            {skill.icon}
          </div>
          <h3 className="text-2xl font-bold text-center mb-2 text-[var(--text-color-heading)]">{skill.name}</h3>
          <p className="text-center text-lg text-[var(--text-color-heading)]">{skill.level}</p>
          <div className="relative pt-1">
            <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-600">
              <div
                style={{ width: `${skill.level === 'Advanced' ? '90%' : skill.level === 'Intermediate' ? '70%' : '50%'}` }}
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
