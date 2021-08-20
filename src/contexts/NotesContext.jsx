import React, { createContext, useContext, useState } from "react";

export const NotesContext = createContext();

const NotesContextProvider = (props) => {
  // setup router
  const [notes, setNotes] = useState([
    {
      title: "Sticky note title here1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      title: "Sticky note title here2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
  ]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
    return;
  };

  const removeNote = (i) => {
    const newNotesArray = notes.filter((note, index) => index !== i);
    setNotes(newNotesArray);
  };

  const countNotes = () => notes.length;

  return (
    <NotesContext.Provider value={{ notes, addNote, removeNote, countNotes }}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
