import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Writing from '@/components/sections/Writing';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="editorial-line" />
      <About />
      <div className="editorial-line" />
      <Experience />
      <div className="editorial-line" />
      <Projects />
      <div className="editorial-line" />
      <Skills />
      <div className="editorial-line" />
      <Writing />
      <div className="editorial-line" />
      <Contact />
      <Footer />
    </>
  );
}
