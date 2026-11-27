import {
  ArrowUp,
  ArrowUpRight,
  Briefcase,
  CalendarDays,
  Code,
  Disc3,
  Download,
  Mail,
  MessageCircle,
  Video,
} from 'lucide-react';
import Reveal from '../components/Reveal';
import { useLanguage } from '../i18n';

export default function Contact() {
  const { t } = useLanguage();

  const links = [
    {
      label: t.contact.email,
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=davidijsud@gmail.com&su=New%20Opportunity',
      icon: Mail,
    },
    { label: t.contact.cv, href: t.contact.cvFile, icon: Download },
    {
      label: t.contact.linkedin,
      href: 'https://www.linkedin.com/in/david-garcia-romero-73925a206/',
      icon: Briefcase,
    },
    { label: t.contact.github, href: 'https://github.com/DavidIjsud', icon: Code },
    { label: t.contact.whatsapp, href: 'https://wa.link/x33p6u', icon: MessageCircle },
    { label: t.contact.call, href: 'https://calendly.com/davidijsud', icon: CalendarDays },
    { label: 'TikTok', href: 'https://www.tiktok.com/@davidijsud', icon: Disc3 },
    { label: 'YouTube', href: 'https://www.youtube.com/@codeya', icon: Video },
  ];

  return (
    <footer id="contact" className="relative overflow-hidden border-t border-line py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-3xl" />

      <div className="container-page relative">
        <Reveal>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(2.4rem,6vw,4.25rem)] font-semibold leading-[1.06] tracking-tight text-white">
            {t.contact.titleA}
            <br />
            <span className="text-glow text-accent">{t.contact.titleB}</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">{t.contact.lead}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {links.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="surface group flex items-center justify-between rounded-2xl px-5 py-4 transition-colors hover:border-accent/50"
              >
                <span className="flex items-center gap-3">
                  <Icon size={18} className="text-accent" strokeWidth={1.9} />
                  <span className="text-sm font-medium text-white">{label}</span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-muted transition-colors group-hover:text-white"
                />
              </a>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] text-muted">{t.contact.footer}</p>
          <div className="flex items-center gap-5">
            <span className="font-mono text-[11px] text-muted">{t.contact.location}</span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label={t.contact.backToTop}
              className="rounded-full border border-line bg-panel p-2.5 text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
