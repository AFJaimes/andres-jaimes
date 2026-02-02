import Social from "components/Social/Social";
import { FunctionComponent } from "react";
import css from "./Header.module.scss";

const Header: FunctionComponent = () => {
  return (
    <section className={css.root}>
      <h1 className={css.header}>
        <span className={css.colorMain}>{`<`}</span>
        Andrés Felipe Jaimes Sánchez
        <span className={css.colorMain}>{`/>`}</span>
      </h1>
      <p className={css.subheader}>
        (<span className={css.propsText}>Software Engineer</span> &&{" "}
        <span className={css.propsText}>Cat Lover</span>)
      </p>
      <Social />
    </section>
  );
};

export default Header;
