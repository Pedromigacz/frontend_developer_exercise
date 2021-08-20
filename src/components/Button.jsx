import React from "react";
import styles from "../styles/Button.module.css";

const Button = ({ children, onClick }) => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
