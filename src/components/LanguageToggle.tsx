import { useLanguage } from '../i18n';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="flex items-center gap-0.5 rounded-full border border-line bg-panel/70 p-1"
      role="group"
      aria-label="Language"
    >
      {(['es', 'en'] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLanguage(code)}
          aria-pressed={language === code}
          className={`rounded-full px-2.5 py-1 font-mono text-[11px] font-semibold tracking-wider transition-colors ${
            language === code
              ? 'bg-accent text-ink'
              : 'text-muted hover:text-white'
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
