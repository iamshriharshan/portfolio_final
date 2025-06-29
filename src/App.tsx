import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollBricks from './components/ScrollBricks';
import SectionTransition from './components/SectionTransition';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Enhanced smooth scrolling with throttling
    let ticking = false;
    const smoothScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', smoothScroll, { passive: true });
    return () => window.removeEventListener('scroll', smoothScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white smooth-scroll relative">
      <ScrollBricks />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <SectionTransition id="home" delay={0}>
        <Hero />
      </SectionTransition>
      
      <SectionTransition id="about" delay={200}>
        <About />
      </SectionTransition>
      
      <SectionTransition id="projects" delay={400}>
        <Projects />
      </SectionTransition>
      
      <SectionTransition id="experience" delay={600}>
        <Experience />
      </SectionTransition>
      
      <SectionTransition id="achievements" delay={800}>
        <Achievements />
      </SectionTransition>
      
      <SectionTransition id="contact" delay={1000}>
        <Contact />
      </SectionTransition>
      
      <Footer />
    </div>
  );
}

export default App;