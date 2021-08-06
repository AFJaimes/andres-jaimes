import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import { FunctionComponent } from "react";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3),
      textAlign: "center",
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.background.paper,
    },
    chip: {
      margin: theme.spacing(0.5),
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.grey[900],
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
      <Typography title="skills" component="h2" variant="h5">
        let Skills = {`{`}
      </Typography>

      <Typography title="languajes" className={classes.subtitle} component="h3" variant="h6">
        Languajes:
      </Typography>
      <Typography className={classes.subtitle} component="span" variant="h6">
        [
      </Typography>
      <Chip className={classes.chip} label="HTML" />,
      <Chip className={classes.chip} label="CSS" />,
      <Chip className={classes.chip} label="JavaScript" />,
      <Chip className={classes.chip} label="TypeScript" />,
      <Chip className={classes.chip} label="C#" />,
      <Chip className={classes.chip} label="Visual Basic" />,
      <Chip className={classes.chip} label="Nextjs" />,
      <Chip className={classes.chip} label="React" />,
      <Chip className={classes.chip} label="SQL" />,
      <Typography className={classes.subtitle} component="span" variant="h6">
        ],
      </Typography>

      <Typography title="frameworks" className={classes.subtitle} component="h3" variant="h6">
        Frameworks:
      </Typography>
      <Typography className={classes.subtitle} component="span" variant="h6">
        [
      </Typography>
      <Chip className={classes.chip} label="Material-UI" />,
      <Chip className={classes.chip} label="jQuery" />,
      <Chip className={classes.chip} label="Boostrap" />,
      <Chip className={classes.chip} label="Material Design" />,
      <Chip className={classes.chip} label="ASP.NET" />,
      <Typography className={classes.subtitle} component="span" variant="h6">
        ],
      </Typography>

      <Typography title="tools" className={classes.subtitle} component="h3" variant="h6">
        Tools:
      </Typography>
      <Typography className={classes.subtitle} component="span" variant="h6">
        [
      </Typography>
      <Chip className={classes.chip} label="Adobe Photoshop" />,
      <Chip className={classes.chip} label="Adobe After Effects" />,
      <Chip className={classes.chip} label="Adobe Illustrator" />,
      <Chip className={classes.chip} label="Google Analytics" />,
      <Chip className={classes.chip} label="Google DataSudio" />,
      <Chip className={classes.chip} label="ScreamingFrog" />,
      <Chip className={classes.chip} label="Microsoft Azure" />,
      <Chip className={classes.chip} label="SQL Server" />,
      <Typography className={classes.subtitle} component="span" variant="h6">
        ],
      </Typography>

      <Typography title="other skills" className={classes.subtitle} component="h3" variant="h6">
        Others:
      </Typography>
      <Typography className={classes.subtitle} component="span" variant="h6">
        [
      </Typography>
      <Chip className={classes.chip} label="SEO analysis" />,
      <Chip className={classes.chip} label="Testing" />,
      <Chip className={classes.chip} label="Requirements gathering" />,
      <Chip className={classes.chip} label="Responsive web design" />,
      <Chip className={classes.chip} label="Continous Integration" />,
      <Chip className={classes.chip} label="Scrum Master" />,
      <Typography className={classes.subtitle} component="span" variant="h6">
        ],
      </Typography>
      <Typography className={classes.subtitle} component="span" variant="h5">
        {`}`}
      </Typography>
    </section>
  );
};

export default Skills;
