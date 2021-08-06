import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import { FunctionComponent } from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3),
      textAlign: "justify",
      backgroundColor: "red",
    },
  })
);

const About: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <article className={classes.root}>
      <Typography title="about me" component="h2" align="center" variant="h4">
        {`const About = (me) => {`}
      </Typography>
      <p>
        I am a Computer systems engineer, young and with great learning
        disposition about new technologies, software design in Web environment
        and application development. Possess the necessary experience for a good
        performance that requires responsibility and efficiency.
      </p>
      <p>
        I like to have acknowledge about tools that efficiently solve everyday
        problems using technological resources, because as each day new
        technologies are emerging is important to know how the use of the
        information technologies in society evolves.
      </p>
      <p>
        Prefer the consumption of technological resources as long as they allow
        the realization of complex procedures and provides me access to media
        entertainment in a quick way, because, I have been taught and learned
        through my experiences, that you cannot develop technologies without
        using them first.
      </p>
    </article>
  );
};

export default About;
