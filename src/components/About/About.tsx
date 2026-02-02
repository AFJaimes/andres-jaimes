import css from "./About.module.scss";
import { FunctionComponent } from "react";
import Pointer from "components/Pointer/Pointer";

const About: FunctionComponent = () => {
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
          As a Computer Systems Engineer with a passion for crafting exceptional
          digital experiences, I specialize in creating intuitive user
          interfaces and engaging user experiences. My expertise lies at the
          intersection of design and development, where I bring ideas to life
          through clean, efficient code.
          <br />
          <br />
          I'm driven by the challenge of transforming concepts into visually
          stunning and functional applications. Whether it's building
          interactive animations, responsive layouts, or seamless user flows, my
          focus is always on creating memorable experiences that delight users
          while maintaining technical excellence.
          <br />
          <br />
          My approach combines modern web technologies with creative
          problem-solving, constantly exploring new tools and techniques to push
          the boundaries of what's possible in front-end development. I believe
          great code should not only work flawlessly but also look beautiful and
          feel intuitive.
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
