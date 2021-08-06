import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import { FunctionComponent } from "react";
import Social from "./Social";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      textAlign: "center",
      backgroundColor: theme.palette.grey[900],
      color: theme.palette.grey[500],
    },
    photo: {
      width: 200,
      height: 200,
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: 10,
    },
    propsText: {
      color: theme.palette.secondary.main,
    },
    titleText:{
      color:theme.palette.secondary.light
    },
  })
);

const Header: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <img
        src="andres-jaimes/myLogo.png"
        alt="andres jaimes"
        title="andres jaimes"
        className={classes.photo}
      />
      <Typography component="h1" color="initial" variant="h3">
        {`<`}
        <span className={classes.titleText}>Andrés Felipe Jaimes Sánchez</span>
        {` />`}
      </Typography>
      <Typography component="p" variant="h6">
        (<span className={classes.propsText}>Software Engineer</span> &&{" "}
        <span className={classes.propsText}>Cat Lover</span>)
      </Typography>
      <Social />
    </section>
  );
};

export default Header;
