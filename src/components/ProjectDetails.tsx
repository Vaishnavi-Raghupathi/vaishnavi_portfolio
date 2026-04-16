import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Cpu, Code2, Rocket, Lightbulb, Target, Layers, Music, Palette, Gauge, Zap, TrendingUp, Sparkles, Workflow, BrainCircuit, Microscope } from "lucide-react";
import { useState } from "react";

interface ProjectDetailsProps {
  projectId: string | null;
  onClose: () => void;
}

export default function ProjectDetails({ projectId, onClose }: ProjectDetailsProps) {
  const isOpen = !!projectId;
  const [viewMode, setViewMode] = useState<"research" | "engineering">("research");

  const projectData: Record<string, any> = {
    "research-agent": {
      title: "AI Research-to-Code Agent",
      icon: <Cpu className="w-6 h-6" />,
      github: "https://github.com/Vaishnavi-Raghupathi/research_agent_mvp",
      link: "https://researchagentmvp-byc6h2frcyhtctrrrvjxxr.streamlit.app/",
      tech: ["Python", "Llama 3.3 70B", "OpenRouter", "PyMuPDF", "Streamlit", "nbformat", "arxiv API"],
      sections: [
        {
          title: "Inspiration",
          icon: <Lightbulb className="w-5 h-5" />,
          content: "Reproducing results from ML papers takes days. You read the paper, parse the math, figure out what the authors actually did, then write the code from scratch. I wanted to collapse that entire process into a single tool. I built the tool I wished existed."
        },
        {
          title: "The Problem",
          icon: <Target className="w-5 h-5" />,
          content: "Academic literature moves fast. Researchers spend more time decoding papers than running experiments. The gap between reading a paper and running an experiment is filled with friction, parsing dense academic writing and extracting the actual algorithm. This costs researchers and engineers significant time."
        }
      ],
      approach: [
        "Designed a modular agent architecture where each component handles one job: extraction, summarization, code generation, packaging.",
        "Used LLM-based chunked processing to handle full papers beyond typical context limits.",
        "Built an agentic pipeline that treats a research paper as a structured document, extracting methodology, mathematical contributions, and experimental setup separately."
      ],
      features: [
        "PDF upload or direct arxiv URL ingestion",
        "Technical summary focused on math & algorithm structure",
        "Automated PyTorch/TensorFlow code generation",
        "Context-aware Q&A on any section of the paper",
        "One-click Jupyter notebook export"
      ],
      impact: "Reduces time from paper discovery to working implementation. Useful for systematic literature reviews and rapid prototyping of research ideas for ML researchers, students, and engineers evaluating new architectures.",
      nextSteps: "Sandboxed code execution, multi-paper comparison, Colab export, and a team shared library of reproduced papers."
    },
    "music-recommender": {
      title: "Wavelength",
      subtitle: "Your music taste knows what movies you'd love. We just do the math.",
      icon: <Music className="w-6 h-6" />,
      github: "https://github.com/Vaishnavi-Raghupathi/music-to-movie-recommender",
      link: null,
      tech: ["Python", "FAISS", "Sentence Transformers", "Flask", "Spotipy", "scikit-learn", "Railway"],
      sections: [
        {
          title: "The Idea",
          icon: <Lightbulb className="w-5 h-5" />,
          content: "Spotify knows you better than most people do. Wavelength takes that: your actual listening history, the audio fingerprint of every track you love, and finds the films that live in the same emotional universe. Not 'you liked Interstellar, try Inception.' That's lazy. This is: your top tracks skew high acousticness, low valence, slow tempo, intimate texture; here are 10 films that feel exactly like that. No ratings. No watch history. Just the geometry of your taste."
        },
        {
          title: "Why This Is Hard",
          icon: <Target className="w-5 h-5" />,
          content: "Music and film are completely different modalities. There's no shared vocabulary, no labeled dataset that says 'this song feels like this movie.' The solution: build the bridge yourself. Hand-craft a projection matrix from audio feature space into cinematic mood space. Filter movie metadata to extract only affective language before embedding. Encode the cultural logic of music taste: shoegaze to arthouse, post-rock to slow cinema, as a geometric enrichment layer."
        }
      ],
      approach: [
        "Pulls your top Spotify tracks via API.",
        "Maps each track's audio DNA into a 6-dimensional cinematic space: emotional tone, pacing, texture, intensity, intimacy, darkness.",
        "Matches against 930,000 films using a hybrid semantic + geometric scoring engine built on FAISS.",
        "Clusters your listening profile to find your dominant mood, so one hype track doesn't ruin your recommendations.",
        "Returns films ranked by how well they feel like your music. Not what they're about. How they feel."
      ],
      features: [
        "930,000 films indexed",
        "6-dimensional cinematic feature space",
        "Sub-20 second response on cached queries",
        "0 external AI APIs (Pure math)"
      ],
      impact: "It works because emotional space is universal. The math just makes it explicit. Zero LLMs. Zero AI APIs. Pure math.",
      extra: {
        title: "The Aesthetic",
        icon: <Palette className="w-5 h-5" />,
        content: "Windows 95/98 UI. Deliberately. Because the best ideas don't need to look like a YC startup to be worth your attention."
      }
    },
    "ode-solver": {
      title: "Adaptive ODE Solver",
      subtitle: "Diagnostic-Driven Model Switching",
      icon: <BrainCircuit className="w-6 h-6" />,
      github: "https://github.com/Vaishnavi-Raghupathi/Adaptive-ODE-Solver-with-Diagnostic-Driven-Model-Switching",
      link: "https://adaptive-ode-solver-with-diagnostic-driven-model-switching-bgd.streamlit.app/",
      tech: ["Python", "PyTorch", "torchdiffeq", "SciPy", "Statsmodels", "Streamlit"],
      hasToggle: true,
      research: {
        tagline: "When classical physics fails, can a neural network take over automatically?",
        inspiration: "Classical ODE solvers like RK45 are fast and interpretable, but they break down when the underlying system doesn't match the assumed model. In real scientific settings, such as climate models, biological systems, and fluid dynamics, you rarely know if your model is correct. I wanted to build something that could detect that failure mathematically and respond to it.",
        problem: "Most scientific ML pipelines make a fixed choice upfront: use a classical solver or a neural network. But neither is universally better. Classical solvers fail under model mismatch or noise. Neural ODEs are expensive to train and overkill when the physics is clean. There was no principled middle ground.",
        approach: "Rather than choosing one model, I built a diagnostic layer that watches how the classical solver behaves and asks: are these residuals random, or do they contain structure? If the residuals show autocorrelation, heteroscedasticity, or state-dependence, that's evidence the classical model is systematically wrong, and a Neural ODE gets trained instead.",
        details: [
          "Lorenz system testbed (clean, noisy, mismatch via ρ(t) = 28 + 5sin(t))",
          "Breusch-Pagan, Ljung-Box, ADF, R² diagnostics",
          "Neural ODE with torchdiffeq (dopri5, Xavier init, gradient clipping)",
          "Fully modular Python architecture"
        ],
        impact: "Correctly avoids unnecessary Neural ODE training and escalates under mismatch conditions where classical solvers fail significantly. Relevant to scientific ML domains like climate modeling and pharmacokinetics."
      },
      engineering: {
        tagline: "A self-diagnosing solver that knows when it's failing and fixes itself.",
        inspiration: "ML systems often stick to a model regardless of performance. In production, this is a reliability issue. I built this to ensure systems are fast when possible and accurate when necessary.",
        problem: "Need systems that are fast when possible and accurate when necessary. Classical = cheap, Neural = expensive. Always using one is inefficient.",
        architecture: [
          "Solve: Initial pass using classical numerical methods.",
          "Diagnose: Real-time statistical tests on residuals.",
          "Decide: Automatic model selection and switching if needed."
        ],
        features: [
          "Automatic model selection",
          "Four-test diagnostic engine",
          "Three scenario demos (clean, noisy, mismatch)",
          "Modular architecture",
          "Live interactive demo"
        ],
        different: "The system decides WHETHER to train a model, not just how. It uses statistical hypothesis tests rather than heuristics to drive switching decisions.",
        decisions: [
          "Fully modular system design",
          "Stability improvements (gradient clipping, normalization)",
          "Configurable thresholds with reasoning"
        ]
      }
    }
  };

  const data = projectId ? projectData[projectId] : null;

  if (!data) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-background/80 backdrop-blur-xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-full max-w-5xl max-h-[90vh] glass rounded-[32px] overflow-hidden flex flex-col relative border-white/10"
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                  {data.icon}
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight">{data.title}</h2>
                  {data.subtitle && <p className="text-xs font-medium text-muted-foreground mt-1 italic">{data.subtitle}</p>}
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-12">
              {/* Top Links Row & Toggle */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/5">
                {data.hasToggle ? (
                  <div className="flex p-1 bg-white/[0.05] rounded-xl border border-white/5 w-fit">
                    <button
                      onClick={() => setViewMode("research")}
                      className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${viewMode === "research" ? "bg-accent text-white shadow-lg shadow-accent/20" : "text-muted-foreground hover:text-foreground"}`}
                    >
                      <Microscope className="w-3.5 h-3.5" /> Research Angle
                    </button>
                    <button
                      onClick={() => setViewMode("engineering")}
                      className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${viewMode === "engineering" ? "bg-accent text-white shadow-lg shadow-accent/20" : "text-muted-foreground hover:text-foreground"}`}
                    >
                      <Code2 className="w-3.5 h-3.5" /> Engineering Angle
                    </button>
                  </div>
                ) : <div />}
                
                <div className="flex items-center gap-8">
                  {data.github && (
                    <a 
                      href={data.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Github className="w-4 h-4" /> Github
                    </a>
                  )}
                  {data.link && (
                    <a 
                      href={data.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Project Link
                    </a>
                  )}
                </div>
              </div>

              {projectId === "ode-solver" ? (
                /* Specialized Layout for ODE Solver */
                <div className="space-y-12">
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-light text-foreground leading-tight">
                      {viewMode === "research" ? data.research.tagline : data.engineering.tagline}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
                    <div className="space-y-10">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-accent">
                          <Lightbulb className="w-5 h-5" />
                          <h3 className="font-bold uppercase text-xs tracking-widest">Key Insight</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {viewMode === "research" ? data.research.inspiration : data.engineering.inspiration}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-accent">
                          <Target className="w-5 h-5" />
                          <h3 className="font-bold uppercase text-xs tracking-widest">The Problem</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {viewMode === "research" ? data.research.problem : data.engineering.problem}
                        </p>
                      </div>
                    </div>

                    <div className="glass p-6 rounded-2xl border-white/5 space-y-6">
                      <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {data.tech.map((tech: string) => (
                            <span key={tech} className="px-2 py-1 bg-white/[0.05] border border-white/10 rounded-md text-[10px] font-bold text-muted-foreground">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4 pt-4 border-t border-white/5">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">What makes it different</h4>
                        <p className="text-[11px] text-muted-foreground leading-relaxed">
                          {viewMode === "research" ? "Driven entirely by statistical hypothesis tests, not heuristics." : data.engineering.different}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="section-card bg-white/[0.01] p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <Workflow className="w-5 h-5 text-accent" />
                        <h3 className="font-bold uppercase text-xs tracking-widest">
                          {viewMode === "research" ? "The Approach" : "System Architecture"}
                        </h3>
                      </div>
                      {viewMode === "research" ? (
                        <p className="text-sm text-muted-foreground leading-relaxed">{data.research.approach}</p>
                      ) : (
                        <ul className="space-y-3">
                          {data.engineering.architecture.map((step: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                              {step}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="section-card bg-white/[0.01] p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <Zap className="w-5 h-5 text-accent" />
                        <h3 className="font-bold uppercase text-xs tracking-widest">
                          {viewMode === "research" ? "Technical Details" : "Key Features"}
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {(viewMode === "research" ? data.research.details : data.engineering.features).map((item: string, i: number) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-accent">
                        <TrendingUp className="w-4 h-4" />
                        <h3 className="font-bold uppercase text-xs tracking-widest">Impact / Results</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {data.research.impact}
                      </p>
                    </div>
                    {viewMode === "engineering" && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-accent">
                          <Rocket className="w-4 h-4" />
                          <h3 className="font-bold uppercase text-xs tracking-widest">Engineering Decisions</h3>
                        </div>
                        <ul className="space-y-2">
                          {data.engineering.decisions.map((decision: string, i: number) => (
                            <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-accent/50" />
                              {decision}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                /* Standard Layout for other projects */
                <>
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
                    <div className="space-y-8">
                      {data.sections.map((section: any, i: number) => (
                        <div key={i} className="space-y-4">
                          <div className="flex items-center gap-2 text-accent">
                            {section.icon}
                            <h3 className="font-bold uppercase text-xs tracking-widest">{section.title}</h3>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {section.content}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-6">
                      <div className="glass p-6 rounded-2xl border-white/5 space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {data.tech.map((tech: string) => (
                            <span key={tech} className="px-2 py-1 bg-white/[0.05] border border-white/10 rounded-md text-[10px] font-bold text-muted-foreground">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="section-card bg-white/[0.01] p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <Layers className="w-5 h-5 text-accent" />
                        <h3 className="font-bold uppercase text-xs tracking-widest">
                          {projectId === "music-recommender" ? "How It Works" : "The Approach"}
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {data.approach.map((point: string, i: number) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="section-card bg-white/[0.01] p-8">
                      <div className="flex items-center gap-3 mb-6">
                        {projectId === "music-recommender" ? <Gauge className="w-5 h-5 text-accent" /> : <Code2 className="w-5 h-5 text-accent" />}
                        <h3 className="font-bold uppercase text-xs tracking-widest">
                          {projectId === "music-recommender" ? "Numbers" : "Key Features"}
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {data.features.map((feature: string, i: number) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <h3 className="font-bold uppercase text-xs tracking-widest text-accent">
                        {projectId === "music-recommender" ? "The Core" : "Impact"}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {data.impact}
                      </p>
                    </div>
                    {data.nextSteps && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-accent">
                          <Rocket className="w-4 h-4" />
                          <h3 className="font-bold uppercase text-xs tracking-widest">What's Next</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {data.nextSteps}
                        </p>
                      </div>
                    )}
                    {data.extra && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-accent">
                          {data.extra.icon}
                          <h3 className="font-bold uppercase text-xs tracking-widest">{data.extra.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {data.extra.content}
                        </p>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
