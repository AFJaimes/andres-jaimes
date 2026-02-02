import Social from "components/Social/Social";
import { FunctionComponent } from "react";
import css from "./Header.module.scss";

const Header: FunctionComponent = () => {
  return (
    <header className={css.root} role="banner">
      <h1 className={css.header}>
        <span className={css.colorMain} aria-hidden="true">{`<`}</span>
        Andrés Felipe Jaimes Sánchez
        <span className={css.colorMain} aria-hidden="true">{`/>`}</span>
      </h1>
      <p className={css.subheader}>
        (<span className={css.propsText}>Software Engineer</span> &&{" "}
        <span className={css.propsText}>Cat Lover</span>)
      </p>
      <nav aria-label="Social media links">
        <Social />
      </nav>
    </header>
  );
};

export default Header;
