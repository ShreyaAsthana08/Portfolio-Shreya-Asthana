'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const webProjects = [
  {
    title: 'Printo E-commerce',
    url: 'https://my-prints-six.vercel.app/',
    img: '/printo.png'
  },
  {
    title: 'NCR School Website',
    url: 'https://ncrcollegetundla.vercel.app/',
    img: '/ncrschool.png'
  },
  {
    title: 'Foodiz Website',
    url: 'https://foodiz-git-main-shreyas-projects-bf338e50.vercel.app',
    img: '/food.png'
  }
];

export default function WebDevProjects() {
  return (
    <section className="text-white mt-32 px-4 relative z-10" id="webdev">
      {/* Background Glow Element */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-purple-700/20 blur-3xl z-0"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Triple Text Effect Title */}
        <motion.div
          className="relative mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[4rem] sm:text-[5rem] font-extrabold text-center sm:text-left leading-tight relative z-30">
            Web Dev Projects
          </h2>
          <h2 className="absolute top-[4px] left-[4px] text-[4rem] sm:text-[5rem] font-extrabold text-green-700/40 blur-sm z-10 select-none">
            Web Dev Projects
          </h2>
          <h2 className="absolute top-[8px] left-[8px] text-[4rem] sm:text-[5rem] font-extrabold text-green-800/30 blur-md z-0 select-none">
            Web Dev Projects
          </h2>
        </motion.div>

        {/* Alternating Cards */}
        <div className="flex flex-col gap-20">
          {webProjects.map((project, idx) => (
            <motion.div
              key={idx}
              className={`flex flex-col sm:flex-row ${idx % 2 !== 0 ? 'sm:flex-row-reverse' : ''} items-center justify-between gap-8`}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.3, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <motion.div
                className="rounded-xl overflow-hidden shadow-xl border border-zinc-700 w-full sm:w-1/2"
                whileHover={{ scale: 1.02, rotate: idx % 2 === 0 ? -1 : 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Link
                  href={project.url}
                  target="_blank"
                  className="sparkle-btn relative bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-500 text-white px-6 py-3 rounded-full text-base sm:text-lg hover:opacity-90 transition-all shadow-lg overflow-hidden"
                >
                  {project.title} ↗
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Footer Link */}
        <motion.p
          className="mt-10 text-gray-400 text-right text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Check My GitHub Profile For More ↗{' '}
          <a
            href="https://github.com/shreyaasthana08"
            target="_blank"
            className="text-pink-400 underline"
          >
            ShreyaAsthana08
          </a>
        </motion.p>
      </div>
   
</section>
  );
}
