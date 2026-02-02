import { FunctionComponent } from "react";
import css from "./AnimationPlayground.module.scss";

const ArraysObjects: FunctionComponent = () => {
  return (
    <section className={`${css.root}`}>
      <p className={css.text}>
        Simple WebPage to illustrate Arrays and objects structures and functions
        (click to open)
      </p>
      <a
        title="Arrays and Objects in JS"
        href="https://animations-playground-showcase.vercel.app/"
        target="_blank"
        rel="noindex nofollow noopener noreferrer"
      >
        Arrays and Objects in JS
        <br />
        <img
          alt="CSS animations playground showcase screenshot"
          className={css.images}
          src="animationsShowcase.png"
          loading="lazy"
        />
      </a>
    </section>
  );
};

export default ArraysObjects;
