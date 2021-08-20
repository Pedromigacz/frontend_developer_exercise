import React from "react";
import styles from "../styles/AddNoteForm.module.css";
import { Input, Button } from "./";

const AddNoteForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <aside className={styles.addNoteForm}>
      <form onSubmit={handleSubmit}>
        <h2>Add a note</h2>
        <Input label="Title:" placeholder="Enter a note title..." />
        <Input
          label="Description:"
          placeholder="Enter a description..."
          textArea="true"
        />
        <Button>Add note</Button>
      </form>
    </aside>
  );
};

export default AddNoteForm;
