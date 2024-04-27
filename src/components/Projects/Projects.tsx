import { Grid } from "@material-ui/core";
import Card from "components/Card/Card";
import { FunctionComponent } from "react";
import ArraysObjects from "./ArraysObjects/ArraysObjects";
import AnimationPlayground from "./AnimationPlayground/AnimationPlayground";
import DvdScreensaver from "./DvdScreensaver/DvdScreensaver";
import Fincaraiz from "./Fincaraiz/Fincaraiz";
import FlexboxPlayground from "./FlexboxPlayground/FlexboxPlayground";
import Nba from "./Nba/Nba";
import css from "./Projects.module.scss";
import Abbvie from "./Abbvie/Abbvie";
import Xfinity from "./Xfinity/Xfinity";

// <DvdScreensaver />
const Projects: FunctionComponent = () => {
  return (
    <section className={css.root}>
      <Grid container className={css.gridContainer}>
        <Grid item sm={12} className={css.titleContainer}>
          <span className={css.title}>Other Works</span>
          <span className={css.titleSecondary}>
            {" // "}
            Hobbie Projects
          </span>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            image="/fincaraiz.png"
            text="Fincaraiz.com.co -> React"
            component={<Fincaraiz />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            image="/nba75.png"
            text="NBA 75th anniversary pages"
            component={<Nba />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            image="/xfinity.png"
            text="Xfinity showroom games"
            component={<Xfinity />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            image="/stellantis.png"
            text="Stellantis group dynamic web ads"
            component={<Xfinity />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            image="/abbvie.jpeg"
            text="ABBVIE - redesign"
            component={<Abbvie />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            image="/arraysScreenshot.png"
            text="Arrays and objects showcase"
            component={<ArraysObjects />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            image="/flexbox.png"
            text="Flexbox Playground"
            component={<FlexboxPlayground />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            image="/animationsShowcase.png"
            text="Animations Playground Showcase"
            component={<AnimationPlayground />}
          />
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
