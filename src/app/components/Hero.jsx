'use client';
import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

export const Hero = () => {
  return (
    <div className="relative overflow-x-hidden w-full">
      {/* Blurred Color Circles */}
      <div className="pointer-events-none">
        <div className="hidden sm:block absolute top-10 left-0 w-60 h-60 bg-red-600/30 rounded-full blur-3xl z-0" />
        <div className="hidden sm:block absolute top-0 right-0 w-72 h-72 bg-green-500/30 rounded-full blur-3xl z-0" />
        <div className="hidden sm:block absolute bottom-0 left-10 w-80 h-80 bg-blue-600/25 rounded-full blur-3xl z-0" />
        <div className="sm:hidden absolute top-16 left-[-3rem] w-40 h-40 bg-red-600/20 rounded-full blur-2xl z-0" />
        <div className="sm:hidden absolute top-0 right-[-2rem] w-44 h-44 bg-green-500/20 rounded-full blur-2xl z-0" />
        <div className="sm:hidden absolute bottom-[-2rem] left-8 w-48 h-48 bg-blue-600/20 rounded-full blur-2xl z-0" />
      </div>

      {/* Hero Section */}
      <section id="home" className="text-center relative overflow-hidden w-full px-4 sm:px-6">
        <p className="italic text-lg mb-4 animate-fade-in">Hey, I’m Shreya Asthana</p>

        <div className="relative inline-block z-10">
          {/* Heading 1 */}
          <h1 className="text-[2.5rem] sm:text-[6rem] font-extrabold tracking-tight leading-none animate-fade-in">
            CREATIVE
          </h1>

          {/* Sub Text */}
          <p className="text-[1.5rem] sm:text-[2.5rem] italic absolute left-2 sm:left-[-6rem] top-[5rem] sm:top-[5rem] animate-fade-in">
            visual
          </p>

          {/* Animated Role with Fixed Height to Avoid Jump */}
          <div className="h-[3.5rem] sm:h-[5.5rem] flex justify-center items-start">
            <h2 className="text-[2.5rem] sm:text-[6rem] font-extrabold tracking-tight leading-none animate-fade-in">
              <Typewriter
                options={{
                  strings: ['DESIGNER', 'DEVELOPER'],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  deleteSpeed: 30,
                  pauseFor: 1500,
                  wrapperClassName: 'typewriter-text',
                }}
              />
            </h2>
          </div>

          {/* Tags */}
          <div className="absolute left-2 sm:left-[-6rem] top-[7.5rem] sm:top-[9rem] rotate-[-15deg] animate-bounce z-20">
            <span className="bg-red-600 text-white px-2 py-0.5 sm:px-4 sm:py-1 rounded-full shadow-xl text-xs sm:text-sm italic">
              UI/UX Design
            </span>
          </div>

          <div className="absolute right-2 sm:right-[-6rem] top-[3rem] sm:top-[5rem] rotate-[15deg] animate-bounce z-20">
            <span className="bg-green-500 text-white px-2 py-0.5 sm:px-4 sm:py-1 rounded-full shadow-xl text-xs sm:text-sm italic">
              Branding
            </span>
          </div>

          <div className="absolute left-2 sm:left-[6rem] top-[16rem] sm:top-[14rem] rotate-[10deg] animate-bounce z-40">
            <span className="bg-blue-600 text-white px-2 py-0.5 sm:px-4 sm:py-1 rounded-full shadow-xl text-xs sm:text-sm italic">
              Web dev
            </span>
          </div>

          {/* Profile Image */}
          <div className="mt-10 animate-fade-in">
            <Image
              src="/my picc.png"
              alt="Shreya Asthana"
              width={500}
              height={500}
              className="rounded-full mx-auto grayscale w-[500px] sm:w-[500px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        .animate-fade-in {
          animation: fade-in 1.2s ease-in forwards;
        }

        .typewriter-text {
          display: inline-block;
          min-width: 150px;
        }
      `}</style>
    </div>
  );
};

export default Hero;
