'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const About = () => {
  const [animateImages, setAnimateImages] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('visual-section');
      if (section && section.getBoundingClientRect().top < window.innerHeight * 0.8) {
        setAnimateImages(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="visual-section" className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10 mt-32 px-4 lg:px-0 overflow-hidden">
      {/* Text Section */}
      <div className="max-w-xl text-left animate-fade-in">
        <p className="text-2xl sm:text-3xl leading-relaxed">
          I create <span className="text-red-500 font-semibold">visually striking</span> and user-centered designs
          that blend creativity with functionality.
        </p>
      </div>

      {/* Image Stack */}
      <div className="relative w-full lg:w-1/2 h-auto max-w-[500px] flex lg:block justify-center items-center">
        {/* Mobile View: Stack Images */}
        <div className="flex flex-col gap-4 lg:hidden">
          <Image
            src="/img1.png"
            alt="Project 1"
            width={250}
            height={300}
            className="rounded-xl shadow-xl mx-auto w-[85%] h-auto"
          />
          <Image
            src="/img2.png"
            alt="Project 2"
            width={250}
            height={300}
            className="rounded-xl shadow-xl mx-auto w-[85%] h-auto"
          />
          <Image
            src="/img3.png"
            alt="Project 3"
            width={250}
            height={300}
            className="rounded-xl shadow-xl mx-auto w-[85%] h-auto"
          />
        </div>

        {/* Desktop View: Animated Overlap */}
        <div className="hidden lg:block relative h-[500px] w-full">
          {/* Center Image */}
          <Image
            src="/img1.png"
            alt="Project 1"
            width={200}
            height={300}
            className={`absolute top-0 left-1/2 -translate-x-1/2 rounded-xl shadow-xl transition-all duration-700 ease-out 
              ${animateImages ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ zIndex: 10 }}
          />

          {/* Left Image */}
          <Image
            src="/img2.png"
            alt="Project 2"
            width={250}
            height={300}
            className={`absolute top-16 left-[10%] rounded-xl shadow-xl transition-all duration-700 ease-out delay-200
              ${animateImages ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ zIndex: 5 }}
          />

          {/* Right Image */}
          <Image
            src="/img3.png"
            alt="Project 3"
            width={250}
            height={300}
            className={`absolute top-20 right-[10%] rounded-xl shadow-xl transition-all duration-700 ease-out delay-400
              ${animateImages ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ zIndex: 1 }}
          />
        </div>
      </div>

      {/* Fade animation */}
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default About;
