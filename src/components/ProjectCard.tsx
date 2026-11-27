import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Project, ProjectMetrics } from '../data/projects';
import { useLanguage } from '../i18n';

function ProjectVisual({ project, className }: { project: Project; className: string }) {
  const [failed, setFailed] = useState(false);
  const image = project.images[0];

  return (
    <div className={`relative overflow-hidden bg-[#0d0f14] ${className}`}>
      {image && !failed ? (
        <img
          src={image}
          alt={`${project.name} screenshot`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
        />
      ) : (
        <div className="bg-grid flex h-full w-full items-center justify-center">
          <span className="font-display text-7xl font-bold text-white/[0.06]">
            {project.name.slice(0, 2).toUpperCase()}
          </span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-panel via-panel/10 to-transparent" />
    </div>
  );
}

function MetricsRow({ project }: { project: Project }) {
  const { t } = useLanguage();
  if (!project.metrics) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] text-muted">
      {(Object.entries(project.metrics) as [keyof ProjectMetrics, string | undefined][])
        .filter(([, value]) => Boolean(value))
        .map(([key, value]) => (
          <span key={key}>
            <span className="text-white">
              {value}
              {key === 'rating' ? ' ★' : ''}
            </span>{' '}
            {t.work[key]}
          </span>
        ))}
    </div>
  );
}

type CardProps = {
  project: Project;
  onOpen: (project: Project) => void;
};

export function FeaturedProjectCard({ project, onOpen }: CardProps) {
  const { language, t } = useLanguage();

  return (
    <article className="surface group flex flex-col overflow-hidden rounded-3xl transition duration-500 hover:-translate-y-1.5 hover:border-accent/40">
      <ProjectVisual project={project} className="aspect-[3/4]" />

      <div className="relative -mt-10 flex flex-1 flex-col px-6 pb-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
            {project.tag[language]}
          </span>
          {project.confidential && (
            <span className="rounded-full border border-line bg-ink/70 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted">
              {t.work.confidential}
            </span>
          )}
        </div>

        <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-white">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary[language]}</p>
        <MetricsRow project={project} />

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-md border border-line bg-ink/60 px-2 py-1 font-mono text-[10px] text-muted"
            >
              {item}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onOpen(project)}
          className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-accent transition-colors hover:text-accent-soft"
        >
          {t.work.viewCase}
          <ArrowUpRight size={16} strokeWidth={2.2} />
        </button>
      </div>
    </article>
  );
}

export function CompactProjectCard({ project, onOpen }: CardProps) {
  const { language, t } = useLanguage();

  return (
    <article className="surface group flex flex-col overflow-hidden rounded-2xl transition duration-500 hover:-translate-y-1 hover:border-accent/40">
      <ProjectVisual project={project} className="aspect-[16/10]" />

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-white">{project.name}</h3>
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-accent">
            {project.tag[language].split(' · ')[0]}
          </span>
        </div>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
          {project.summary[language]}
        </p>
        <MetricsRow project={project} />
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="mt-5 inline-flex items-center gap-1.5 self-start text-xs font-semibold text-accent transition-colors hover:text-accent-soft"
        >
          {t.work.viewCase}
          <ArrowUpRight size={14} strokeWidth={2.2} />
        </button>
      </div>
    </article>
  );
}
