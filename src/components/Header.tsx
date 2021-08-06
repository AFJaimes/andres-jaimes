import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import { FunctionComponent } from "react";
import Social from './Social';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      textAlign: "center",
      backgroundColor: "green",
    },
    photo: {
      width: 200,
      height: 200,
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: 10,
    },
  })
);

const Header: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <img
        src="/profile.png"
        alt="andres jaimes"
        title="andres jaimes"
        className={classes.photo}
      />
      <Typography component="h1" variant="h3">
        Andrés Felipe Jaimes Sánchez
      </Typography>
      <Typography component="p" variant="h6">
        Software Engineer, Cat Lover
      </Typography>
      <Social />
    </section>
  );
};

export default Header;
