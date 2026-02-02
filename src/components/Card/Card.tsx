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
      <article className={css.container}>
        <div 
          className={`${css.innerContainer} ${card.noPopup ? css.noPopup : ''}`}
          onClick={handleClick}
          role={card.noPopup ? "presentation" : "button"}
          tabIndex={card.noPopup ? -1 : 0}
          onKeyDown={(e) => {
            if (!card.noPopup && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault();
              handleClick();
            }
          }}
          aria-label={card.noPopup ? undefined : `Open ${card.title} project details`}
        >
          {card.image && (
            <img
              src={card.image}
              className={css.image}
              alt={`${card.title} - ${card.text}`}
              loading="lazy"
            />
          )}
          {!card.image && (
            <div className={css.noImageContainer} aria-hidden="true">
              {card.component}
            </div>
          )}
          <span className={css.text}>{card.text}</span>
        </div>
      </article>
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
