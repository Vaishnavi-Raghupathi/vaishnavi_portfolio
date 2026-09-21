import { useEffect, useRef } from "react";
import { X, Github, ExternalLink } from "lucide-react";
import { projects } from "../data/portfolio";

interface ProjectDetailsProps {
  projectId: string | null;
  onClose: () => void;
}

export default function ProjectDetails({ projectId, onClose }: ProjectDetailsProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const data = projects.find((project) => project.id === projectId);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!projectId || !dialog) return;
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      opener?.focus();
    };
  }, [projectId]);

  if (!data) return null;

  return (
    <dialog ref={dialogRef} aria-labelledby="project-title" aria-describedby="project-description" className="project-dialog m-auto w-[calc(100%-2rem)] max-w-4xl max-h-[90dvh] overflow-y-auto border border-accent/20 bg-background text-foreground p-0 shadow-2xl" onCancel={(event) => { event.preventDefault(); onClose(); }} onClick={(event) => { if (event.target === event.currentTarget) { const bounds = event.currentTarget.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose(); } }}>
      <div className="sticky top-0 bg-background border-b border-accent/10 p-6 md:p-8 flex items-start justify-between gap-4 z-10">
        <h2 id="project-title" className="text-xl md:text-3xl leading-tight">{data.title}</h2>
        <button type="button" autoFocus onClick={onClose} aria-label="Close project details" className="p-2 shrink-0 rounded-full hover:bg-muted text-muted-foreground hover:text-accent"><X className="w-5 h-5" /></button>
      </div>
      <div className="p-6 md:p-10 space-y-8">
        <p id="project-description" className="text-muted-foreground leading-relaxed">{data.description}</p>
        <div className="flex flex-wrap gap-6">
          {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline"><Github className="w-4 h-4" />View code on GitHub</a>}
          {data.link && <a href={data.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline"><ExternalLink className="w-4 h-4" />Open live demo</a>}
        </div>
        <div className="flex flex-wrap gap-2">
          {data.tech.map((tech) => <span key={tech} className="border border-accent/15 px-3 py-2 font-mono text-[11px] text-muted-foreground">{tech}</span>)}
        </div>
        {[{ title: "Approach", points: data.approach }, { title: "Results & Capabilities", points: data.results }].map((section) => (
          <section key={section.title} className="space-y-4">
            <h3 className="label-micro text-accent">{section.title}</h3>
            <ul className="space-y-4">
              {section.points.map((point) => <li key={point} className="flex gap-3 text-sm text-muted-foreground leading-relaxed"><span aria-hidden="true" className="text-accent">/</span><span>{point}</span></li>)}
            </ul>
          </section>
        ))}
      </div>
    </dialog>
  );
}
