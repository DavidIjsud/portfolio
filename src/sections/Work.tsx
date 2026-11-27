import { useState } from 'react';
import Reveal from '../components/Reveal';
import { CompactProjectCard, FeaturedProjectCard } from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { featuredProjects, otherProjects, type Project } from '../data/projects';
import { useLanguage } from '../i18n';

export default function Work() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="work" className="border-t border-line/60 py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">{t.work.eyebrow}</p>
          <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-tight tracking-tight text-white">
            {t.work.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{t.work.lead}</p>
        </Reveal>

        <p className="eyebrow mt-14">{t.work.featured}</p>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.08} className="h-full">
              <FeaturedProjectCard project={project} onOpen={setSelected} />
            </Reveal>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap items-end justify-between gap-4 border-t border-line pt-10">
          <div>
            <p className="eyebrow">{t.work.more}</p>
            <p className="mt-2 font-display text-2xl font-semibold text-white">
              {t.work.moreTitle}
            </p>
          </div>
          <span className="font-mono text-xs text-muted">
            {otherProjects.length} {t.work.more.toLowerCase()}
          </span>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <Reveal key={project.id} delay={(index % 3) * 0.06} className="h-full">
              <CompactProjectCard project={project} onOpen={setSelected} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
