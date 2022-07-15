import { Grid } from "@material-ui/core";
import Card from "components/Card/Card";
import { FunctionComponent } from "react";
import DvdScreensaver from "./DvdScreensaver/DvdScreensaver";
import css from "./Projects.module.scss";

// <DvdScreensaver />
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
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            image="/dvdCard.png"
            text="DVD screensaver"
            component={<DvdScreensaver />}
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default Projects;
