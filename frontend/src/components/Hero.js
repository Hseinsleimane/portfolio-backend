import React from "react";
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineFacebook } from "react-icons/ai";
import HeroImg from "../assets/hero-img.png";

const Hero = ({ data }) => {
  return (
    <section id="hero" className="bg-[var(--box-background)] px-5 text-[var(--text-color-heading)] py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
        <h1 className="text-4xl lg:text-6xl">
    Hello, <br />
    I am <span className="glitch text-accent" data-text={data.name}>{data.name}</span><br />
    {data.title}
  </h1>
  <p className="py-5 text-lg lg:text-xl">
    {data.description}
  </p>
  <div className="flex py-5 space-x-4">
    <a href={data.socialLinks.twitter} className="text-accent hover:text-[var(--text-color-heading)] transition-colors" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
      <AiOutlineTwitter size={40} />
    </a>
    <a href={data.socialLinks.linkedin} className="text-accent hover:text-[var(--text-color-heading)] transition-colors" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
      <AiOutlineLinkedin size={40} />
    </a>
    <a href={data.socialLinks.facebook} className="text-accent hover:text-[var(--text-color-heading)] transition-colors" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
      <AiOutlineFacebook size={40} />
    </a>
  </div>
        </div>
        <div className="hero-img relative">
          <div className="relative inline-block transform translate-x-14"> 
            <img
              src={data.image || HeroImg}
              alt={data.name}
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

export default Hero;
