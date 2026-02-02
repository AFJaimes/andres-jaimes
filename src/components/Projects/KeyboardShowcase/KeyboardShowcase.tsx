import { FunctionComponent } from "react";
import css from "./KeyboardShowcase.module.scss";
import CssKey from "components/CssKey/CssKey";

const KeyboardShowcase: FunctionComponent = () => {
  return (
    <section className={css.root}>
      <div className={css.keyboardContainer}>
        <CssKey keyString="AFJS" />
      </div>
    </section>
  );
};

export default KeyboardShowcase;

