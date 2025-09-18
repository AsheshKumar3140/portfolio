import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import ConfidentialProjects from "@/components/ConfidentialProjects/ConfidentialProjects";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main className="px-6 py-16 sm:px-12 md:px-24 lg:px-32 xl:px-48">
      <div className="mx-auto max-w-6xl">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <ConfidentialProjects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
