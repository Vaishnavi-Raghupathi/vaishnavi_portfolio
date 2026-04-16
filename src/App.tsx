import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { TechSkills, Education } from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/20">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <div className="container mx-auto px-6 md:px-12 flex flex-col gap-32 md:gap-48 py-24 md:py-40">
          <TechSkills />
          <Education />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
