import React from "react";
import AboutImg from "../assets/about-img1.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My Name Is Ali Mantache everyone calls me Ali.
          </p>
          <p className="pb-5">
          Passionate about science and technology, 
          </p>

          <p>I work as a Web Development Instructor. Able to learn new things quickly and always have new ideas.</p>

          <p>
          Looking forward to finding more experiences to add to my profile. (In order to find myself out there)
          </p>
        </div>

        <div className="about-img" >
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
            style={{ width: '400px', height: '400px'}}
          />
        </div>
      </div>
    </section>
  );
};

export default About;