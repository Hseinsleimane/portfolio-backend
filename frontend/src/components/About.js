import React from "react";
import AboutImg from "../assets/about-img1.png";
 
const About = ({ aboutData }) => {
  return (
    <section className="bg-[var(--box-background)] text-[var(--text-color-heading)] px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-[var(--text-color-heading)] pb-2">
    About Me
  </h2>
          <p className="pb-5">Hi, My Name Is {aboutData.name}.</p>
          <p className="pb-5">{aboutData.description}</p>
          <p className="pb-5">{aboutData.paragraph1}</p>
          <p className="pb-5">{aboutData.paragraph2}</p>
          <p>{aboutData.paragraph3}</p>
        </div>
        <div className="about-img relative">
          <div className="img-wrapper relative transform translate-x-12">
            <img
              src={aboutData.imageUrl || AboutImg}
              alt="coding illustration"
              className="relative z-10 lg:w-[80%] md:ml-auto"
              style={{ width: '400px', height: '400px' }}
            />
            <div className="neon-effect absolute inset-0 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
