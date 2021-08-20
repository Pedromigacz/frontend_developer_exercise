import React, { useContext } from "react";
import { NotesContext } from "../contexts/NotesContext.jsx";
import styles from "../styles/Main.module.css";
import { PostIt } from "./";

const Main = () => {
  const { countNotes, notes, removeNote } = useContext(NotesContext);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{`Notes (${countNotes()})`}</h1>
      <ul className={styles.postItContainer}>
        {notes.length &&
          notes.map((note, i) => (
            <PostIt
              title={note.title}
              description={note.description}
              close={() => {
                removeNote(i);
              }}
              key={i}
            />
          ))}
      </ul>
    </main>
  );
};

export default Main;
