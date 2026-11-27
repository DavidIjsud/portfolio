import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function Hero() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    animate: reduceMotion ? undefined : { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  const stats = [
    { value: t.hero.stat1Value, label: t.hero.stat1Label },
    { value: t.hero.stat2Value, label: t.hero.stat2Label },
    { value: t.hero.stat3Value, label: t.hero.stat3Label },
  ];

  return (
    <section id="home" className="relative overflow-hidden pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-accent/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-accent/[0.04] blur-3xl" />

      <div className="container-page relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div {...rise(0)}>
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.06] px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
              {t.hero.availability}
            </span>
          </div>

          <p className="mt-8 font-mono text-xs uppercase tracking-[0.22em] text-muted">
            {t.hero.role}
          </p>

          <h1 className="mt-4 font-display text-[clamp(2.7rem,7vw,5.1rem)] font-semibold leading-[1.03] tracking-tight text-white">
            {t.hero.headlineA}
            <br />
            <span className="text-glow text-accent">{t.hero.headlineB}</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {t.hero.intro}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-accent-soft"
            >
              {t.hero.primary}
              <ArrowUpRight size={17} strokeWidth={2.2} />
            </a>
            <a
              href={t.hero.cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
            >
              <Download size={16} strokeWidth={2.2} />
              {t.hero.secondary}
            </a>
          </div>

          <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-7">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-semibold text-white md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...rise(0.15)} className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 rounded-[3rem] bg-accent/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#F2F3F7] to-[#C9CDD6] shadow-2xl">
            <img
              src="/professional_picture.png"
              alt={t.hero.photoAlt}
              className="w-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-6 left-2 rounded-2xl border border-line bg-panel/95 px-4 py-3 shadow-xl backdrop-blur sm:left-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
              {t.hero.role}
            </p>
          </div>
          <div className="absolute -right-2 -top-5 rounded-xl border border-line bg-panel/95 px-3 py-2 font-mono text-[11px] text-white shadow-xl backdrop-blur sm:right-4">
            Kotlin · Flutter · Swift
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="container-page relative mt-16 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent md:mt-20"
      >
        <ArrowDown size={14} />
        {t.hero.scroll}
      </a>
    </section>
  );
}
