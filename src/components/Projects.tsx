import { motion } from "motion/react";
import { Github, ExternalLink, Layout, Cpu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import ProjectDetails from "./ProjectDetails";

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const projects = [
    {
      id: "research-agent",
      title: "AI Research-to-Code Agent",
      description: "Built a 4-agent autonomous pipeline (Parser, Equation Extractor, Reasoner, Code Generator) that turns PDF research papers into executable Python notebooks. Reduced paper-to-code time by 70%.",
      tech: ["PYTHON", "CLAUDE API", "LANGCHAIN"],
      github: "https://github.com/Vaishnavi-Raghupathi/research_agent_mvp",
      link: "https://researchagentmvp-byc6h2frcyhtctrrrvjxxr.streamlit.app/",
      icon: <Cpu className="w-4 h-4" />
    },
    {
      id: "ode-solver",
      title: "Adaptive ODE Solver with Real-Time Model Switching",
      description: "Hybrid solver switching between RK4 and Neural ODEs using real-time error signals. Achieved 86.5% lower error under model mismatch vs. classical solvers.",
      tech: ["PYTORCH", "TORCHDIFFEQ", "SCIPY"],
      github: "https://github.com/Vaishnavi-Raghupathi/Adaptive-ODE-Solver-with-Diagnostic-Driven-Model-Switching",
      link: "https://adaptive-ode-solver-with-diagnostic-driven-model-switching-bgd.streamlit.app/",
      icon: <Layout className="w-4 h-4" />
    },
    {
      id: "music-recommender",
      title: "Real-Time Music-to-Movie Recommender",
      description: "Full-stack recommendation engine mapping Spotify audio features to movie mood space using 6D projection. FAISS vector search over 900K movies with sub-100ms retrieval.",
      tech: ["FAISS", "TRANSFORMERS", "SPOTIFY API"],
      github: "https://github.com/Vaishnavi-Raghupathi/music-to-movie-recommender",
      link: null,
      icon: <Layout className="w-4 h-4" />
    }
  ];

  const clickableProjects = ["research-agent", "music-recommender", "ode-solver"];

  return (
    <>
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-card border-accent/20"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <h3 className="label-micro text-accent">Featured Projects</h3>
            <p className="text-4xl md:text-5xl font-bold tracking-tighter">Selected <span className="serif-italic font-normal">Works</span></p>
          </div>
          <p className="text-xs text-muted-foreground max-w-xs font-mono leading-relaxed">
            A collection of systems built at the intersection of mathematical theory and practical machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => clickableProjects.includes(project.id) && setSelectedProjectId(project.id)}
              className={cn(
                "p-8 border border-foreground/5 hover:border-accent/20 transition-all group flex flex-col gap-8",
                clickableProjects.includes(project.id) ? "cursor-pointer hover:bg-muted/30" : ""
              )}
            >
              <div className="flex items-center justify-between">
                <span className="label-micro opacity-30">0{idx + 1}</span>
                <div className="flex items-center gap-4">
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-2xl font-bold leading-tight group-hover:text-accent transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto pt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-foreground/5">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-card mt-12 border-accent/20"
      >
        <h3 className="label-micro mb-8 text-accent">Currently Working On</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              <h4 className="text-lg font-bold">Research Manuscript</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Preparing manuscripts and furthering research in <span className="text-foreground font-medium">Adaptive ODE Solver with Real-Time Model Switching</span> with a professor at my university.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              <h4 className="text-lg font-bold">Math for ML Product</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Working on a product that helps people learn math for ML intuitively. 
              <a 
                href="https://mathml-five.vercel.app/module/1/1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 ml-2 text-accent hover:underline font-medium"
              >
                Check out the demo <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </div>
        </div>
      </motion.section>

      <ProjectDetails 
        projectId={selectedProjectId} 
        onClose={() => setSelectedProjectId(null)} 
      />
    </>
  );
}
