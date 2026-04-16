import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { name: "Overview", href: "#overview" },
    { name: "Tech Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Let's Connect", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 w-full border-b border-accent/10 bg-background/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-lg tracking-tighter flex items-center gap-2 group">
          <span className="w-2 h-2 bg-accent group-hover:scale-150 transition-transform"></span>
          <span className="group-hover:text-accent transition-colors">VAISHNAVI R.</span>
        </a>
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item, idx) => (
            <a
              key={item.name}
              href={item.href}
              className="label-micro hover:text-accent transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Vaishnavi-Raghupathi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
