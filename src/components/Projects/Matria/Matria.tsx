import { FunctionComponent } from "react";
import css from "./Matria.module.scss";
import { useLanguage } from "contexts/LanguageContext";

const Matria: FunctionComponent = () => {
  const { t } = useLanguage();

  return (
    <section className={css.root}>
      <p className={css.text}>{t("projects.matria.description")}</p>
      <a
        href="https://matria-arq.vercel.app/es"
        target="_blank"
        rel="noindex nofollow noopener noreferrer"
        aria-label={t("projects.matria.ariaLabel")}
        className={css.link}
      >
        {t("projects.matria.linkText")}
      </a>

      <img
        alt={t("projects.matria.imageAlt")}
        className={css.images}
        src="/matria.png"
        loading="lazy"
      />
    </section>
  );
};

export default Matria;