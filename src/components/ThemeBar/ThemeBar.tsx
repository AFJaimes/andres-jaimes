import { FunctionComponent, useState, useRef, useEffect } from "react";
import { useTheme } from "contexts/ThemeContext";
import css from "./ThemeBar.module.scss";

const themeLabels: Record<string, string> = {
  light: "☀️ Light",
  dark: "🌙 Dark",
  walnut: "🌰 Walnut",
  grape: "🍇 Grape",
};

const ThemeBar: FunctionComponent = () => {
  const { theme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleThemeSelect = (selectedTheme: string) => {
    setTheme(selectedTheme as any);
    setIsOpen(false);
  };

  return (
    <div className={css.root}>
      <div className={css.container}>
        <div className={css.dropdown} ref={dropdownRef}>
          <button
            className={css.selectButton}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Select theme"
            aria-expanded={isOpen}
          >
            <span className={css.icon}>{themeLabels[theme]}</span>
            <span className={css.arrow}>{isOpen ? "▲" : "▼"}</span>
          </button>
          {isOpen && (
            <div className={css.dropdownMenu}>
              {themes.map((themeOption) => (
                <button
                  key={themeOption}
                  className={`${css.menuItem} ${theme === themeOption ? css.active : ""}`}
                  onClick={() => handleThemeSelect(themeOption)}
                  aria-label={`Select ${themeOption} theme`}
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

