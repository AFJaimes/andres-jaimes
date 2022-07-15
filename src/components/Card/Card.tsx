import css from "./Card.module.scss";
import { FunctionComponent, useState } from "react";
import { CardProps } from "./Card.proptypes";
import Popup from "components/Popup/Popup";

const Card: FunctionComponent<CardProps> = ({ ...card }) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const handleClick = () => {
    setPopupOpen(true);
  };

  return (
    <>
      <div className={css.container}>
        <div className={css.innerContainer} onClick={handleClick}>
          <img
            src={card.image}
            className={css.image}
            alt="dvd screensaver minigame"
          />
          <span className={css.text}>{card.text}</span>
        </div>
      </div>
      {popupOpen && (
        <Popup open={popupOpen} handleClose={() => setPopupOpen(false)}>
          {card.component}
        </Popup>
      )}
    </>
  );
};

export default Card;
