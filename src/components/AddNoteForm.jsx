import React, { useState, useContext } from "react";
import { NotesContext } from "../contexts/NotesContext.jsx";
import { MobileContext } from "../contexts/MobileContext.jsx";
import styles from "../styles/AddNoteForm.module.css";
import { Input, Button } from "./";
import CloseIcon from "../vectors/CloseIcon.jsx";

const AddNoteForm = () => {
  // form state
  const [newNote, setNewNote] = useState({
    title: "",
    description: "",
  });

  const { addNote } = useContext(NotesContext);
  // mobile context
  const { mobile, displayAside, closeAside } = useContext(MobileContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(newNote);
    setNewNote({
      title: "",
      description: "",
    });
    closeAside();
  };

  return !mobile || displayAside ? (
    <aside className={styles.addNoteForm}>
      <button className={styles.closeButton} onClick={closeAside}>
        <CloseIcon />
      </button>
      <form onSubmit={handleSubmit}>
        <h2>Add a note</h2>
        <Input
          label="Title:"
          placeholder="Enter a note title..."
          value={newNote.title}
          onChange={(e) => {
            setNewNote({ ...newNote, title: e.target.value });
          }}
        />
        <Input
          label="Description:"
          placeholder="Enter a description..."
          textArea="true"
          value={newNote.description}
          onChange={(e) => {
            setNewNote({ ...newNote, description: e.target.value });
          }}
        />
        <Button>Add note</Button>
      </form>
    </aside>
  ) : null;
};

export default AddNoteForm;
