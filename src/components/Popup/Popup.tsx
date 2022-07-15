import css from "./Popup.module.scss";
import { FunctionComponent } from "react";
import { PopupProps } from "./Popup.proptypes";

const Popup: FunctionComponent<PopupProps> = ({ handleClose, ...popup }) => {
  console.log(popup.open);
  return (
    <div
      onClick={handleClose}
      className={`${css.container} ${popup.open ? css.open : css.close}`}
    >
      <div className={css.innerContainer}>{popup.children}</div>
    </div>
  );
};

export default Popup;
