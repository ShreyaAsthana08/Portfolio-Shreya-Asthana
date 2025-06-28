'use client'
import React from 'react'
import Image from 'next/image'

export const Hero = () => {
  return (
    <div>
      {/* Blurred Color Circles */}
      <div className="pointer-events-none">
        {/* Red (UI/UX Design) */}
        <div className="hidden sm:block absolute top-10 left-0 w-60 h-60 bg-red-600/30 rounded-full blur-3xl z-0" />
        {/* Green (Branding) */}
        <div className="hidden sm:block absolute top-0 right-0 w-72 h-72 bg-green-500/30 rounded-full blur-3xl z-0" />
        {/* Blue (Web dev) */}
        <div className="hidden sm:block absolute bottom-0 left-10 w-80 h-80 bg-blue-600/25 rounded-full blur-3xl z-0" />
        {/* Mobile: smaller, less intrusive */}
        <div className="sm:hidden absolute top-16 left-[-3rem] w-40 h-40 bg-red-600/20 rounded-full blur-2xl z-0" />
        <div className="sm:hidden absolute top-0 right-[-2rem] w-44 h-44 bg-green-500/20 rounded-full blur-2xl z-0" />
        <div className="sm:hidden absolute bottom-[-2rem] left-8 w-48 h-48 bg-blue-600/20 rounded-full blur-2xl z-0" />
      </div>

      {/* Hero Section */}
      <section id='home' className="text-center relative overflow-hidden">
        <p className="italic text-lg mb-4 animate-fade-in">Hey, I’m Shreya Asthana</p>

        <div className="relative inline-block z-10">
          <h1 className="text-[3.5rem] sm:text-[6rem] font-extrabold tracking-tight leading-none animate-slide-up">
            CREATIVE
          </h1>
          <p className="text-[2rem] sm:text-[2.5rem] italic absolute left-[-4rem] sm:left-[-6rem] top-[4rem] sm:top-[5rem] animate-fade-in">
            visual
          </p>
          <h2 className="text-[3.5rem] sm:text-[6rem] font-extrabold tracking-tight leading-none animate-slide-up">
            DESIGNER
          </h2>

          {/* Tags */}
          <div className="absolute left-[-10rem] sm:left-[-6rem] top-[7rem] sm:top-[9rem] rotate-[-15deg] animate-bounce">
            <span className="bg-red-600 text-white px-4 py-1 rounded-full shadow-xl text-sm italic">UI/UX Design</span>
          </div>
          <div className="absolute right-[-4rem] sm:right-[-6rem] top-[3rem] sm:top-[5rem] rotate-[15deg] animate-bounce">
            <span className="bg-green-500 text-white px-4 py-1 rounded-full shadow-xl text-sm italic">Branding</span>
          </div>
          <div className="absolute left-[4rem] sm:left-[6rem] top-[12rem] sm:top-[14rem] rotate-[10deg] animate-bounce">
            <span className="bg-blue-600 text-white px-4 py-1 rounded-full shadow-xl text-sm italic">Web dev</span>
          </div>

          {/* Profile Image */}
          <div className=" animate-fade-in">
            <Image
              src="/my puc.png"
              alt="Shreya Asthana"
              width={300}
              height={240}
              className="rounded-full mx-auto grayscale"
            />
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease-in forwards;
        }
      `}</style>
    </div>
  )
}

export default Hero;