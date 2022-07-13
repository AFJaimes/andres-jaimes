import { FunctionComponent } from "react";
import experience from "data/experience.json";
import css from "./Experience.module.scss";
import Header from "./Header/Header";
import Job from "./Job/Job";
import TimelineIcon from "./TimelineIcon/TimelineIcon";

const Experience: FunctionComponent = () => {
  return (
    <section className={css.root}>
      <section className={css.container}>
        {experience.map((job) => {
          return (
            <div className={css.jobContainer}>
              <div className={css.header}>
                <Header
                  initialDate={job.initialDate}
                  finalDate={job.finalDate}
                  job={job.jobTitle}
                />
              </div>
              <div className={css.icon}>
                <TimelineIcon icon={job.iconPath} />
              </div>
              <div className={css.job}>
                <Job
                  description={job.jobDescription}
                  jobTitle={job.companyName}
                />
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Experience;
