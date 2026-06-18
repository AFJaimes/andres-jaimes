import { FunctionComponent } from "react";
import css from "./Coltcg.module.scss";
import { useLanguage } from "contexts/LanguageContext";

const Coltcg: FunctionComponent = () => {
  const { t } = useLanguage();

  return (
    <section className={css.root}>
      <p className={css.text}>{t("projects.coltcg.description")}</p>
      <a
        href="https://coltcg.com"
        target="_blank"
        rel="noindex nofollow noopener noreferrer"
        aria-label={t("projects.coltcg.ariaLabel")}
        className={css.link}
      >
        {t("projects.coltcg.linkText")}
      </a>

      <img
        alt={t("projects.coltcg.imageAlt")}
        className={css.images}
        src="/coltcg.png"
        loading="lazy"
      />
    </section>
  );
};

export default Coltcg;