import { motion } from "motion/react";

import { Github } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Research Experience",
      role: "Undergraduate Researcher",
      period: "Aug 2025 – Present",
      location: "Supervised by PhD Scholar, IIT Madras",
      link: "https://github.com/Vaishnavi-Raghupathi/bbFMM1D-Python",
      points: [
        "Developed a Python implementation of the Black-Box Fast Multipole Method (BBFMM), reducing complexity from O(N²) to near-linear scaling",
        "Designed modular framework with kernel generalization and interpolation-based compression; performed error vs. efficiency analysis",
        "Investigating integration of BBFMM into Physics-Informed Neural Networks (PINNs) for computational acceleration",
        "Benchmarking classical vs. learning-augmented solvers across varying scales and noise regimes"
      ]
    }
  ];

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="section-card border-accent/20"
    >
      <h3 className="label-micro mb-8 text-accent">Experience</h3>
      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <a 
            key={idx} 
            href={exp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-6 p-6 -m-6 rounded-xl hover:bg-muted/50 transition-all group"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">{exp.company}</h4>
                <p className="text-sm font-medium serif-italic text-muted-foreground">{exp.role}</p>
              </div>
              <div className="text-left md:text-right flex flex-col md:items-end gap-2">
                <div className="flex items-center gap-3">
                  <p className="label-micro text-accent">{exp.period}</p>
                  <Github className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <p className="font-mono text-[10px] opacity-50">{exp.location}</p>
              </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {exp.points.map((point, pIdx) => (
                <li key={pIdx} className="text-xs text-muted-foreground leading-relaxed flex gap-3">
                  <span className="text-accent font-bold">/</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </motion.section>
  );
}
