import { FunctionComponent } from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import css from "./Social.module.scss";

const Social: FunctionComponent = () => {
  return (
    <section className={css.root}>
      <LinkedInIcon />
      <InstagramIcon />
    </section>
  );
};

export default Social;
