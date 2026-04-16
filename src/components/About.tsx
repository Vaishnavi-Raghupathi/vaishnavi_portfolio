import { motion } from "motion/react";

export function TechSkills() {
  const skillCategories = [
    {
      title: "Mathematics & Numerical Methods",
      items: ["Fast Multipole Methods", "PINNs", "ODE/PDE Solvers", "Numerical Linear Algebra", "Differential Geometry"]
    },
    {
      title: "Machine Learning",
      items: ["PyTorch", "Neural ODEs", "Scientific ML", "FAISS", "Sentence Transformers", "scikit-learn"]
    },
    {
      title: "Programming",
      items: ["Python (Advanced)", "JavaScript/TypeScript", "SQL", "R", "C/C++ (Basic)", "Java"]
    },
    {
      title: "Tools & Infra",
      items: ["NumPy", "SciPy", "Pandas", "Git", "Linux", "Docker", "Streamlit", "Flask"]
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
      school: "Indian Institute of Technology, Madras",
      degree: "B.S. Data Science and Applications",
      period: "Expected 2028",
      grade: "CGPA: 8.0/10"
    },
    {
      school: "Christ University, Bangalore",
      degree: "B.Sc. Mathematics and Physics (Honors)",
      period: "Expected 2027",
      grade: "CGPA: 8.1/10"
    },
    {
      school: "Sophia High School",
      degree: "Physics, Chemistry, Mathematics, Computer Science",
      period: "Completed",
      grade: "10th Grade: 9.5 CGPA | 12th Grade: 8.5 CGPA"
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
            <div className="flex justify-between items-start">
              <h4 className="text-lg font-bold text-foreground">{edu.school}</h4>
              <span className="label-micro text-accent">{edu.period}</span>
            </div>
            <p className="text-sm serif-italic text-muted-foreground">{edu.degree}</p>
            <p className="font-mono text-[10px] opacity-50">{edu.grade}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
