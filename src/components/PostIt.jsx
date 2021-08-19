import React from "react";
import styles from "../styles/PostIt.module.css";
import CloseIcon from "../vectors/CloseIcon.jsx";

const PostIt = () => {
  return (
    <li className={styles.postIt}>
      <button className={styles.closeButton}>
        <CloseIcon />
      </button>
      <h4>Sticky note title here</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
    </li>
  );
};

export default PostIt;
