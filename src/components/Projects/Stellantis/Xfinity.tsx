import { FunctionComponent } from "react";
import css from "./Stellantis.module.scss";

const Stellantis: FunctionComponent = () => {
  return (
    <section className={`${css.root}`}>
      <p className={css.text}>
        Stellantis associated brands web ad dynamic creation with motion design.
      </p>

      <img alt="stellantis" className={css.images} src="Stellantis.png" />

    </section>
  );
};

export default Stellantis;
