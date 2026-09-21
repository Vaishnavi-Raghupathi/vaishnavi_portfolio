import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="overview" className="relative min-h-[90vh] flex flex-col justify-end border-b border-foreground/10">
      <div className="container mx-auto px-6 md:px-12 pt-20 pb-12 md:pb-24">
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
                I like working at the intersection of physics, math, and machine learning. I’m drawn to problems with a clear real-world impact that give me a reason to dig into the technical details and build a deep understanding.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <a href="#projects" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors">
                  Explore Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={profile.resume} download className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors">
                  Resume <Download className="w-4 h-4" />
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
              src={`${import.meta.env.BASE_URL}myphoto.jpeg`}
              alt="Vaishnavi Raghupathi"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center scale-110 hover:scale-100 transition-transform duration-1000"
            />
          </motion.div>
        </div>
      </div>
      
      <div className="absolute top-1/2 right-0 -translate-y-1/2 hidden md:block">
        <div className="label-micro [writing-mode:vertical-rl] rotate-180 opacity-40 py-12 border-l border-accent/20 text-accent">
          Physics &times; Math &times; Machine Learning
        </div>
      </div>
    </section>
  );
}
