import React from 'react'
import {Navbar} from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import WebProjects from './components/WebProjects'
import Skills from './components/Skills'
import ContactSection from './components/Contact'

export const page = () => {
  return (
    <div>

    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-slate-900 text-white px-6 py-10">
  
      <Navbar />
      <br/>
      <br/>
      <br/>
      <Hero/>
      <About />
      <Work />
      <WebProjects />
      <Skills />
      <ContactSection />
</main>

    </div>
  )
}

export default page