import { FunctionComponent } from "react";
import { useLanguage } from "contexts/LanguageContext";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import css from "./Social.module.scss";

const Social: FunctionComponent = () => {
  const { t } = useLanguage();

  return (
    <section className={css.root}>
      <a
        target="_blank"
        rel="noopener noreferrer nofollow noindex"
        href="https://www.linkedin.com/in/afjaimes/"
        className={css.colorBlue}
        aria-label={t("social.linkedin")}
      >
        <LinkedInIcon aria-hidden="true" />
      </a>
      {' '}
      <a
        target="_blank"
        rel="noopener noreferrer nofollow noindex"
        href="https://github.com/AFJaimes"
        className={css.colorMain}
        aria-label={t("social.github")}
      >
        <GitHubIcon aria-hidden="true" />
      </a>
    </section>
  );
};

export default Social;
