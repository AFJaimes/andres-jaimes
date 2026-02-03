import { FunctionComponent } from "react";
import css from "./Akoya.module.scss";
import { useLanguage } from "contexts/LanguageContext";

const Akoya: FunctionComponent = () => {
  const { t } = useLanguage();
  
  return (
    <section className={`${css.root}`}>
      <p className={css.text}>{t("projects.akoya.description")}</p>
      <a
        href="https://akoya.com/fintechs"
        target="_blank"
        rel="noindex nofollow noopener noreferrer"
        aria-label={t("projects.akoya.ariaLabel")}
        className={css.link}
      >
        {t("projects.akoya.linkText")}
      </a>
      
      <img
        alt={t("projects.akoya.imageAlt")}
        className={css.images}
        src="/Fintechs hero image.svg"
        loading="lazy"
      />
    </section>
  );
};

export default Akoya;

