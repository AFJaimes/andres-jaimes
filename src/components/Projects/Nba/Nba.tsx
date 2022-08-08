import { FunctionComponent, useEffect, useState } from "react";
import css from "./Nba.module.scss";

const Nba: FunctionComponent = () => {
  return (
    <section className={`${css.root}`}>
      <p className={css.text}>Participated in the NBA 75th anniversary pages (/teaser, /explore, /archive-75, /75-stories, /finals, /team)</p>
      <a
        title="NBA 75th anniversary"
        href="https://www.nba.com/75"
        target="_blank"
        rel="noindex nofollow noopener noreferrer"
      >
        NBA 75th anniversary
      </a>
      
      <img
        alt="fincaraiz.com.co old layout"
        className={css.images}
        src="Nba1.png"
      />
      <img
        alt="fincaraiz.com.co old page results"
        className={css.images}
        src="Nba2.png"
      />
    </section>
  );
};

export default Nba;
