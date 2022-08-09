import { FunctionComponent } from "react";
import css from "./ArraysObjects.module.scss";

const ArraysObjects: FunctionComponent = () => {
  return (
    <section className={`${css.root}`}>
      <p className={css.text}>
        Simple WebPage to illustrate Arrays and objects structures and functions
        (click to open)
      </p>
      <a
        title="Arrays and Objects in JS"
        href="https://foocamp.github.io/foocamp-array-and-objects/"
        target="_blank"
        rel="noindex nofollow noopener noreferrer"
      >
        Arrays and Objects in JS
        <br />
        <img
          alt="nba final moments"
          className={css.images}
          src="arraysScreenshot.png"
        />
      </a>
    </section>
  );
};

export default ArraysObjects;
