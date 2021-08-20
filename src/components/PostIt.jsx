import React from "react";
import styles from "../styles/PostIt.module.css";
import CloseIcon from "../vectors/CloseIcon.jsx";

const PostIt = ({
  title = "Sticky note title here",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  close,
}) => {
  return (
    <li className={styles.postIt}>
      <button className={styles.closeButton} onClick={close}>
        <CloseIcon />
      </button>
      <h4>{title}</h4>
      <p>{description}</p>
    </li>
  );
};

export default PostIt;
