import { motion } from "motion/react";
import { Github, Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "../data/portfolio";

const navItems = [
  { name: "Overview", href: "#overview" },
  { name: "Tech Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Let's Connect", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <motion.nav aria-label="Main navigation" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="sticky top-0 z-50 w-full border-b border-accent/10 bg-background/95 backdrop-blur-md">
      <div className="container mx-auto px-6 md:px-12 h-16 flex items-center justify-between gap-6">
        <a href="#overview" onClick={() => setMenuOpen(false)} className="font-bold text-lg tracking-tighter flex items-center gap-2 group shrink-0">
          <span className="w-2 h-2 bg-accent group-hover:scale-150 transition-transform" />
          <span className="group-hover:text-accent transition-colors">VAISHNAVI R.</span>
        </a>
        <div className="hidden xl:flex items-center gap-8">
          {navItems.map((item) => <a key={item.name} href={item.href} className="label-micro hover:text-accent transition-colors">{item.name}</a>)}
        </div>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="Vaishnavi on GitHub" className="p-2 text-muted-foreground hover:text-accent transition-colors"><Github className="w-5 h-5" /></a>
          <button type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)} onKeyDown={(event) => { if (event.key === "Escape") setMenuOpen(false); }} className="xl:hidden p-2 text-accent">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      <div id="mobile-navigation" hidden={!menuOpen} className="xl:hidden absolute inset-x-0 top-full border-b border-accent/10 bg-background shadow-lg" onKeyDown={(event) => { if (event.key === "Escape") { setMenuOpen(false); document.querySelector<HTMLButtonElement>('[aria-controls="mobile-navigation"]')?.focus(); } }}>
        <div className="container mx-auto px-6 md:px-12 py-4 grid grid-cols-2 gap-2">
          {navItems.map((item) => <a key={item.name} href={item.href} onClick={() => setMenuOpen(false)} className="label-micro py-3 hover:text-accent">{item.name}</a>)}
        </div>
      </div>
    </motion.nav>
  );
}
