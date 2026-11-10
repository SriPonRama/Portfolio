import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Spotlight from "@/components/site/Spotlight";
import PageFx from "@/components/fx/PageFx";
import Hero from "@/components/sections/Hero";
import { MottoBand, StackBand } from "@/components/sections/Bands";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <PageFx />
      <Spotlight />
      <Navbar />
      <main id="main" className="relative mx-auto max-w-6xl px-6 md:px-10">
        <Hero />
        <StackBand />
        <div className="space-y-28 pt-28 lg:space-y-36 lg:pt-36">
          <About />
          <Experience />
          <Projects />
          <Achievements />
          <Skills />
          <Education />
          <MottoBand />
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  );
}
