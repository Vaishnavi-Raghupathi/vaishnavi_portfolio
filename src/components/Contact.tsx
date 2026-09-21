import { motion } from "motion/react";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <motion.section id="contact" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-card border-accent/20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="label-micro mb-2 text-accent">Contact</h3>
          <p className="text-4xl font-bold tracking-tighter leading-none">Let's <br /><span className="serif-italic font-normal">Connect</span></p>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">Open to ML internships, research collaborations, and building things with real-world impact.</p>
        </div>
        <div className="space-y-8 self-center min-w-0">
          <a href={`mailto:${profile.email}`} className="flex items-start gap-3 text-accent hover:underline">
            <Mail aria-hidden="true" className="w-5 h-5 mt-1 shrink-0" />
            <span className="min-w-0"><span className="block label-micro mb-2">Email me</span><span className="text-base sm:text-lg break-words">{profile.email}</span></span>
            <ArrowUpRight aria-hidden="true" className="w-4 h-4 shrink-0 mt-1" />
          </a>
          <a href={profile.phoneHref} className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"><Phone aria-hidden="true" className="w-5 h-5 shrink-0" />{profile.phone}</a>
          <p className="text-xs text-muted-foreground">The email link opens your email app. You can also copy the address above.</p>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-foreground/5 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="label-micro hover:text-accent transition-colors">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="label-micro hover:text-accent transition-colors">GitHub</a>
          <a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="label-micro hover:text-accent transition-colors">Instagram</a>
        </div>
        <a href={profile.resume} download className="label-micro hover:text-accent transition-colors">Download resume</a>
      </div>
    </motion.section>
  );
}
