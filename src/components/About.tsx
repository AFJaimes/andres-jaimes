import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import { FunctionComponent } from "react";

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
  })
);

const About: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Typography title="about me" component="h2" variant="h5">
        <Typography color="secondary" component="span" variant="h5">
          function About
        </Typography>
        {` = (`}
        <Typography color="secondary" component="span" variant="h5">
          me
        </Typography>
        {`) `}
        <Typography color="secondary" component="span" variant="h5">
          {`=>`}
        </Typography>
        {` {`}
      </Typography>
      <Typography className={classes.content} color="error" component="span">
        <b>return</b>
      </Typography>
      <Typography className={classes.content} component="span">
        <b>(`</b>
      </Typography>
      <article>
        <Typography
          className={classes.subContent}
          color="primary"
          component="p"
        >
          I am a Computer systems engineer, with great interest about new
          technologies, have experience in software design, Web environments and
          application development with the necessary experience for a good
          performance that requires responsibility and efficiency.
          <br />
          <br />
          I like to have acknowledge about tools that efficiently solve everyday
          problems using technological resources, because as each day new
          technologies are emerging is important to know how the use of the
          information technologies in society evolves.
          <br />
          <br />
          Prefer the consumption of technological resources as long as they
          allow the realization of complex procedures and provides me access to
          media entertainment in a quick way, because, I have been taught and
          learned through my experiences, that you cannot develop technologies
          without using them first.
        </Typography>
      </article>
      <Typography className={classes.content} component="p">
        <b>`);</b>
      </Typography>
      <Typography component="span" align="center" variant="h5">
        {`}`}
      </Typography>
    </section>
  );
};

export default About;
