import { FunctionComponent } from "react";
import css from "./Stellantis.module.scss";

const Stellantis: FunctionComponent = () => {
  return (
    <section className={css.root}>
      <p className={css.text}>
        Worked with Stellantis group creating dynamic web applications in React
        with GSAP animations for their associated automotive brands.
      </p>
      <p className={css.text}>
        Developed interactive ad experiences featuring smooth motion design and
        responsive layouts for multiple car brands under the Stellantis umbrella.
      </p>
      <img alt="Stellantis Dynamic Ads" className={css.images} src="stellantis.png" />
    </section>
  );
};

export default Stellantis;

