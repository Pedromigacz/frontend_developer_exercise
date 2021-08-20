import React, { createContext, useState, useEffect } from "react";

export const NotesContext = createContext();

const NotesContextProvider = (props) => {
  // setup router
  const [notes, setNotes] = useState(
    localStorage.getItem("noteList")
      ? JSON.parse(localStorage.getItem("noteList"))
      : []
  );

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
    return;
  };

  const removeNote = (i) => {
    const newNotesArray = notes.filter((note, index) => index !== i);
    setNotes(newNotesArray);
  };

  const countNotes = () => notes.length;

  useEffect(() => {
    localStorage.setItem("noteList", JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, addNote, removeNote, countNotes }}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
