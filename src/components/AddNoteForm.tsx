import React, { useState, useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";
import { MobileContext } from "../contexts/MobileContext";
import styles from "../styles/AddNoteForm.module.css";
import { Input, Button } from "./";
import CloseIcon from "../vectors/CloseIcon.jsx";
import { motion, AnimatePresence } from "framer-motion";

type note = {
  title: string;
  description: string;
};

const AddNoteForm: React.FC = () => {
  // form state
  const [newNote, setNewNote] = useState<note>({
    title: "",
    description: "",
  });

  const { addNote } = useContext(NotesContext);
  // mobile context
  const { mobile, displayAside, closeAside } = useContext(MobileContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addNote(newNote);
    setNewNote({
      title: "",
      description: "",
    });
    closeAside();
  };

  return (
    <AnimatePresence>
      {!mobile || displayAside ? (
        <motion.aside
          className={styles.addNoteForm}
          initial={{ x: 600, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 600, opacity: 0 }}
          transition={{ duration: 0.4, type: "tween" }}
        >
          <button className={styles.closeButton} onClick={closeAside}>
            <CloseIcon />
          </button>
          <form onSubmit={handleSubmit}>
            <h2>Add a note</h2>
            <Input
              label="Title:"
              placeholder="Enter a note title..."
              value={newNote.title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setNewNote({ ...newNote, title: e.target.value });
              }}
            />
            <Input
              label="Description:"
              placeholder="Enter a description..."
              textArea="true"
              value={newNote.description}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setNewNote({ ...newNote, description: e.target.value });
              }}
            />
            <Button>Add note</Button>
          </form>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
};

export default AddNoteForm;
