import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


const Work = () => {
  return (
    <div>
             {/* Work Section */}
      <section id="projects" className="text-white mt-32 relative px-4">
        {/* Background "Work" text */}
        <h1 className="absolute top-0 right-4 text-[6rem] sm:text-[10rem] font-extrabold text-white/5 leading-none select-none">
          Work<br />Work<br />Work
        </h1>

        <div className="max-w-6xl mx-auto ">
          <h2 className="text-3xl sm:text-4xl font-bold text-left mb-2 mt-[10rem] bg-gradient-to-r from-purple-300 via-fuchsia-400 to-purple-600 bg-clip-text text-transparent">
            ↗ Things I can provide to you :
          </h2>
          <p className="text-2xl mb-8 text-left text-gray-300">
            Web & Mobile / UI & UX / Branding / Front-End Development
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-40 ">
            {[
              { img: '/grootz.png', label: 'Grootz Website', url: 'https://www.behance.net/gallery/223936049/Educational-Website-UI-design' },
              { img: '/juicy.png', label: 'Juicy Mobile app', url: 'https://www.behance.net/gallery/215555683/Juice-App-UI-Design-Prototype' },
              { img: '/pizza.png', label: 'Pizza Game', url: 'https://www.behance.net/gallery/224842979/Pizza-Game-Prototype-design-%28UIUX%29' },
              { img: '/branding.png', label: 'Branding Products', url: 'https://www.behance.net/gallery/223938547/Hackathon-Designs-Bannerswagslogo-%28HP-theme%29Figma' },
            ].map((item, idx) => (
              <Link
                href={item.url}
                key={idx}
                target="_blank"
                className="bg-gradient-to-br from-zinc-800 via-violet-300 to-slate-800 p-1 rounded-xl hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-zinc-900 p-4 rounded-xl">
                  <Image src={item.img} alt={item.label} width={500} height={300} className="mx-auto" />
                </div>
                <p className="mt-4 text-white text-lg font-semibold text-center">{item.label} ↗</p>
              </Link>
            ))}
          </div>

          <p className="mt-10 text-gray-400 text-right">
            Check My Behance Profile For More ↗{' '}
            <a href="https://www.behance.net/shreyaasthana08" target="_blank" className="text-pink-400 underline">
              shreyaasthana08
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}

export default Work
