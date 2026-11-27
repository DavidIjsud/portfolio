import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu as MenuIcon, X } from 'lucide-react';
import { useLanguage } from '../i18n';
import LanguageToggle from './LanguageToggle';

export default function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#work', label: t.nav.work },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/80 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <a
          href="#home"
          className="font-display text-xl font-bold tracking-tight text-white"
          aria-label="David Garcia, home"
        >
          DG<span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-accent-soft sm:flex"
          >
            {t.nav.cta}
            <ArrowUpRight size={15} strokeWidth={2.2} />
          </a>
          <button
            type="button"
            className="rounded-full border border-line bg-panel/70 p-2 text-white md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line bg-panel md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="container-page flex flex-col py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line/70 py-3 font-display text-lg text-white last:border-0"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
