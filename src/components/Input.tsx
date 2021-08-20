import React from "react";
import styles from "../styles/Input.module.css";
import { motion } from "framer-motion";

type InputProps = {
  label: string;
  placeholder: string;
  textArea?: boolean;
  value: string;
  onChange: () => void;
};

const Input = ({
  label,
  placeholder,
  textArea = false,
  value,
  onChange,
}: InputProps) => (
  <label className={styles.inputContainer}>
    <motion.span
      className={styles.label}
      initial={{ opacity: 0 }}
      animate={{
        opacity: value ? 1 : 0,
      }}
    >
      {label}
    </motion.span>
    {textArea ? (
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={7}
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

export default Input;
