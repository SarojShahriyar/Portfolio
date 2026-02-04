import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SkillsMarquee from './components/SkillsMarquee';
import Services from './components/Services';
import SelectedWork from './components/SelectedWork';
import About from './components/About';
import Process from './components/Process';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Status indicator */}
      <div id="statusIndicator" className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden xl:block transition-all duration-700 ease-out rounded-full shadow-2xl backdrop-blur-3xl" style={{ filter: 'drop-shadow(0 0 1.25rem rgba(34, 197, 94, 0.3))' }}>
        <div className="inline-flex gap-3 hover:shadow-green-500/20 transition-all duration-500 group cursor-pointer relative overflow-hidden bg-black/20 border border-white/30 rounded-full py-2 px-4 shadow-2xl backdrop-blur-3xl items-center" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))', backdropFilter: 'blur(2rem)', WebkitBackdropFilter: 'blur(2rem)' }}>
          <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-white/20 via-transparent to-black/20 rounded-full"></div>
          <div className="absolute inset-[0.0625rem] opacity-30 bg-gradient-to-br from-white/10 to-transparent rounded-full shadow backdrop-blur-none"></div>
          <div className="relative flex items-center gap-3">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400 shadow-lg animate-pulse-glow"></span>
            </div>
            <span className="text-sm font-semibold bg-gradient-to-r from-green-400 via-white to-gray-300 bg-clip-text text-transparent whitespace-nowrap tracking-wide font-geist">
              Available for web projects
            </span>
            <div className="transform transition-transform duration-300 group-hover:translate-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                <path d="M7 17l9.2-9.2M17 17V7H7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Header />
      <main>
        <Hero />
        <SkillsMarquee />
        <Services />
        <SelectedWork />
        <About />
        <Process />
        <Experience />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
