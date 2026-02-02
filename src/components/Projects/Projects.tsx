import { Grid } from "@material-ui/core";
import Card from "components/Card/Card";
import { FunctionComponent } from "react";
import { useLanguage } from "contexts/LanguageContext";
import ArraysObjects from "./ArraysObjects/ArraysObjects";
import AnimationPlayground from "./AnimationPlayground/AnimationPlayground";
import DvdScreensaver from "./DvdScreensaver/DvdScreensaver";
import Fincaraiz from "./Fincaraiz/Fincaraiz";
import FlexboxPlayground from "./FlexboxPlayground/FlexboxPlayground";
import Nba from "./Nba/Nba";
import css from "./Projects.module.scss";
import Abbvie from "./Abbvie/Abbvie";
import Xfinity from "./Xfinity/Xfinity";
import Stellantis from "./Stellantis/Stellantis";
import KeyboardShowcase from "./KeyboardShowcase/KeyboardShowcase";

// <DvdScreensaver />
const Projects: FunctionComponent = () => {
  const { t } = useLanguage();

  return (
    <section className={css.root} aria-labelledby="projects-heading">
      <Grid container className={css.gridContainer}>
        <Grid item sm={12} className={css.titleContainer}>
          <h2 id="projects-heading" className={css.title}>
            <span>{t("projects.otherWorks")}</span>
            <span className={css.titleSecondary} aria-label={t("projects.hobbyProjects")}>
              {" // "}
              {t("projects.hobbyProjects")}
            </span>
          </h2>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            image="/fincaraiz.png"
            text={t("projects.fincaraiz.text")}
            title={t("projects.fincaraiz.title")}
            component={<Fincaraiz />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            image="/nba75.png"
            text={t("projects.nba.text")}
            title={t("projects.nba.title")}
            component={<Nba />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            image="/xfinity.png"
            text={t("projects.xfinity.text")}
            title={t("projects.xfinity.title")}
            component={<Xfinity />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            image="/stellantis.png"
            text={t("projects.stellantis.text")}
            title={t("projects.stellantis.title")}
            component={<Stellantis />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            image="/abbvie.jpeg"
            text={t("projects.abbvie.text")}
            title={t("projects.abbvie.title")}
            component={<Abbvie />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            image="/arraysScreenshot.png"
            text={t("projects.arraysObjects.text")}
            title={t("projects.arraysObjects.title")}
            component={<ArraysObjects />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            image="/flexbox.png"
            text={t("projects.flexbox.text")}
            title={t("projects.flexbox.title")}
            component={<FlexboxPlayground />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            image="/animationsShowcase.png"
            text={t("projects.animations.text")}
            title={t("projects.animations.title")}
            component={<AnimationPlayground />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            image="/dvdCard.png"
            text={t("projects.dvd.text")}
            title={t("projects.dvd.title")}
            component={<DvdScreensaver />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            text={t("projects.keyboard.text")}
            title={t("projects.keyboard.title")}
            component={<KeyboardShowcase />}
            noPopup={true}
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default Projects;
