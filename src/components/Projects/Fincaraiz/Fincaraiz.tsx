import { FunctionComponent } from "react";
import css from "./Fincaraiz.module.scss";

const Fincaraiz: FunctionComponent = () => {
  return (
    <section className={`${css.root}`}>
      <p className={css.text}>
        I participated in the migration of the portal <b>Fincaraiz.com.co from ASP.net to React</b>
      </p>
      <span >Old Layout</span>
      <img
        alt="fincaraiz.com.co old layout"
        className={css.images}
        src="fincaraizOld.png"
      />
      <img
        alt="fincaraiz.com.co old page results"
        className={css.images}
        src="fincaraizOld2.png"
      />
      <span >New Layout</span>
      <img
        alt="fincaraiz.com.co new page home"
        className={css.images}
        src="fincaraizNew1.png"
      />
      <img
        alt="fincaraiz.com.co old page results"
        className={css.images}
        src="fincaraizNew2.png"
      />
      <img
        alt="fincaraiz.com.co old page advert"
        className={css.images}
        src="fincaraizNew3.png"
      />
    </section>
  );
};

export default Fincaraiz;
