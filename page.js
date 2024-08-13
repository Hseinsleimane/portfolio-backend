import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certificates from './components/Certificates';



function page() {
  return (
    <>
      <section  id="page"></section>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Experience />
      <Certificates />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default page;
