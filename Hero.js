import React from "react";
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineFacebook } from "react-icons/ai";

const Hero = ({ data }) => {
  return (
    <section id="hero" className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />
            I am <span className="text-accent">{data.name}</span><br />
            {data.title}
          </h1>
          <p className="py-5 text-lg lg:text-xl">
            {data.description}
          </p>
          <div className="flex py-5 space-x-4">
            <a href={data.socialLinks.twitter} className="text-accent hover:text-white transition-colors" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <AiOutlineTwitter size={40} />
            </a>
            <a href={data.socialLinks.linkedin} className="text-accent hover:text-white transition-colors" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <AiOutlineLinkedin size={40} />
            </a>
            <a href={data.socialLinks.facebook} className="text-accent hover:text-white transition-colors" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <AiOutlineFacebook size={40} />
            </a>
          </div>
        </div>
        <div className="hero-img">
          <img src={data.image} alt={data.name} className="w-[80%] ml-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;