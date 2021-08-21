import React, { createContext, useState, useEffect } from "react";

type NoteObjectType = {
  title: string;
  description: string;
};

interface createContextInterface {
  notes: NoteObjectType[] | null;
  addNote: (arg0: NoteObjectType) => void;
  removeNote: (arg0: number) => void;
  countNotes: () => void;
}

export const NotesContext = createContext({} as createContextInterface);

const NotesContextProvider: React.FC = ({ children }) => {
  // setup router
  const [notes, setNotes] = useState(
    localStorage.getItem("noteList")
      ? JSON.parse(localStorage.getItem("noteList") || "[]")
      : []
  );

  const addNote = (newNote: NoteObjectType): void => {
    setNotes([...notes, newNote]);
  };

  const removeNote = (i: number): void => {
    const newNotesArray = notes.filter(
      (note: NoteObjectType, index: number) => index !== i
    );
    setNotes(newNotesArray);
  };

  const countNotes = (): number => notes.length;

  useEffect(() => {
    localStorage.setItem("noteList", JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, addNote, removeNote, countNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
