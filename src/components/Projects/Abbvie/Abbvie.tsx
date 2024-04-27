import { FunctionComponent } from "react";
import css from "./Abbvie.module.scss";

const Abbvie: FunctionComponent = () => {
  return (
    <section className={`${css.root}`}>
      <p className={css.text}>Took part on the redesign of the Abbvie Global page</p>
      <a
        title="Abbvie Global"
        href="https://www.abbvie.com/"
        target="_blank"
        rel="noindex nofollow noopener noreferrer"
      >
        Abbvie Global
      </a>
      
      <img
        alt="Abbvie home"
        className={css.images}
        src="abbvie.jpeg"
      />
      <img
        alt="Abbvie Who Whe Are page"
        className={css.images}
        src="abbvie-wwa.jpeg"
      />
    </section>
  );
};

export default Abbvie;
