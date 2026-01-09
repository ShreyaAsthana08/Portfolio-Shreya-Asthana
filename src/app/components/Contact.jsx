'use client';

import { motion } from 'framer-motion';
import {
  FaLinkedin,
  FaDribbble,
  FaBehance,
  FaXTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaYoutube,
} from 'react-icons/fa6';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-bl from-black via-zinc-900 to-black text-white py-20 px-4 rounded-3xl mt-20 max-w-6xl mx-auto shadow-inner overflow-hidden"
    >
      {/* Background Glow - Responsive Size */}
      <motion.div
        className="absolute top-0 left-1/2 w-[95vw] max-w-[600px] h-[400px] sm:h-[500px] -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl z-0"
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-extrabold text-center mb-12 relative z-10 text-white drop-shadow-[3px_3px_2px_#00ffab]"
      >
        Let’s Work Together
      </motion.h2>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mb-10 relative z-10">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:work.shreya123@gmail.com"
          className="border border-emerald-500 hover:bg-emerald-600 transition px-8 py-3 rounded-full text-base sm:text-lg font-medium shadow-lg text-center w-[260px]"
        >
          Message
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="tel:+919818570119"
          className="border border-emerald-500 hover:bg-emerald-600 transition text-white px-8 py-3 rounded-full text-base sm:text-lg font-medium shadow-md text-center w-[260px]"
        >
          Discuss a Project
        </motion.a>
      </div>

      {/* Contact Info */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-6 text-base sm:text-lg text-white/80 mb-10 relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2">
          <FaEnvelope /> work.shreya123@gmail.com
        </div>
       
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 text-3xl sm:text-4xl relative z-10 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        variants={{ hidden: {}, visible: {} }}
      >
        {[
          { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/shreya-asthana-b9470a250/' },
          { icon: <FaDribbble />, href: 'https://dribbble.com/shreyaa08' },
          { icon: <FaBehance />, href: 'https://www.behance.net/shreyaasthana08' },
          { icon: <FaXTwitter />, href: 'https://x.com/a_shreya08' },
          { icon: <FaInstagram />, href: 'https://www.instagram.com/her.codecanvas/' },
          { icon: <FaYoutube />, href: 'https://www.youtube.com/@hercodecanvas' },
        ].map((item, index) => (
          <motion.a
            key={index}
            whileHover={{ scale: 1.2, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 300 }}
            href={item.href}
            className="hover:text-emerald-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
