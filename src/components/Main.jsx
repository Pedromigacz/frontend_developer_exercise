import React, { useContext } from "react";
import { NotesContext } from "../contexts/NotesContext.jsx";
import { MobileContext } from "../contexts/MobileContext.jsx";
import styles from "../styles/Main.module.css";
import { PostIt, Button } from "./";

const Main = () => {
  const { countNotes, notes, removeNote } = useContext(NotesContext);
  // mobile context
  const { openAside } = useContext(MobileContext);

  return (
    <main className={styles.main}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{`Notes (${countNotes()})`}</h1>
        <span className={styles.mobileButtonContainer}>
          <Button onClick={openAside}>Add note</Button>
        </span>
      </div>
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
