import React from "react";
import styles from "../styles/Main.module.css";
import { PostIt } from "./";

const Main = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{"Notes (1)"}</h1>
      <ul className={styles.postItContainer}>
        <PostIt />
        <PostIt />
      </ul>
    </main>
  );
};

export default Main;
