import { FunctionComponent, useState, useRef, useEffect } from "react";
import { useTheme } from "contexts/ThemeContext";
import { useLanguage } from "contexts/LanguageContext";
import css from "./ThemeBar.module.scss";

const ThemeBar: FunctionComponent = () => {
  const { theme, setTheme, themes } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const themeDropdownRef = useRef<HTMLDivElement>(null);
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (themeDropdownRef.current && !themeDropdownRef.current.contains(event.target as Node)) {
        setIsThemeOpen(false);
      }
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    };

    if (isThemeOpen || isLanguageOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isThemeOpen, isLanguageOpen]);

  const handleThemeSelect = (selectedTheme: string) => {
    setTheme(selectedTheme as any);
    setIsThemeOpen(false);
  };

  const handleLanguageSelect = (selectedLanguage: "en" | "es") => {
    setLanguage(selectedLanguage);
    setIsLanguageOpen(false);
  };

  const themeLabels: Record<string, string> = {
    light: t("theme.light"),
    dark: t("theme.dark"),
    walnut: t("theme.walnut"),
    grape: t("theme.grape"),
  };

  const languageLabels: Record<string, string> = {
    en: "🇺🇸 English",
    es: "🇪🇸 Español",
  };

  return (
    <div className={css.root}>
      <div className={css.container}>
        <div className={css.dropdown} ref={languageDropdownRef}>
          <button
            className={css.selectButton}
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            aria-label={t("theme.selectLanguage")}
            aria-expanded={isLanguageOpen}
          >
            <span className={css.icon}>{languageLabels[language]}</span>
            <span className={css.arrow}>{isLanguageOpen ? "▲" : "▼"}</span>
          </button>
          {isLanguageOpen && (
            <div className={css.dropdownMenu}>
              <button
                className={`${css.menuItem} ${language === "en" ? css.active : ""}`}
                onClick={() => handleLanguageSelect("en")}
                aria-label="Select English"
              >
                {languageLabels["en"]}
              </button>
              <button
                className={`${css.menuItem} ${language === "es" ? css.active : ""}`}
                onClick={() => handleLanguageSelect("es")}
                aria-label="Seleccionar Español"
              >
                {languageLabels["es"]}
              </button>
            </div>
          )}
        </div>
        <div className={css.dropdown} ref={themeDropdownRef}>
          <button
            className={css.selectButton}
            onClick={() => setIsThemeOpen(!isThemeOpen)}
            aria-label={t("theme.selectTheme")}
            aria-expanded={isThemeOpen}
          >
            <span className={css.icon}>{themeLabels[theme]}</span>
            <span className={css.arrow}>{isThemeOpen ? "▲" : "▼"}</span>
          </button>
          {isThemeOpen && (
            <div className={css.dropdownMenu}>
              {themes.map((themeOption) => (
                <button
                  key={themeOption}
                  className={`${css.menuItem} ${theme === themeOption ? css.active : ""}`}
                  onClick={() => handleThemeSelect(themeOption)}
                  aria-label={`${t("theme.selectTheme")} ${themeOption}`}
                >
                  {themeLabels[themeOption]}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeBar;

