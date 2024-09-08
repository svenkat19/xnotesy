import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes } = context;
  return (
    <>
      <AddNote />
      <div className="row mx-3">
        <h2> View your Notes </h2>
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note} className="my-3" />;
        })}
      </div>
    </>
  );
};

export default Notes;
