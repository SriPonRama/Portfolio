import Sidebar from "@/components/site/Sidebar";
import MobileBar from "@/components/site/MobileBar";
import Footer from "@/components/site/Footer";
import Spotlight from "@/components/site/Spotlight";
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
      <Spotlight />
      <MobileBar />
      <div className="relative mx-auto max-w-screen-xl px-6 md:px-10 lg:flex lg:justify-between lg:gap-16 lg:px-16">
        <Sidebar />
        <main id="main" className="pt-20 lg:w-[52%] lg:py-24">
          <div className="space-y-24 lg:space-y-32">
            <About />
            <Experience />
            <Projects />
            <Achievements />
            <Skills />
            <Education />
            <Contact />
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}
