import React from "react";
import Scrollspy from "react-scrollspy";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100">
      <nav className="max-w-xl md:max-w-6xl mx-auto flex justify-center px-6 py-4 md:py-6">
        <Scrollspy
          items={["home", "work", "about", "proficiencies", "contact"]}
          currentClassName="text-black"
          className="flex justify-center gap-6 md:gap-10 text-xs md:text-sm tracking-wide text-gray-600"
        >
          <li>
            <a href="#home" className="hover:text-black transition">
              Home
            </a>
          </li>

          <li>
            <a href="#work" className="hover:text-black transition">
              Work
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-black transition">
              About
            </a>
          </li>

          <li>
            <a href="#proficiencies" className="hover:text-black transition">
              Proficiencies
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-black transition">
              Contact
            </a>
          </li>
        </Scrollspy>
      </nav>
    </div>
  );
};

export default Navbar;
