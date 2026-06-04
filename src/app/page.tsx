import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/ParticlesBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import CodingProfiles from "@/components/CodingProfiles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Dynamic background particles */}
      <ParticlesBackground />
      
      {/* Floating navigation */}
      <Navbar />
      
      {/* Main content grid sections */}
      <main className="relative z-10 w-full flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <CodingProfiles />
        <Contact />
      </main>
      
      {/* Copyright footer */}
      <Footer />
    </>
  );
}
