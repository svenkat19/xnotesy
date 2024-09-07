import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    
    <div className="row mx-3">
      <h2> View your Notes </h2>
      {notes.map((note) => {
        return <NoteItem note={note} className="my-3"/>
      })}
    </div>
  );
};

export default Notes;
