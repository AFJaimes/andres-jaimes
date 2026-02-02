import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import enTranslations from "data/translations/en.json";
import esTranslations from "data/translations/es.json";

export type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = "language-preference";
export const AVAILABLE_LANGUAGES: Language[] = ["en", "es"];

const translations: Record<Language, any> = {
  en: enTranslations,
  es: esTranslations,
};

const getNestedValue = (obj: any, path: string): string => {
  return path.split(".").reduce((current, key) => current?.[key], obj) || path;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;
      if (stored && AVAILABLE_LANGUAGES.includes(stored)) {
        return stored;
      }
      return "en";
    }
    return "en";
  });

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("lang", language);
      if (document.querySelector("html")) {
        document.querySelector("html")?.setAttribute("lang", language);
      }
    }
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const setLanguage = (newLanguage: Language) => {
    if (AVAILABLE_LANGUAGES.includes(newLanguage)) {
      setLanguageState(newLanguage);
    }
  };

  const t = (key: string): string => {
    const translation = getNestedValue(translations[language], key);
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

