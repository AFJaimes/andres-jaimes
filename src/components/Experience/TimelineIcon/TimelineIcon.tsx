import css from "./TimelineIcon.module.scss";
import { FunctionComponent } from "react";
import { TimelineIconProps } from "./TimelineIcon.proptypes";
import useWindowSize from "hooks/useWindowSize";

const Header: FunctionComponent<TimelineIconProps> = ({ ...job }) => {
  const { width, height } = useWindowSize();
  console.log(width, height);

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
      {!job.last && <span className={css.line} />}
    </>
  );
};

export default Header;
