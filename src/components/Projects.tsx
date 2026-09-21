import { motion } from "motion/react";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import { manuscript, projects } from "../data/portfolio";

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  return (
    <>
      <motion.section id="projects" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-card border-accent/20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <h3 className="label-micro text-accent">Featured Projects</h3>
            <p className="text-4xl md:text-5xl font-bold tracking-tighter">Selected <span className="serif-italic font-normal">Works</span></p>
          </div>
          <p className="text-xs text-muted-foreground max-w-xs font-mono leading-relaxed">Systems built at the intersection of mathematical theory and practical machine learning.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <article key={project.id} className="relative p-6 sm:p-8 border border-foreground/10 hover:border-accent/30 hover:bg-muted/30 transition-all group flex flex-col gap-6">
              <div className="flex items-center justify-between gap-4">
                <span className="label-micro opacity-60">0{idx + 1}</span>
                <div className="relative z-10 flex items-center gap-4">
                  {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} demo`} className="p-2 text-muted-foreground hover:text-accent"><ExternalLink className="w-4 h-4" /></a>}
                  {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`} className="p-2 text-muted-foreground hover:text-accent"><Github className="w-4 h-4" /></a>}
                </div>
              </div>
              <h4 className="text-2xl font-bold leading-tight group-hover:text-accent transition-colors">
                <button type="button" onClick={() => setSelectedProjectId(project.id)} aria-haspopup="dialog" className="text-left cursor-pointer after:absolute after:inset-0 focus-visible:after:outline-2 focus-visible:after:outline-accent focus-visible:after:outline-offset-4">{project.title}</button>
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              <span aria-hidden="true" className="inline-flex items-center gap-2 text-xs font-bold text-accent">View project details <ArrowUpRight className="w-4 h-4" /></span>
              <div className="mt-auto pt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-foreground/10">
                {project.tech.map((tech) => <span key={tech} className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{tech}</span>)}
              </div>
            </article>
          ))}
        </div>
      </motion.section>
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-card border-accent/20">
        <h3 className="label-micro mb-8 text-accent">Research & Exploration</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <p className="label-micro text-accent">{manuscript.status}</p>
            <h4 className="text-lg font-bold">{manuscript.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">Submitted to <span className="serif-italic">{manuscript.journal}</span>.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Math for ML</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">An interactive project for learning the mathematics behind machine learning intuitively.</p>
            <a href="https://mathml-five.vercel.app/module/1/1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-accent hover:underline">Explore the demo <ExternalLink className="w-4 h-4" /></a>
          </div>
        </div>
      </motion.section>
      <ProjectDetails projectId={selectedProjectId} onClose={() => setSelectedProjectId(null)} />
    </>
  );
}
