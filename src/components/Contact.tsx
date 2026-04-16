import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="section-card border-accent/20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="label-micro mb-2 text-accent">Contact</h3>
          <p className="text-4xl font-bold tracking-tighter leading-none">Let's <br /><span className="serif-italic font-normal">Connect</span></p>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
            Open to ML internships, research collaborations, and building things with real world impact. 
          </p>
        </div>

        <form action="https://formspree.io/f/vaishnaviraghupathi007@gmail.com" method="POST" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2 group">
              <label className="label-micro group-focus-within:text-accent transition-colors">Name</label>
              <Input 
                name="name"
                placeholder="Your Name" 
                className="bg-transparent border-0 border-b border-foreground/10 rounded-none px-0 h-10 focus:border-accent transition-all placeholder:text-muted-foreground/30"
                required
              />
            </div>
            <div className="space-y-2 group">
              <label className="label-micro group-focus-within:text-accent transition-colors">Email</label>
              <Input 
                name="email"
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-0 border-b border-foreground/10 rounded-none px-0 h-10 focus:border-accent transition-all placeholder:text-muted-foreground/30"
                required
              />
            </div>
          </div>

          <div className="space-y-2 group">
            <label className="label-micro group-focus-within:text-accent transition-colors">Subject</label>
            <select 
              name="subject"
              className="w-full bg-transparent border-0 border-b border-foreground/10 rounded-none px-0 h-10 focus:border-accent transition-all text-sm outline-none appearance-none"
              required
            >
              <option value="" disabled selected>Select a topic</option>
              <option value="Job Opportunity">Job Opportunity</option>
              <option value="Research Collaboration">Research Collaboration</option>
              <option value="Project Inquiry">Project Inquiry</option>
              <option value="General Networking">General Networking</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="space-y-2 group">
            <label className="label-micro group-focus-within:text-accent transition-colors">Message</label>
            <Textarea 
              name="message"
              placeholder="Write your message here..." 
              className="bg-transparent border-0 border-b border-foreground/10 rounded-none px-0 min-h-[100px] focus:border-accent transition-all resize-none placeholder:text-muted-foreground/30"
              required
            />
          </div>

          <button 
            type="submit"
            className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors"
          >
            Send Message
            <div className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all">
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </form>
      </div>

      <div className="mt-24 pt-12 border-t border-foreground/5 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-12">
          <a href="https://linkedin.com/in/vaishnavi-r-8a97672a6" target="_blank" rel="noopener noreferrer" className="label-micro hover:text-accent transition-colors">LinkedIn</a>
          <a href="https://github.com/Vaishnavi-Raghupathi" target="_blank" rel="noopener noreferrer" className="label-micro hover:text-accent transition-colors">GitHub</a>
          <a href="https://www.instagram.com/workiniterations/" target="_blank" rel="noopener noreferrer" className="label-micro hover:text-accent transition-colors">Instagram</a>
        </div>
        <div className="label-micro opacity-30">
          &copy; {new Date().getFullYear()} Vaishnavi R.
        </div>
      </div>
    </motion.section>
  );
}
