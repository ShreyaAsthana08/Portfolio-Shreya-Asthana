'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-4 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <Link href="#" className="underline text-lg font-medium">
          Portfolio
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl md:hidden focus:outline-none"
        >
          ☰
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="#home" className="underline">
            Home
          </Link>
          <Link href="#visual-section" className="underline">
            About
          </Link>
          <Link href="#projects" className="underline">
            Designing
          </Link>
          <Link href="#webdev" className="underline">
            Web Dev
          </Link>
          <Link href="#skills" className="underline">
            Skills
          </Link>
          <Link href="#contact" className="underline">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="flex flex-col mt-4 space-y-2 md:hidden text-center">
          <Link href="#home" className="underline">
            Home
          </Link>
          <Link href="#visual-section" className="underline">
            About
          </Link>
          <Link href="#projects" className="underline">
            Designing
          </Link>
          <Link href="#webdev" className="underline">
            Web Dev
          </Link>
          <Link href="#skills" className="underline">
            Skills
          </Link>
          <Link href="#contact" className="underline">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
