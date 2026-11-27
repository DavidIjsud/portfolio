import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { en, type Dictionary } from './en';
import { es } from './es';

export type Language = 'en' | 'es';

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = window.localStorage.getItem('dg-language');
    return saved === 'es' || saved === 'en' ? saved : 'en';
  });

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem('dg-language', language);
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: language === 'en' ? en : es }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used inside a LanguageProvider');
  }
  return context;
}
