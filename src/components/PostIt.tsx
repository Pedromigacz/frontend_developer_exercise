import React from "react";
import styles from "../styles/PostIt.module.css";
import CloseIcon from "../vectors/CloseIcon.jsx";

type PostItProps = {
  title: string;
  description: string;
  close: () => void;
};

const PostIt = ({ title, description, close }: PostItProps) => {
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
