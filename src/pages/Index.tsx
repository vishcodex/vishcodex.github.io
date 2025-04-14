
import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { createOpalTechBackground } from '@/utils/backgroundGenerator';

const Index = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const applyBackground = async () => {
      if (rootRef.current) {
        const backgroundStyle = await createOpalTechBackground();
        rootRef.current.style.cssText += backgroundStyle;
      }
    };

    applyBackground();
  }, []);

  return (
    <div ref={rootRef} className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
