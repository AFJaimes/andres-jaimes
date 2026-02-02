import { FunctionComponent } from "react";
import css from "./FlexboxPlayground.module.scss";

const FlexboxPlayground: FunctionComponent = () => {
  return (
    <section className={`${css.root}`}>
      <p className={css.text}>
        Playground to show how css flexbox works (click to open)
      </p>
      <a
        title="Flexbox Playground in react"
        href="https://afjaimes-playground-iwnjy28tg-afjaimes.vercel.app/flexbox"
        target="_blank"
        rel="index follow noreferrer"
      >
        Flexbox Playground (React)
        <br />
        <img
          alt="Flexbox playground showcase screenshot"
          className={css.images}
          src="flexbox.png"
          loading="lazy"
        />
      </a>
    </section>
  );
};

export default FlexboxPlayground;
