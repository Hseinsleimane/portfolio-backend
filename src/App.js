import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer";
import Education from "./components/Education.js";
import Experience from "./components/Experience.js";
import Skills from "./components/Skills.js";
import Certificates from "./components/Certificates.js";
import Firstpage from "./pages/Firstpage.js";

function App() {
  return (<>
    
      <Firstpage />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Experience />
      <Certificates/>
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;