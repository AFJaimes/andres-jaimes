import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { FunctionComponent } from "react";

type PointerProps = {
  text: string;
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      animation: "$pointer 1s infinite steps(1)",
    },
    "@keyframes pointer": {
      "0%": {
        backgroundColor: "transparent",
      },
      "50%": {
        backgroundColor: "white",
      },
    },
  })
);

const Pointer: FunctionComponent<PointerProps> = ({ text }) => {
  const classes = useStyles();

  return <span className={classes.root}>{text}</span>;
};

export default Pointer;
