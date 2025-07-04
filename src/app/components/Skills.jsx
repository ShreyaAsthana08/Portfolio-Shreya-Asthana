'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', icon: '/html.png' },
  { name: 'CSS', icon: '/css.png' },
  { name: 'JAVASCRIPT', icon: '/js.png' },
  { name: 'REACT JS', icon: '/react.png' },
  { name: 'FIGMA', icon: '/figma.png' },
  { name: 'C++', icon: '/c++.png' },
  { name: 'GITHUB', icon: '/github.png' },
  { name: 'NODE JS', icon: '/nodejs.png' },
  { name: 'MONGODB', icon: '/mongodb.png' },
];

export default function TechStack() {
  return (
    <section
      id='skills'
      className="text-white py-12 sm:py-20 px-2 sm:px-4 relative z-10 overflow-hidden"
    >
      {/* Glow Background */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] rounded-full bg-purple-600/20 blur-3xl z-0"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading with Triple Text Effect */}
        <motion.div
          className="relative mb-10 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[2.2rem] xs:text-[2.8rem] sm:text-[4rem] md:text-[5rem] font-extrabold text-left relative z-30">
            Tech-Stack
          </h2>
          <h2 className="absolute top-[2px] left-[2px] xs:top-[4px] xs:left-[4px] text-[2.2rem] xs:text-[2.8rem] sm:text-[4rem] md:text-[5rem] font-extrabold text-red-700/40 blur-sm z-10 select-none">
            Tech-Stack
          </h2>
          <h2 className="absolute top-[4px] left-[4px] xs:top-[8px] xs:left-[8px] text-[2.2rem] xs:text-[2.8rem] sm:text-[4rem] md:text-[5rem] font-extrabold text-red-800/50 blur-md z-0 select-none">
            Tech-Stack
          </h2>
        </motion.div>

        {/* Skills Slider/Grid */}
        <div className="block sm:hidden">
          {/* On mobile, use a horizontal scrollable row */}
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 flex flex-col items-center justify-center w-28 h-28 bg-white/10 backdrop-blur-md p-2 rounded-lg shadow-md aspect-square"
              >
                <Image src={skill.icon} alt={skill.name} width={60} height={60} className="mb-1" />
                <p className="text-xs font-medium text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          className="hidden sm:flex space-x-6 md:space-x-10"
          initial={{ x: '50%' }}
          animate={{ x: '-100%' }}
          transition={{ duration: 15, ease: 'linear', repeat: Infinity }}
        >
          {skills.concat(skills).map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center w-32 md:w-40 h-32 md:h-40 bg-white/10 backdrop-blur-md p-2 md:p-4 rounded-lg shadow-md aspect-square"
            >
              <Image src={skill.icon} alt={skill.name} width={80} height={80} className="mb-2" />
              <p className="text-xs md:text-sm font-medium text-center">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}