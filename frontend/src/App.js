// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PortfolioProvider } from './context/PortfolioContext'; // Import the PortfolioProvider
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

import Firstpage from './pages/Firstpage';

import ManageSkills from './pages/ManageSkills';
import ManageEducation from './pages/ManageEducation';
import ManageProjects from './pages/ManageProjects';
import ManageExperience from './pages/ManageExperience';
import ManageCertificates from './pages/ManageCertificates';

function App() {
  return (
    <PortfolioProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Firstpage/>
            
    
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
          } />
          
          <Route path="/manage-skills" element={<ManageSkills />} />
          <Route path="/manage-education" element={<ManageEducation />} />
          <Route path="/manage-projects" element={<ManageProjects />} />
          <Route path="/manage-experience" element={<ManageExperience />} />
          <Route path="/manage-certificates" element={<ManageCertificates />} />
        </Routes>
      </Router>
    </PortfolioProvider>
  );
}

export default App;
