import { useLanguage } from '../i18n';

const companies = ['Presto', 'HEB', 'La Comer', 'Shell', 'DrillHub', 'Ueno Bank'];

export default function Trusted() {
  const { t } = useLanguage();

  return (
    <div className="border-y border-line/60">
      <div className="container-page flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-8">
        <span className="eyebrow mr-1">{t.trusted}</span>
        {companies.map((company) => (
          <span
            key={company}
            className="font-display text-sm font-semibold tracking-wide text-muted/70"
          >
            {company}
          </span>
        ))}
      </div>
    </div>
  );
}
