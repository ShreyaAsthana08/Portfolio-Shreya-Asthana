import React from 'react'
import { Navbar } from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import WebProjects from './components/WebProjects'
import Skills from './components/Skills'
import ContactSection from './components/Contact'

const Page = () => {
  return (
    <div className="bg-gradient-to-br from-black via-zinc-900 to-slate-900 text-white min-h-screen">
      <Navbar />
      <main className="pt-32 px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto w-full">
        <Hero />
        <About />
        <Work />
        <WebProjects />
        <Skills />
        <ContactSection />
      </main>
    </div>
  )
}

export default Page