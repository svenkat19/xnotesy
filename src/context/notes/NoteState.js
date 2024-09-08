import { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {
  const NotesInitial = [
    {
      _id: "66d43f6beeb5d28658e29cb5",
      user: "66d2f93a5b5e02dc07d5d688",
      title: "My title",
      description: "Hello welcome to express js",
      tag: "official",
      date: "2024-09-01T10:18:19.984Z",
      __v: 0,
    },
    {
      _id: "66d43f6ceeb5d28658e29cb7",
      user: "66d2f93a5b5e02dc07d5d688",
      title: "My title",
      description: "Hello welcome to express js",
      tag: "official",
      date: "2024-09-01T10:18:20.607Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(NotesInitial);
  const addNote = (title, description, tag) => {
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Tag:", tag);

    let note = {
      _id: "66d43f6cereb5d28658e29cb7",
      user: "66d2f93a5b5e02dc07d5d688",
      title: title,
      description: description,
      tag: tag,
      date: new Date().toISOString(), // Use a string format for consistency
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  const deleteNote = (id) => {
    let newNote = notes.filter((note) => {return note._id !== id;});
    setNotes(newNote)
  };
  const editNote = (id,title,description,tag) => {
    
  };
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
