import { FunctionComponent } from "react";
import { useLanguage } from "contexts/LanguageContext";
import skills from "data/skills.json";
import css from "./Skills.module.scss";

const skillKeyMap: Record<string, string> = {
  "Languages": "skills.languages",
  "Frameworks": "skills.frameworks",
  "Design Systems": "skills.designSystems",
  "AI & Development Tools": "skills.aiTools",
  "Tools": "skills.tools",
  "Others": "skills.others",
};

const Skills: FunctionComponent = () => {
  const { t } = useLanguage();

  return (
    <section className={css.root} aria-labelledby="skills-heading">
      <h2 id="skills-heading" className={css.title} title="skills">
        <span className={css.colorBlue}>let</span>
        <span className={css.colorBlueLight}> Skills</span>
        <span className={css.colorMain} aria-hidden="true"> = </span>
        <span className={css.brace} aria-hidden="true">{`{`}</span>
      </h2>
      <div className={css.jsonContent}>
        {skills.map((skill, skillIndex) => {
          const translationKey = skillKeyMap[skill.title] || skill.title;
          const translatedTitle = t(translationKey);
          return (
            <div key={skillIndex} className={css.skill}>
              <span className={css.indent}></span>
              <span className={css.propertyName}>"{translatedTitle}":</span>
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
      <span className={css.brace} aria-hidden="true">{`}`}</span>
    </section>
  );
};

export default Skills;
