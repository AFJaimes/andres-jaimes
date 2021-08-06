import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import { FunctionComponent } from "react";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      textAlign: "center",
    },
    chip: {
      margin: theme.spacing(0.5),
    },
    subtitle: {
      paddingTop: theme.spacing(1),
    },
  })
);

const Skills: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Typography component="h2" variant="h4">
        Skills
      </Typography>

      <Typography className={classes.subtitle} component="h3" variant="h5">
        Languajes
      </Typography>
      <Chip className={classes.chip} label="HTML" />
      <Chip className={classes.chip} label="CSS" />
      <Chip className={classes.chip} label="JavaScript" />
      <Chip className={classes.chip} label="TypeScript" />
      <Chip className={classes.chip} label="C#" />
      <Chip className={classes.chip} label="Visual Basic" />
      <Chip className={classes.chip} label="Nextjs" />
      <Chip className={classes.chip} label="React" />
      <Chip className={classes.chip} label="SQL" />

      <Typography className={classes.subtitle} component="h3" variant="h5">
        Frameworks
      </Typography>
      <Chip className={classes.chip} label="Material-UI" />
      <Chip className={classes.chip} label="jQuery" />
      <Chip className={classes.chip} label="Boostrap" />
      <Chip className={classes.chip} label="Material Design" />
      <Chip className={classes.chip} label="ASP.NET" />

      <Typography className={classes.subtitle} component="h3" variant="h5">
        Tools
      </Typography>
      <Chip className={classes.chip} label="Adobe Photoshop" />
      <Chip className={classes.chip} label="Adobe After Effects" />
      <Chip className={classes.chip} label="Adobe Illustrator" />
      <Chip className={classes.chip} label="Google Analytics" />
      <Chip className={classes.chip} label="Google DataSudio" />
      <Chip className={classes.chip} label="ScreamingFrog" />
      <Chip className={classes.chip} label="Microsoft Azure" />
      <Chip className={classes.chip} label="SQL Server" />

      <Typography className={classes.subtitle} component="h3" variant="h5">
        Others
      </Typography>
      <Chip className={classes.chip} label="SEO analysis" />
      <Chip className={classes.chip} label="Testing" />
      <Chip className={classes.chip} label="Requirements gathering" />
      <Chip className={classes.chip} label="Responsive web design" />
      <Chip className={classes.chip} label="Continous Integration" />
      <Chip className={classes.chip} label="Scrum Master" />
    </section>
  );
};

export default Skills;
