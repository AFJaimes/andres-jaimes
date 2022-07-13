import css from "./Header.module.scss";
import { FunctionComponent } from "react";
import { HeaderProps } from "./Header.proptypes";

const Header: FunctionComponent<HeaderProps> = ({ ...job }) => {
  return (
    <div className={css.container}>
      <span className={css.colorYellow}> {job.initialDate}</span>
      <span>{" <=> "}</span>
      <span className={css.colorYellow}>{job.finalDate}</span>
      <br />
      <span className={css.job}>{job.job}</span>
    </div>
  );
};

export default Header;
