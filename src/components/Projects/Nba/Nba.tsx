import { FunctionComponent } from "react";
import css from "./Nba.module.scss";

const Nba: FunctionComponent = () => {
  return (
    <section className={`${css.root}`}>
      <p className={css.text}>Participated in the NBA 75th anniversary pages (/teaser, /explore, /archive-75, /75-stories, /finals, /team)</p>
      <a
        href="https://www.nba.com/75"
        target="_blank"
        rel="noindex nofollow noopener noreferrer"
        aria-label="Visit NBA 75th anniversary website"
      >
        NBA 75th anniversary
      </a>
      
      <img
        alt="NBA 75th anniversary teaser page"
        className={css.images}
        src="Nba1.png"
        loading="lazy"
      />
      <img
        alt="NBA 75th anniversary explore page"
        className={css.images}
        src="NBAExplore.png"
        loading="lazy"
      />
      <img
        alt="NBA 75th anniversary final moments page"
        className={css.images}
        src="Nba2.png"
        loading="lazy"
      />
    </section>
  );
};

export default Nba;
