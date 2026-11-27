import { ArrowLeft, Check } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function StripeSuccessPage() {
  const { t } = useLanguage();

  return (
    <main className="bg-grid flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
        <Check size={36} strokeWidth={2.2} />
      </div>
      <h1 className="mt-8 font-display text-3xl font-semibold text-white sm:text-4xl">
        {t.stripe.title}
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{t.stripe.body}</p>
      <a
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-panel px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
      >
        <ArrowLeft size={16} />
        {t.stripe.back}
      </a>
    </main>
  );
}
