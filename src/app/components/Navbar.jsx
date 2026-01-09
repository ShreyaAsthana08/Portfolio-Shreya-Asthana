'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on link click
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 z-50 bg-black/60 text-gray-300 px-4 py-4 shadow-md w-full max-w-full">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <Link href="#home" className="text-lg font-bold tracking-wide">
          Shreya’s Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLinks />
          <ResumeButton />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-300 text-2xl md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-40">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-6 text-3xl text-gray-300"
            aria-label="Close menu"
          >
            ×
          </button>
          <div className="flex flex-col items-center space-y-4">
            <NavLinks onClick={handleLinkClick} />
            <ResumeButton />
          </div>
        </div>
      )}
    </nav>
  );
};

// Download Resume Button
const ResumeButton = () => (
 <a
  href="https://drive.google.com/file/d/1D9JOFHrpPmcGtehDI6lK2BNPm0_Wl4JX/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="relative inline-block px-1 py-1 rounded-lg group mt-2 md:mt-0"
>
  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-green-500 to-red-500 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
  <span className="relative block px-4 py-2 rounded-lg bg-white text-black font-medium text-sm group-hover:bg-transparent group-hover:text-white transition-all duration-300 border border-transparent group-hover:border-white">
    Download Resume
  </span>
</a>

);

// Navigation Links
const NavLinks = ({ onClick }) => (
  <div className="flex flex-col md:flex-row md:space-x-6 items-center gap-2 md:gap-0">
    <Link href="#home" className="hover:underline decoration-red-400 underline-offset-4 px-2 py-2" onClick={onClick}>Home</Link>
    <Link href="#visual-section" className="hover:underline decoration-red-400 underline-offset-4 px-2 py-2" onClick={onClick}>About</Link>
    <Link href="#projects" className="hover:underline decoration-red-400 underline-offset-4 px-2 py-2" onClick={onClick}>Designing</Link>
    <Link href="#webdev" className="hover:underline decoration-red-400 underline-offset-4 px-2 py-2" onClick={onClick}>Web Dev</Link>
    <Link href="#skills" className="hover:underline decoration-red-400 underline-offset-4 px-2 py-2" onClick={onClick}>Skills</Link>
    <Link href="#contact" className="hover:underline decoration-red-400 underline-offset-4 px-2 py-2" onClick={onClick}>Contact</Link>
  </div>
);


export default Navbar;