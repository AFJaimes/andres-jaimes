import { FunctionComponent } from "react";
import css from "./UiUxPlaybook.module.scss";
import { useLanguage } from "contexts/LanguageContext";

const UiUxPlaybook: FunctionComponent = () => {
  const { t } = useLanguage();

  return (
    <section className={css.root}>
      <p className={css.text}>{t("projects.uiUxPlaybook.description")}</p>
      <a
        href="https://ui-ux-playbook.vercel.app/"
        target="_blank"
        rel="noindex nofollow noopener noreferrer"
        aria-label={t("projects.uiUxPlaybook.ariaLabel")}
        className={css.link}
      >
        {t("projects.uiUxPlaybook.linkText")}
      </a>

      <img
        alt={t("projects.uiUxPlaybook.imageAlt")}
        className={css.images}
        src="/uiuxplaybook.png"
        loading="lazy"
      />
    </section>
  );
};

export default UiUxPlaybook;