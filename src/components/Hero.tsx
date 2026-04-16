import { motion } from "motion/react";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section id="overview" className="relative min-h-[90vh] flex flex-col justify-end border-b border-foreground/10">
      <div className="container mx-auto px-6 md:px-12 pb-12 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="label-micro"
            >
              ML Researcher & Builder <span className="serif-italic lowercase opacity-50 ml-2">based in India</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[12vw] md:text-[10vw] font-bold tracking-[-0.05em] leading-[0.85] uppercase"
            >
              Vaishnavi <br />
              <span className="serif-italic font-normal tracking-[-0.02em] ml-[0.5em]">Raghupathi</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-md space-y-6"
            >
              <p className="text-xl md:text-2xl font-light leading-tight text-muted-foreground">
                Math and physics shape how I think. I build practical ML systems and share what I learn with over 16K+ audience <a href="https://www.instagram.com/workiniterations/" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium italic hover:text-accent transition-colors">@workiniterations</a>
              </p>
              
              <div className="flex items-center gap-8 pt-4">
                <a href="#projects" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors">
                  Explore Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="md:col-span-4 relative aspect-[4/5] md:aspect-square overflow-hidden transition-all duration-700 border border-accent/20 shadow-[20px_20px_60px_-15px_rgba(30,64,175,0.1)]"
          >
            <img 
              src="/myphoto.jpeg" 
              alt="Vaishnavi R"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center scale-110 hover:scale-100 transition-transform duration-1000"
            />
          </motion.div>
        </div>
      </div>
      
      <div className="absolute top-1/2 right-0 -translate-y-1/2 hidden md:block">
        <div className="label-micro vertical-rl rotate-180 opacity-40 py-12 border-l border-accent/20 text-accent">
          Physics &times; Math &times; Machine Learning
        </div>
      </div>
    </section>
  );
}
