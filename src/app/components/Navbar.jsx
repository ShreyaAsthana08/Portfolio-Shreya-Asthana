import React from 'react'
import Link from 'next/link'


export const Navbar = () => {
  return (
    <div>
         {/* Navbar */}
      <nav className="flex justify-between items-center text-white mb-10">
        <Link href="#" className="underline text-lg font-medium">Portfolio</Link>
        <div className="space-x-6">
          <Link href="#home" className="underline">Home</Link>
          <Link href="#visual-section" className="underline">About</Link>
          <Link href="#projects" className="underline">Designing</Link>
          <Link href="#webdev" className="underline">Web Dev</Link>
          
        
          <Link href="#skills" className="underline">Skills</Link>
          <Link href="#contact" className="underline">Contact</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
