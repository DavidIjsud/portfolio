import { GitBranch, Layers3, ServerCog, Smartphone } from 'lucide-react';
import Reveal from '../components/Reveal';
import { useLanguage } from '../i18n';

const icons = [Smartphone, Layers3, ServerCog, GitBranch];
const stack = ['Kotlin', 'Flutter', 'Dart', 'Swift', 'NestJS', 'TypeScript', 'Firebase', 'GraphQL'];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="border-t border-line/60 py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-tight tracking-tight text-white">
            {t.about.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{t.about.lead}</p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {t.about.cards.map((card, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={card.title} delay={index * 0.08} className="h-full">
                <article className="surface group h-full rounded-2xl p-6 transition-colors hover:border-accent/40 md:p-8">
                  <div className="flex items-start justify-between">
                    <div className="rounded-xl border border-accent/20 bg-accent/[0.07] p-3 text-accent">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <span className="font-mono text-xs text-muted/40">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{card.body}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-line bg-ink/60 px-2 py-1 font-mono text-[10px] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-line pt-8">
            <span className="eyebrow mr-3">{t.about.stackLabel}</span>
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-line bg-panel px-3 py-1.5 font-mono text-[11px] text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
