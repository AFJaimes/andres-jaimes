import css from "./Card.module.scss";
import { FunctionComponent, useState } from "react";
import { CardProps } from "./Card.proptypes";
import Popup from "components/Popup/Popup";

const Card: FunctionComponent<CardProps> = ({ ...card }) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const handleClick = () => {
    if (!card.noPopup) {
      setPopupOpen(true);
    }
  };

  return (
    <>
      <div className={css.container}>
        <div 
          className={`${css.innerContainer} ${card.noPopup ? css.noPopup : ''}`}
          onClick={handleClick}
        >
          {card.image && (
            <img
              src={card.image}
              className={css.image}
              alt={card.title}
            />
          )}
          {!card.image && (
            <div className={css.noImageContainer}>
              {card.component}
            </div>
          )}
          <span className={css.text}>{card.text}</span>
        </div>
      </div>
      {!card.noPopup && (
        <Popup
          open={popupOpen}
          handleClose={() => setPopupOpen(false)}
          title={card.title}
        >
          {card.component}
        </Popup>
      )}
    </>
  );
};

export default Card;
