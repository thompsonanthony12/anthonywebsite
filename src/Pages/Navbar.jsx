import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-950 text-white p-5">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-500">My Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li>
            <a href="#about" className="hover:text-indigo-400">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-indigo-400">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-indigo-400">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-indigo-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 text-center">
          <li>
            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>
          </li>

          <li>
            <a href="#skills" onClick={() => setOpen(false)}>
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" onClick={() => setOpen(false)}>
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
