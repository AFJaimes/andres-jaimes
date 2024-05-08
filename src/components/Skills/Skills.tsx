import { FunctionComponent } from "react";
import skills from "data/skills.json";
import css from "./Skills.module.scss";

const Skills: FunctionComponent = () => {
  return (
    <section className={css.root}>
      <h2 className={css.title} title="skills">
        <span className={css.colorBlue}>let</span>
        <span className={css.colorBlueLight}> Skills</span>
        <span className={css.colorMain}> = </span>
        {`{`}
      </h2>
      {skills.map((skill) => {
        return (
          <div className={css.skill}>
            <span>{skill.title}:</span>
            <div className={css.chipsContainer}>
              [
              {skill.content.map((value, index) => {
                return (
                  <>
                    <span key={index} className={css.chip}>{value}</span>
                    {index < skill.content.length - 1 && ","}
                  </>
                );
              })}
              ]
            </div>

            <br />
          </div>
        );
      })}
      <span className={css.title}>{`}`}</span>
    </section>
  );
};

export default Skills;
