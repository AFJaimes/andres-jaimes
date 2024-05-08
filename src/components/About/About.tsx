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
          As a Computer Systems Engineer, I possess a deep passion for emerging
          technologies and have extensive experience in software design, web
          development, and application development. My professional background
          has equipped me with the skills required for high performance in roles
          demanding responsibility and efficiency.
          <br />
          <br />
          I am committed to staying at the forefront of technology, continually
          educating myself about tools that enhance everyday problem-solving
          through technological means. This commitment is driven by an
          understanding of the rapid evolution of information technology and its
          growing impact on society.
          <br />
          <br />
          My approach to technology consumption is strategic, favoring solutions
          that facilitate complex procedures and provide swift access to media
          entertainment. My experiences have taught me that effective
          development and utilization of technology necessitate firsthand use
          and understanding.
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
