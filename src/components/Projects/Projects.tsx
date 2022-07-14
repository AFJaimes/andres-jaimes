import { Grid } from "@material-ui/core";
import { FunctionComponent } from "react";
import DvdScreensaver from "./DvdScreensaver/DvdScreensaver";
import css from "./Projects.module.scss";

const Projects: FunctionComponent = () => {
  return (
    <section className={css.root}>
      <Grid container>
        <Grid item sm={12} className={css.titleContainer}>
          <span className={css.title}>Other Works</span>
          <span className={css.titleSecondary}>
            {" // "}
            Hobbie Projects
          </span>
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <DvdScreensaver />
        </Grid>
      </Grid>
    </section>
  );
};

export default Projects;
