import { FunctionComponent } from "react";
import css from "./Abbvie.module.scss";

const Abbvie: FunctionComponent = () => {
  return (
    <section className={`${css.root}`}>
      <p className={css.text}>Took part on the redesign of the Abbvie Global page</p>
      <a
        href="https://www.abbvie.com/"
        target="_blank"
        rel="noindex nofollow noopener noreferrer"
        aria-label="Visit AbbVie Global website"
      >
        Abbvie Global
      </a>
      
      <img
        alt="AbbVie Global homepage redesign"
        className={css.images}
        src="abbvie.jpeg"
        loading="lazy"
      />
      <img
        alt="AbbVie Global Who We Are page redesign"
        className={css.images}
        src="abbvie-wwa.jpeg"
        loading="lazy"
      />
    </section>
  );
};

export default Abbvie;
