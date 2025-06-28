'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import Image from 'next/image';


export const About = () => {


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
    <div>
  {/* Visual Design Section */}
        <section id="visual-section" className="flex flex-col-reverse sm:flex-row justify-between items-center gap-10 mt-32">
          {/* Text Side */}
          <div className="max-w-xl text-left px-4 sm:px-0 animate-fade-in">
            <p className="text-2xl sm:text-3xl leading-relaxed">
              I create <span className="text-red-500 font-semibold">visually striking</span> and user-centered designs
              that blend creativity with functionality.
            </p>
          </div>
  
          {/* Animated Image Stack */}
          <div className="relative w-full sm:w-1/2 max-w-[500px] h-[500px]">
            <Image
              src="/img1.png"
              alt="Project 1"
              width={200}
              height={300}
              className={`absolute top-0 left-1/2 -translate-x-1/2 rounded-xl shadow-xl transition-all duration-700 ease-out ${animateImages ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ zIndex: 10 }}
            />
                       {/* Left Image */}
            <Image
              src="/img2.png"
              alt="Project 2"
              width={250}
              height={300}
              className={`absolute top-16 left-1/2 rounded-xl shadow-xl transition-all duration-700 ease-out delay-200 z-5
                ${animateImages
                  ? '-translate-x-[120%] opacity-100 translate-y-0'
                  : '-translate-x-1/2 opacity-0 translate-y-10'
                }`}
              style={{ zIndex: 5 }}
            />
                  {/* Right Image */}
            <Image
              src="/img3.png"
              alt="Project 3"
              width={250}
              height={300}
              className={`absolute top-32 left-2/5 rounded-xl shadow-xl transition-all duration-700 ease-out delay-400 z-1
                ${animateImages
                  ? 'translate-x-[50%] opacity-100 translate-y-0'
                  : '-translate-x-1/2 opacity-0 translate-y-10'
                }`}
              style={{ zIndex: 1 }}
            />
          </div>
          <br /><br /><br />
        </section>
     
<style jsx>{`
            @keyframes slide-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }
  
`}</style>


    </div>
  )
}

export default About;