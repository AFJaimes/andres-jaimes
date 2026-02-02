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
        <span className={css.brace}>{`{`}</span>
      </h2>
      <div className={css.jsonContent}>
        {skills.map((skill, skillIndex) => {
          return (
            <div key={skillIndex} className={css.skill}>
              <span className={css.indent}></span>
              <span className={css.propertyName}>"{skill.title}":</span>
              <span className={css.arrayStart}>[</span>
              <span className={css.chipsContainer}>
                {skill.content.map((value, index) => {
                  return (
                    <span key={index}>
                      <span className={css.chip}>"{value}"</span>
                      {index < skill.content.length - 1 && <span className={css.comma}>, </span>}
                    </span>
                  );
                })}
              </span>
              <span className={css.arrayEnd}>]</span>
              {skillIndex < skills.length - 1 && <span className={css.comma}>,</span>}
            </div>
          );
        })}
      </div>
      <span className={css.brace}>{`}`}</span>
    </section>
  );
};

export default Skills;
