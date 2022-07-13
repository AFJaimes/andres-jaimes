import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { FunctionComponent } from "react";
import experience from "data/experience.json";
import css from "./Experience.module.scss";
import Header from "./Header/Header";
import Job from "./Job/Job";
import TimelineIcon from "./TimelineIcon/TimelineIcon";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3),
      textAlign: "justify",
      backgroundColor: theme.palette.grey[900],
      color: theme.palette.background.paper,
    },
    content: {
      paddingLeft: theme.spacing(2),
    },
    subContent: {
      paddingLeft: theme.spacing(4),
    },
    paper: {
      backgroundColor: theme.palette.grey[800],
      padding: "6px 16px",
      color: "white",
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
    datesText: {
      color: theme.palette.primary.light,
    },
    experienceTitle: {
      color: theme.palette.secondary.light,
    },
    chargeText: {
      color: theme.palette.secondary.main,
    },
  })
);

const Experience: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
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
              <div className={css.icon}><TimelineIcon icon={job.iconPath} /></div>
              <div className={css.job}><Job description={job.jobDescription} jobTitle={job.companyName} /></div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Experience;
