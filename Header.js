import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [portfolioDropdown, setPortfolioDropdown] = useState(false);

  const handleToggle = () => setToggle(!toggle);
  const handlePortfolioToggle = () => setPortfolioDropdown(!portfolioDropdown);

  // Function to scroll to a specific section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
     
      });
    }
  };

  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10">
      <a href="#hero" className="logo text-2xl font-bold text-accent">
        Welcome to my Portfolio
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex items-center space-x-8">
          <li>
            <a href="/#firstpage">My Info</a>
          </li>

          <li className="relative group">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
                handlePortfolioToggle();
              }}
              className="hover:text-accent flex items-center"
            >
              View Portfolio
            </a>
            <ul
              className={`absolute left-0 mt-2 bg-primary p-2 rounded ${
                portfolioDropdown ? "block" : "hidden"
              }`}
            >
              <li>
                <a href="/#about" className="block px-4 py-2 hover:text-accent">
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#education"
                  className="block px-4 py-2 hover:text-accent"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="/#experience"
                  className="block px-4 py-2 hover:text-accent"
                >
                  Experience
                </a>
              </li>
              <li>
                <a href="/#skills" className="block px-4 py-2 hover:text-accent">
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="/#projects"
                  className="block px-4 py-2 hover:text-accent"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/#certificates"
                  className="block px-4 py-2 hover:text-accent"
                >
                  Certificates
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="block px-4 py-2 hover:text-accent"
                >
                  Contact
                </a>
              </li>
              <li>
            <a href="/#login">Login</a>
          </li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul className="flex flex-col">
          <li>
            <a href="/#firstpage">My Info</a>
          </li>
          <li className="relative">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
                handlePortfolioToggle();
              }}
              className="flex items-center"
            >
              View Portfolio
            </a>
            <ul
              className={`mt-2 bg-primary p-2 rounded ${
                portfolioDropdown ? "block" : "hidden"
              }`}
            >
              <li>
                <a href="/#about" className="block px-4 py-2">
                  About
                </a>
              </li>
              <li>
                <a href="/#education" className="block px-4 py-2">
                  Education
                </a>
              </li>
              <li>
                <a href="/#experience" className="block px-4 py-2">
                  Experience
                </a>
              </li>
              <li>
                <a href="/#skills" className="block px-4 py-2">
                  Skills
                </a>
              </li>
              <li>
                <a href="/#projects" className="block px-4 py-2">
                  Projects
                </a>
              </li>
              <li>
                <a href="/#certificates" className="block px-4 py-2">
                  Certificates
                </a>
              </li>
              <li>
                <a href="/#contact" className="block px-4 py-2">
                  Contact
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;
