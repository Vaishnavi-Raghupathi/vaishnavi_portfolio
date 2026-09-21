export const profile = {
  email: "vaishnavir2725@gmail.com",
  phone: "+91 76187 96438",
  phoneHref: "tel:+917618796438",
  github: "https://github.com/Vaishnavi-Raghupathi",
  linkedin: "https://linkedin.com/in/vaishnavi-r-8a97672a6",
  instagram: "https://www.instagram.com/workiniterations/",
  resume: `${import.meta.env.BASE_URL}Vaishnavi_R_ML_Research_Resume.pdf`,
};

export const manuscript = {
  title: "A Physics-Informed Hybrid Digital Twin for Scalable Health Management of PMSMs",
  status: "Manuscript submitted",
  journal: "IEEE Transactions on Industrial Informatics",
};

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  link?: string;
  approach: string[];
  results: string[];
}

export const projects: Project[] = [
  {
    id: "thermal-digital-twin",
    title: "Physics-Informed Weak-SINDy Thermal Digital Twin for PMSM",
    description: "An energy-conserving framework for discovering missing thermal dynamics in a physics-based motor model. Reduced unseen-profile temperature RMSE by 53.7% across 14 untouched test profiles.",
    tech: ["Python", "NumPy", "SciPy", "PyTorch", "SINDy", "RK4"],
    github: "https://github.com/Vaishnavi-Raghupathi/PMSM_thermal_DT",
    approach: [
      "Developed an energy-conserving weak-SINDy framework using 1.33M measurements across 184.8 operating hours, avoiding direct differentiation of noisy temperature data.",
      "Designed a leakage-free profile-level evaluation and sparse model-selection pipeline using 189,315 weak-form equations.",
      "Identified interpretable speed-, load-, and loss-dependent mechanisms while enforcing energy conservation.",
    ],
    results: [
      "Improved unseen-profile temperature RMSE by 53.7%, from 7.61°C to 3.52°C.",
      "Improved permanent-magnet temperature RMSE by 69.6%, from 13.75°C to 4.18°C.",
      "Evaluated generalization across 14 untouched test profiles.",
    ],
  },
  {
    id: "ode-solver",
    title: "Adaptive Solver Selection Platform for Dynamical Systems",
    description: "Benchmarked 10+ classical, hybrid ML, physics-informed, and data-driven methods. Automatically recommends models for chaotic, stiff, and model-mismatch dynamics using error, runtime, and residual diagnostics.",
    tech: ["Python", "SciPy", "PyTorch", "scikit-learn", "Streamlit", "Scientific ML"],
    github: "https://github.com/Vaishnavi-Raghupathi/Adaptive-ODE-Solver-with-Diagnostic-Driven-Model-Switching",
    link: "https://adaptive-ode-solver-with-diagnostic-driven-model-switching-bgd.streamlit.app/",
    approach: [
      "Benchmarked 10+ classical, hybrid ML, physics-informed, and data-driven methods using held-out error, runtime, and residual diagnostics.",
      "Built automated model recommendations for chaotic, stiff, and model-mismatch dynamics using known equations or uploaded time-series data.",
    ],
    results: [
      "Validated selected methods across benchmark systems.",
      "Validated a hybrid RK4 and residual neural network for misspecified dynamics.",
    ],
  },
  {
    id: "research-agent",
    title: "AI Research-to-Code Agent",
    description: "A modular pipeline that turns PDF research papers into Python notebooks, with structured summaries, methodology extraction, code generation, and context-aware Q&A.",
    tech: ["Python", "Llama 3.3 70B", "OpenRouter", "PyMuPDF", "Streamlit"],
    github: "https://github.com/Vaishnavi-Raghupathi/research_agent_mvp",
    link: "https://researchagentmvp-byc6h2frcyhtctrrrvjxxr.streamlit.app/",
    approach: [
      "Designed a modular architecture for extraction, summarization, code generation, and notebook packaging.",
      "Used chunked LLM processing to extract methodology, mathematical contributions, and experimental setup from research papers.",
    ],
    results: [
      "Supports PDF uploads and arXiv URLs.",
      "Generates technical summaries and code, with context-aware Q&A and Jupyter notebook export.",
    ],
  },
  {
    id: "music-recommender",
    title: "Real-Time Music-to-Movie Recommender",
    description: "Wavelength maps Spotify listening preferences into a six-dimensional cinematic mood space, combining semantic and geometric scoring with FAISS to find films that match your music.",
    tech: ["Python", "FAISS", "Sentence Transformers", "Flask", "Spotipy", "scikit-learn"],
    github: "https://github.com/Vaishnavi-Raghupathi/music-to-movie-recommender",
    approach: [
      "Maps Spotify audio features into emotional tone, pacing, texture, intensity, intimacy, and darkness.",
      "Combines semantic and geometric scoring with FAISS vector search over movie metadata.",
      "Clusters listening profiles to identify dominant moods before ranking recommendations.",
    ],
    results: [
      "Indexes over 900,000 films for cross-modal recommendations.",
      "Recommends films from listening preferences without requiring movie ratings or watch history.",
    ],
  },
];
