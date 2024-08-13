import React from 'react';
import './App.css';
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

import Login from './pages/Login';
function App() {
  return (
    <>
    
    <Header />
    <Login/>
    
    
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

export default App;
