import React from "react";
import styles from "../styles/Input.module.css";

const Input = ({
  label = "label",
  placeholder = "placeholder",
  textArea = false,
  value,
  onChange,
}) => {
  return (
    <label className={styles.inputContainer}>
      <span className={styles.label}>{label}</span>
      {textArea ? (
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows="7"
        />
      ) : (
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder={placeholder}
        />
      )}
    </label>
  );
};

export default Input;
