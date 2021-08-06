import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { FunctionComponent } from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      textAlign: "center",
    },
  })
);

const Social: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <LinkedInIcon />
      <InstagramIcon />
    </section>
  );
};

export default Social;
