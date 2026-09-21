import { motion } from "motion/react";
import { Github } from "lucide-react";
import { manuscript } from "../data/portfolio";

const experiences = [
  {
    company: "Indian Institute of Technology Bombay",
    role: "ML Research Intern",
    period: "May 2026 – July 2026",
    location: "IIT Bombay",
    link: undefined,
    points: [
      "Developed a hybrid physics–ML PMSM Digital Twin combining dq-axis physics, RK4 simulation, PSO calibration, and neural residual correction. Reduced held-out current-prediction RMSE by 86.7%, from 11.61 A to 1.55 A.",
      "Built anomaly-detection, severity-estimation, and temperature-compensated degradation-monitoring pipelines. Achieved 95.1% ITSC detection on measured fault batches and 93.2% detection of permanent-magnet flux-loss cases.",
      `First author of “${manuscript.title},” submitted to ${manuscript.journal}.`,
    ],
  },
  {
    company: "Computational Mathematics Project",
    role: "Research Intern",
    period: "Aug 2025 – Dec 2025",
    location: "Mentored by PhD Scholar, IIT Madras",
    link: "https://github.com/Vaishnavi-Raghupathi/bbFMM1D-Python",
    points: [
      "Studied the mathematical foundations of the Black-Box Fast Multipole Method for accelerating large-scale kernel computations.",
      "Implemented a one-dimensional BBFMM solver in Python and benchmarked its scaling against direct dense kernel evaluation.",
    ],
  },
];

export default function Experience() {
  return (
    <motion.section id="experience" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-card border-accent/20">
      <h3 className="label-micro mb-8 text-accent">Experience</h3>
      <div className="space-y-12">
        {experiences.map((exp) => (
          <article key={exp.company} className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-foreground">{exp.company}</h4>
                <p className="text-sm font-medium serif-italic text-muted-foreground">{exp.role}</p>
              </div>
              <div className="md:text-right space-y-2 md:max-w-56 shrink-0">
                <p className="label-micro text-accent">{exp.period}</p>
                <p className="font-mono text-[10px] text-muted-foreground">{exp.location}</p>
              </div>
            </div>
            <ul className="space-y-4">
              {exp.points.map((point) => (
                <li key={point} className="text-sm text-muted-foreground leading-relaxed flex gap-3">
                  <span aria-hidden="true" className="text-accent font-bold">/</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            {exp.link && <a href={exp.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"><Github className="w-4 h-4" /> View BBFMM code</a>}
          </article>
        ))}
      </div>
    </motion.section>
  );
}
