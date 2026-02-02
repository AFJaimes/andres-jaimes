import css from "./About.module.scss";
import { FunctionComponent } from "react";
import { useLanguage } from "contexts/LanguageContext";
import Pointer from "components/Pointer/Pointer";

const About: FunctionComponent = () => {
  const { t } = useLanguage();
  const description = t("about.description").split("\n\n");

  return (
    <section className={css.root} aria-labelledby="about-heading">
      <h2 id="about-heading" className={css.header} title="about me">
        <span>const About</span>
        <span className={css.colorYellow} aria-hidden="true">{` = (`}</span>
        <span>me</span>
        <span className={css.colorYellow} aria-hidden="true">{`) `}</span>
        <span className={css.colorWhite} aria-hidden="true">{`=>`}</span>
        <span className={`${css.colorYellow} ${css.key}`} aria-hidden="true">{` {`}</span>
      </h2>
      <span className={css.colorImport} aria-hidden="true">
        <b>return (`</b>
      </span>
      <article>
        <p className={css.description}>
          {description.map((paragraph, index) => (
            <span key={index}>
              {paragraph}
              {index < description.length - 1 && (
                <>
                  <br />
                  <br />
                </>
              )}
            </span>
          ))}
          <Pointer text="." />
        </p>
      </article>
      <b>
        <span className={css.colorImport}>`)</span>
        <span className={css.colorWhite}>;</span>
      </b>
      <br />
      <span className={`${css.colorYellow} ${css.key}`}>{`}`}</span>
    </section>
  );
};

export default About;
