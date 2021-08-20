import React, { useState } from "react";
import styles from "../styles/AddNoteForm.module.css";
import { Input, Button } from "./";

const AddNoteForm = () => {
  const [newNote, setNewNote] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <aside className={styles.addNoteForm}>
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
  );
};

export default AddNoteForm;
