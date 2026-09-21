import { motion } from "motion/react";

export function TechSkills() {
  const skillCategories = [
    {
      title: "Methods",
      items: ["SINDy", "System Identification", "Physics-Informed ML", "Scientific ML", "Time-Series Modeling", "Model Evaluation"]
    },
    {
      title: "Machine Learning",
      items: ["PyTorch", "scikit-learn", "Deep Learning", "Residual Learning", "Anomaly Detection"]
    },
    {
      title: "Languages & Tools",
      items: ["Python", "SQL", "Java", "Git", "GitHub", "Streamlit"]
    },
    {
      title: "Scientific Computing",
      items: ["NumPy", "SciPy", "Pandas", "Numerical ODE Solvers", "Mathematical Modeling"]
    }
  ];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="section-card border-accent/20"
    >
      <h3 className="label-micro mb-8 text-accent">Technical Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {skillCategories.map((cat) => (
          <div key={cat.title}>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">{cat.title}</h4>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {cat.items.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-mono text-muted-foreground hover:text-accent transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export function Education() {
  const education = [
    {
      school: "Indian Institute of Technology Madras (Online)",
      degree: "B.S. in Data Science and Applications",
      period: "Expected 2027"
    },
    {
      school: "Christ University, Bangalore",
      degree: "B.Sc. (Hons.) in Mathematics and Physics",
      period: "Expected 2027"
    }
  ];

  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="section-card border-accent/20"
    >
      <h3 className="label-micro mb-8 text-accent">Education</h3>
      <div className="space-y-10">
        {education.map((edu) => (
          <div key={edu.school} className="flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-6">
              <h4 className="text-lg font-bold text-foreground">{edu.school}</h4>
              <span className="label-micro text-accent shrink-0">{edu.period}</span>
            </div>
            <p className="text-sm serif-italic text-muted-foreground">{edu.degree}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
