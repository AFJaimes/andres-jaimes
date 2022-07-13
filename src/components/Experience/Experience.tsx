import { FunctionComponent } from "react";
import experience from "data/experience.json";
import css from "./Experience.module.scss";
import Header from "./Header/Header";
import Job from "./Job/Job";
import TimelineIcon from "./TimelineIcon/TimelineIcon";
import useWindowSize from "hooks/useWindowSize";
import ArrowDownward from "@material-ui/icons/ArrowDownward";

const Experience: FunctionComponent = () => {
  const { width } = useWindowSize();

  return (
    <section className={css.root}>
      <section className={css.container}>
        {experience.map((job, index) => {
          return (
            <>
              <div className={css.jobContainer}>
                <div className={css.header}>
                  <Header
                    initialDate={job.initialDate}
                    finalDate={job.finalDate}
                    job={job.jobTitle}
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
                    description={job.jobDescription}
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
