import { FunctionComponent } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import css from "./Social.module.scss";

const Social: FunctionComponent = () => {
  return (
    <section className={css.root}>
      <a
        target="_blank"
        rel="noopener noreferrer nofollow noindex"
        href="https://www.linkedin.com/in/afjaimes/"
        className={css.colorBlue}
        aria-label="Visit my LinkedIn profile"
      >
        <LinkedInIcon aria-hidden="true" />
      </a>
      {' '}
      <a
        target="_blank"
        rel="noopener noreferrer nofollow noindex"
        href="https://github.com/AFJaimes"
        className={css.colorMain}
        aria-label="Visit my GitHub profile"
      >
        <GitHubIcon aria-hidden="true" />
      </a>
    </section>
  );
};

export default Social;
