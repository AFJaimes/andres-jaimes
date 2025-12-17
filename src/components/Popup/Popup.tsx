import css from "./Popup.module.scss";
import { FunctionComponent, useEffect } from "react";
import { PopupProps } from "./Popup.proptypes";

const Popup: FunctionComponent<PopupProps> = ({
  handleClose,
  open,
  title,
  children,
}) => {
  // Cerrar con tecla ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    if (open) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden"; // Prevenir scroll del body
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [open, handleClose]);

  if (!open) return null;

  return (
    <div className={css.backdrop} onClick={handleClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <header className={css.header}>
          <h2 className={css.title}>{title}</h2>
          <button
            onClick={handleClose}
            className={css.closeBtn}
            aria-label="Cerrar modal"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </header>
        <div className={css.content}>{children}</div>
      </div>
    </div>
  );
};

export default Popup;
