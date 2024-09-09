import { useState } from "react";
import NoteContext from "./noteContext";
const host = "http://localhost:5000";
const NoteState = (props) => {
  const NotesInitial = [];
  const [notes, setNotes] = useState(NotesInitial);
  const getNotes = async () => {
    //API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",

      headers: {
        "auth-token":
          localStorage.getItem('token'),
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  const addNote = async (title, description, tag) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/addanewnote`, {
      method: "POST",
      body: JSON.stringify({ title, description, tag }),
      headers: {
        "auth-token":
          localStorage.getItem('token'),
        "Content-Type": "application/json",
      },
    });

    const note = await response.json();
    setNotes(notes.concat(note));
  };

  const deleteNote = async (id) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "auth-token":
          localStorage.getItem('token'),
        "Content-Type": "application/json",
      },
    });
    let newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };
  const editNote = async (id, title, description, tag) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, description, tag }),
      headers: {
        "auth-token":
          localStorage.getItem('token'),
        "Content-Type": "application/json",
      },
    });
    //changes in frontend
    const json = await response.json();
    let newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag; 
        break; 
      }
    }  
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
