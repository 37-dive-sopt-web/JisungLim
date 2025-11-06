import React from "react";
import * as styles from "./Button.css";

const Button = ({ type = "game", onClick, children, ...props }) => {
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
