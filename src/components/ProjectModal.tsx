import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, X } from 'lucide-react';
import type { Project, ProjectMetrics } from '../data/projects';
import { useLanguage } from '../i18n';

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

function ModalBody({ project, onClose }: { project: Project; onClose: () => void }) {
  const { language, t } = useLanguage();
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
  }, [project.id]);

  const links: { label: string; href: string }[] = [];
  if (project.links?.play) links.push({ label: 'Google Play', href: project.links.play });
  if (project.links?.app) links.push({ label: 'App Store', href: project.links.app });
  if (project.links?.github) links.push({ label: t.work.source, href: project.links.github });
  if (project.links?.githubIos) links.push({ label: 'iOS source', href: project.links.githubIos });

  const metrics = project.metrics
    ? (Object.entries(project.metrics) as [keyof ProjectMetrics, string | undefined][]).filter(
        (entry): entry is [keyof ProjectMetrics, string] => Boolean(entry[1]),
      )
    : [];

  const sections = [
    { title: t.modal.challenge, body: project.challenge[language] },
    { title: t.modal.approach, body: project.approach[language] },
    { title: t.modal.result, body: project.result[language] },
  ];

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="absolute inset-0 bg-ink/85 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={project.name}
        className="relative z-10 max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-line bg-panel shadow-2xl"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="sticky top-0 z-20 flex items-start justify-between gap-4 border-b border-line bg-panel/95 px-6 py-5 backdrop-blur-md sm:px-8">
          <div>
            <p className="eyebrow">{project.tag[language]}</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">
              {project.name}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.modal.close}
            className="rounded-full border border-line bg-ink/60 p-2.5 text-muted transition-colors hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        <div className="space-y-8 px-6 py-8 sm:px-8">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-[#0d0f14] sm:aspect-[21/9]">
            {project.images.length > 0 ? (
              <img
                src={project.images[activeImage]}
                alt={`${project.name}, ${t.modal.gallery} ${activeImage + 1}`}
                className="h-full w-full object-contain"
              />
            ) : (
              <div className="bg-grid flex h-full w-full items-center justify-center">
                <span className="font-display text-7xl font-bold text-white/[0.07]">
                  {project.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
            )}

            {project.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setActiveImage(
                      (current) => (current - 1 + project.images.length) % project.images.length,
                    )
                  }
                  aria-label="Previous screenshot"
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-line bg-ink/80 p-2 text-white transition-colors hover:bg-accent hover:text-ink"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveImage((current) => (current + 1) % project.images.length)
                  }
                  aria-label="Next screenshot"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-line bg-ink/80 p-2 text-white transition-colors hover:bg-accent hover:text-ink"
                >
                  <ArrowRight size={18} />
                </button>
                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-ink/80 px-3 py-1 font-mono text-[10px] text-muted">
                  {activeImage + 1} / {project.images.length}
                </span>
              </>
            )}
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="eyebrow">{t.modal.stack}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-line bg-ink/60 px-2.5 py-1.5 font-mono text-[11px] text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            {metrics.length > 0 && (
              <div>
                <p className="eyebrow">{t.work.productScale}</p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {metrics.map(([key, value]) => (
                    <div key={key} className="rounded-xl border border-line bg-ink/60 p-3">
                      <p className="font-display text-lg font-semibold text-accent">
                        {value}
                        {key === 'rating' ? ' ★' : ''}
                      </p>
                      <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                        {t.work[key]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            {sections.map((section) => (
              <div key={section.title} className="border-t border-line pt-6">
                <h3 className="font-display text-lg font-semibold text-white">{section.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{section.body}</p>
              </div>
            ))}
          </div>

          {links.length > 0 && (
            <div className="border-t border-line pt-6">
              <p className="eyebrow">{t.modal.links}</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-ink/60 px-4 py-2 text-sm text-white transition-colors hover:border-accent hover:text-accent"
                  >
                    {link.label}
                    <ExternalLink size={14} />
                  </a>
                ))}
              </div>
            </div>
          )}

          {metrics.length > 0 && (
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted/70">
              {t.modal.scaleNote}
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && <ModalBody key={project.id} project={project} onClose={onClose} />}
    </AnimatePresence>
  );
}
