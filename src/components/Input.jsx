import React from "react";
import styles from "../styles/Input.module.css";

const Input = ({
  label = "label",
  placeholder = "placeholder",
  textArea = false,
}) => {
  return (
    <label className={styles.inputContainer}>
      <span className={styles.label}>{label}</span>
      {textArea ? (
        <textarea placeholder={placeholder} rows="7" />
      ) : (
        <input type="text" placeholder={placeholder} />
      )}
    </label>
  );
};

export default Input;
