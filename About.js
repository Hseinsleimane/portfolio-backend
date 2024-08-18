import React from "react";
import AboutImg from "../assets/about-img1.png";

const About = ({ data = {} }) => {
  // Destructure the data object with default values
  const {
    name = 'Your Name',
    description = 'A brief description about yourself.',
    paragraph1 = '',
    paragraph2 = '',
    paragraph3 = '',
    imageUrl = AboutImg
  } = data;

  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My Name Is {name}.
          </p>
          <p className="pb-5">
            {description}
          </p>

          <p className="pb-5">{paragraph1}</p>

          <p className="pb-5">{paragraph2}</p>

          <p>{paragraph3}</p>
        </div>

        <div className="about-img" >
          <img
            src={imageUrl}
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
