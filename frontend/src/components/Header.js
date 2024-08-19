import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Switch from "react-switch";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [portfolioDropdown, setPortfolioDropdown] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleToggle = () => setToggle(!toggle);
  const handlePortfolioToggle = () => setPortfolioDropdown(!portfolioDropdown);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <header className="flex justify-between px-5 py-2 fixed w-full z-10" style={{ backgroundColor: 'var(--header-background)', color: 'var(--header-text-color)' }}>
      <a href="#hero" className="logo text-2xl font-bold">
        Welcome to my Portfolio
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center">
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
              className="flex items-center"
            >
              View Portfolio
            </a>
            <ul
              className={`absolute left-0 mt-2 p-2 rounded ${portfolioDropdown ? "block" : "hidden"}`}
              style={{ backgroundColor: 'var(--header-background)' }}
            >
              <li>
                <a href="/#about" className="block px-4 py-2">About</a>
              </li>
              <li>
                <a href="/#education" className="block px-4 py-2">Education</a>
              </li>
              <li>
                <a href="/#experience" className="block px-4 py-2">Experience</a>
              </li>
              <li>
                <a href="/#skills" className="block px-4 py-2">Skills</a>
              </li>
              <li>
                <a href="/#projects" className="block px-4 py-2">Projects</a>
              </li>
              <li>
                <a href="/#certificates" className="block px-4 py-2">Certificates</a>
              </li>
              <li>
                <a href="/#contact" className="block px-4 py-2">Contact</a>
              </li>
              <li>
                <a href="/#login">Login</a>
              </li>
            </ul>
          </li>
          <li className="flex items-center">
            <span className="mr-2">Theme:</span>
            <Switch 
              onChange={toggleTheme} 
              checked={theme === 'dark'} 
              onColor="#000"
              offColor="#ddd"
              onHandleColor="#fff"
              offHandleColor="#000"
              checkedIcon={false}
              uncheckedIcon={false}
              height={20}
              width={40}
            />
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}>
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
              className={`mt-2 p-2 rounded ${portfolioDropdown ? "block" : "hidden"}`}
              style={{ backgroundColor: 'var(--header-background)' }}
            >
              <li>
                <a href="/#about" className="block px-4 py-2">About</a>
              </li>
              <li>
                <a href="/#education" className="block px-4 py-2">Education</a>
              </li>
              <li>
                <a href="/#experience" className="block px-4 py-2">Experience</a>
              </li>
              <li>
                <a href="/#skills" className="block px-4 py-2">Skills</a>
              </li>
              <li>
                <a href="/#projects" className="block px-4 py-2">Projects</a>
              </li>
              <li>
                <a href="/#certificates" className="block px-4 py-2">Certificates</a>
              </li>
              <li>
                <a href="/#contact" className="block px-4 py-2">Contact</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="flex items-center mt-4">
          <span className="mr-2">Theme:</span>
          <Switch 
            onChange={toggleTheme} 
            checked={theme === 'dark'} 
            onColor="#000"
            offColor="#ddd"
            onHandleColor="#fff"
            offHandleColor="#000"
            checkedIcon={false}
            uncheckedIcon={false}
            height={20}
            width={40}
          />
        </div>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;
