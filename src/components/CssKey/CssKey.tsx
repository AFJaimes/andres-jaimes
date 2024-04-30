import css from "./CssKey.module.scss";
import { FunctionComponent, useEffect, useState } from "react";
import { CssKeyProps } from "./CssKey.prototypes";

const CssKey: FunctionComponent<CssKeyProps> = ({ keyString }) => {
  const [color, setColor] = useState<number>(0);
  const randomColor = () => {
    setColor(Math.floor(Math.random() * 359));
  };
  useEffect(() => {
    randomColor();
  }, []);

  const [scale, setScale] = useState(1);

  useEffect(() => {
    function updateScale() {
      const screenWidth = window.innerWidth;
      const elementWidth = 840; 
      if (screenWidth < elementWidth) {
        setScale(screenWidth / elementWidth);
      } else {
        setScale(1);
      }
    }

    updateScale();
    window.addEventListener("resize", updateScale);

    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const style = {
    transform: `scale(${scale})`,
    transformOrigin: "center center",
  };

  return (
    <div style={style}>
      <div
        className={css.mainContainer}
        style={{ filter: `hue-rotate(${color}deg)` }}
      >
        <div className={css.secondaryContainer}>
          <div className={css.keyboardContainer}>
            <button
              className={css.button}
              onClick={() => randomColor()}
            ></button>
          </div>
          <div className={css.keyboardBottom} />

          {keyString.length > 0 &&
            keyString.split("").map((keyCap) => (
              <div className={css.keyContainer}>
                <div className={css.keyLeft} />
                <div className={css.keyCap}>
                  <p>{keyCap}</p>
                </div>
                <div className={css.keyRight} />
                <div className={css.keyBottom} />
                <div className={css.keyTop} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CssKey;
