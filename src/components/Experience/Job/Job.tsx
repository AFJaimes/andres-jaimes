import css from "./Job.module.scss";
import { FunctionComponent } from "react";
import { JobProps } from "./Job.proptypes";

const Job: FunctionComponent<JobProps> = ({ ...job }) => {
  return (
    <div className={css.container}>
      {'<'}
      <span className={css.colorGreen}>{job.jobTitle}</span>
      {'/>'}
      <br />
      <span className={css.description}> {job.description}</span>
    </div>
  );
};

export default Job;
