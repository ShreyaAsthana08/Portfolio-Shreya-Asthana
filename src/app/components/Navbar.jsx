'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-gray-300 px-4 py-4 shadow-md">
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
          className="text-gay-300 text-2xl md:hidden focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 px-4 text-center space-y-3">
          <NavLinks />
          <ResumeButton />
        </div>
      )}
    </nav>
  );
};

// Download Resume Button
const ResumeButton = () => (
  <a
    href="https://drive.google.com/file/d/1jfCeBsxxJy1Ux06GQCymmJVjmIktqHC6/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition duration-300 text-sm"
  >
    Download Resume
  </a>
);

//Navigation Links
const NavLinks = () => (
  <>
    <Link href="#home" className="hover:underline">Home</Link>
    <Link href="#visual-section" className="hover:underline">About</Link>
    <Link href="#projects" className="hover:underline">Designing</Link>
    <Link href="#webdev" className="hover:underline">Web Dev</Link>
    <Link href="#skills" className="hover:underline">Skills</Link>
    <Link href="#contact" className="hover:underline">Contact</Link>
  </>
);

export default Navbar;
