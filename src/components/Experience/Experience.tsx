import { FunctionComponent } from "react";
import { useLanguage } from "contexts/LanguageContext";
import experience from "data/experience.json";
import css from "./Experience.module.scss";
import Header from "./Header/Header";
import Job from "./Job/Job";
import TimelineIcon from "./TimelineIcon/TimelineIcon";
import useWindowSize from "hooks/useWindowSize";
import ArrowDownward from "@material-ui/icons/ArrowDownward";

const companyKeyMap: Record<string, string> = {
  "BairesDev": "bairesdev",
  "HUGE INC.": "huge",
  "FINCARAIZ.COM.CO": "fincaraiz",
  "ISMOCOL S.A": "ismocol",
  "BUCARAMANGA CITY HALL": "bucaramanga",
  "IMAGENGROUP": "imagengroup",
};

const Experience: FunctionComponent = () => {
  const { width } = useWindowSize();
  const { t } = useLanguage();

  return (
    <section className={css.root} aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="sr-only">{t("experience.workExperience")}</h2>
      <section className={css.container}>
        {experience.map((job, index) => {
          const companyKey = companyKeyMap[job.companyName] || "";
          const translatedJobTitle = companyKey ? t(`experience.jobs.${companyKey}.jobTitle`) : job.jobTitle;
          const translatedDescription = companyKey ? t(`experience.jobs.${companyKey}.description`) : job.jobDescription;
          const finalDate = job.finalDate === "TODAY" ? t("experience.today") : job.finalDate;

          return (
            <>
              <div className={css.jobContainer}>
                <div className={css.header}>
                  <Header
                    initialDate={job.initialDate}
                    finalDate={finalDate}
                    job={translatedJobTitle}
                  />
                </div>
                {width > 650 && (
                  <div className={css.icon}>
                    <TimelineIcon
                      icon={job.iconPath}
                      last={index === experience.length - 1}
                    />
                  </div>
                )}
                <div className={css.job}>
                  <Job
                    description={translatedDescription}
                    jobTitle={job.companyName}
                  />
                </div>
                {width <= 650 && index !== experience.length - 1 && (
                  <span className={css.downArrow}>
                    <ArrowDownward />
                  </span>
                )}
              </div>
            </>
          );
        })}
      </section>
    </section>
  );
};

export default Experience;
