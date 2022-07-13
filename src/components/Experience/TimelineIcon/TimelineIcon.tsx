import css from "./TimelineIcon.module.scss";
import { FunctionComponent } from "react";
import { TimelineIconProps } from "./TimelineIcon.proptypes";

const Header: FunctionComponent<TimelineIconProps> = ({ ...job }) => {
  return (
    <>
      <span className={css.circle}>
        <svg
          className={css.icon}
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d={job.icon} />
        </svg>
      </span>
      <span className={css.line} />
    </>
  );
};

export default Header;
