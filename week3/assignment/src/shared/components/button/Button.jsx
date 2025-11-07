import React from "react";
import * as styles from "./Button.css";
import { BUTTON_TYPES } from "../../constants/buttonTypes";

const Button = ({ type = BUTTON_TYPES.GAME, onClick, children, ...props }) => {
  return (
    <button
      type="button"
      className={styles.button({ type })}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
