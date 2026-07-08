import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SkillsMarquee from './components/SkillsMarquee';
import Services from './components/Services';
import SelectedWork from './components/SelectedWork';
import About from './components/About';
import Process from './components/Process';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="site-backdrop" aria-hidden="true"></div>

      <Header />
      <main>
        <Hero />
        <SkillsMarquee />
        <Experience />
        <SelectedWork />
        <Services />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
