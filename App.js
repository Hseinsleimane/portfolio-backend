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


import Login from './pages/Login';

function App() {
  return (
    <PortfolioProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
            <Header/>
              <Firstpage/>
      <Footer />
            </>
          } />
          
          <Route path="/Firstpage" element={<Firstpage />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Education" element={<Education/>} />
          <Route path="/pages/Login" element={<login />} />
          <Route path="/Certificates" element={<Certificates />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Hero" element={<Hero />} />
        </Routes>
      </Router>
    </PortfolioProvider>
  );
}

export default App;
