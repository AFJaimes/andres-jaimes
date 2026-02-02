import { FunctionComponent } from "react";
import css from "./Fincaraiz.module.scss";

const Fincaraiz: FunctionComponent = () => {
  return (
    <section className={`${css.root}`}>
      <p className={css.text}>
        I participated in the migration of the portal <b>Fincaraiz.com.co from ASP.net to React</b>
      </p>
      <h3>Old Layout</h3>
      <img
        alt="Fincaraiz.com.co old layout homepage"
        className={css.images}
        src="fincaraizOld.png"
        loading="lazy"
      />
      <img
        alt="Fincaraiz.com.co old layout search results page"
        className={css.images}
        src="fincaraizOld2.png"
        loading="lazy"
      />
      <h3>New Layout</h3>
      <img
        alt="Fincaraiz.com.co new layout homepage"
        className={css.images}
        src="fincaraizNew1.png"
        loading="lazy"
      />
      <img
        alt="Fincaraiz.com.co new layout search results page"
        className={css.images}
        src="fincaraizNew2.png"
        loading="lazy"
      />
      <img
        alt="Fincaraiz.com.co new layout advertisement page"
        className={css.images}
        src="fincaraizNew3.png"
        loading="lazy"
      />
    </section>
  );
};

export default Fincaraiz;
