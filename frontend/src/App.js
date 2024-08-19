import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
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
import { AnimatePresence, motion } from 'framer-motion';
import { FaCog } from 'react-icons/fa';

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 1.2,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Header />
            <Login/>
            <Firstpage />
            <Footer />
          </motion.div>
        } />
        <Route path="/Firstpage" element={<Firstpage />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/pages/Login" element={<Login />} />
        <Route path="/Certificates" element={<Certificates />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Hero" element={<Hero />} />
      </Routes>
    </AnimatePresence>
  );
};

const FloatingCogs = () => {
  return (
    <div className="fixed bottom-10 right-10 flex space-x-4">
      <FaCog className="text-4xl text-gray-500 animate-spin-slow" />
      <FaCog className="text-3xl text-gray-500 animate-spin-slow" />
      <FaCog className="text-2xl text-gray-500 animate-spin-slow" />
    </div>
  );
};

function App() {
  return (
    <PortfolioProvider>
      <Router>
        <Header />
        <FloatingCogs />
        <AnimatedRoutes />
      </Router>
    </PortfolioProvider>
  );
}

export default App;
