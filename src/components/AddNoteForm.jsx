import React, { useState, useContext, useEffect } from "react";
import { NotesContext } from "../contexts/NotesContext.jsx";
import styles from "../styles/AddNoteForm.module.css";
import { Input, Button } from "./";
import CloseIcon from "../vectors/CloseIcon.jsx";

const AddNoteForm = () => {
  // mobile display
  const [mobile, setMobile] = useState(false);
  const [display, setDisplay] = useState(true);
  // form state
  const [newNote, setNewNote] = useState({
    title: "",
    description: "",
  });

  const { addNote } = useContext(NotesContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(newNote);
    setNewNote({
      title: "",
      description: "",
    });
  };

  const handleResize = () => {
    if (window.innerWidth < 780) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  // add javascript media query
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return !mobile || display ? (
    <aside className={styles.addNoteForm}>
      <button
        className={styles.closeButton}
        onClick={(e) => {
          setDisplay(false);
        }}
      >
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
