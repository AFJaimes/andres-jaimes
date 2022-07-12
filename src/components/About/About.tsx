import css from "./About.module.scss";
import { FunctionComponent } from "react";
import Pointer from "components/Pointer/Pointer";

const About: FunctionComponent = () => {
  return (
    <section className={css.root}>
      <h2 className={css.header} title="about me">
        <span>function About</span>
        <span className={css.colorYellow}>{` = (`}</span>
        <span>me</span>
        <span className={css.colorYellow}>{`) `}</span>
        <span className={css.colorWhite}>{`=>`}</span>
        <span className={`${css.colorYellow} ${css.key}`}>{` {`}</span>
      </h2>
      <span className={css.colorImport}>
        <b>return (`</b>
      </span>
      <article>
        <p className={css.description}>
          I am a Computer systems engineer, with great interest about new
          technologies, have experience in software design, Web environments and
          application development with the necessary experience for a good
          performance that requires responsibility and efficiency.
          <br />
          <br />
          I like to have acknowledge about tools that efficiently solve everyday
          problems using technological resources, because as each day new
          technologies are emerging is important to know how the use of the
          information technologies in society evolves.
          <br />
          <br />
          Prefer the consumption of technological resources as long as they
          allow the realization of complex procedures and provides me access to
          media entertainment in a quick way, because, I have been taught and
          learned through my experiences, that you cannot develop technologies
          without using them first
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
