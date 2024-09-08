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
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkMmY5M2E1YjVlMDJkYzA3ZDVkNjg4In0sImlhdCI6MTcyNTEwMzI3M30.O_H0CvJiff0l7KDNXK6SQuPHS1adbvoF-zJrUmTPmqQ",
        "Content-Type": "application/json",
      },
    });
    const json=await response.json();
    setNotes(json)
  };

  const addNote = async (title, description, tag) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/addanewnote`, {
      method: "POST",
      body: JSON.stringify({ title, description, tag }),
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkMmY5M2E1YjVlMDJkYzA3ZDVkNjg4In0sImlhdCI6MTcyNTEwMzI3M30.O_H0CvJiff0l7KDNXK6SQuPHS1adbvoF-zJrUmTPmqQ",
        "Content-Type": "application/json",
      },
    });

    const note = await response.json();
    setNotes(notes.concat(note))

  };

  const deleteNote =async (id) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkMmY5M2E1YjVlMDJkYzA3ZDVkNjg4In0sImlhdCI6MTcyNTEwMzI3M30.O_H0CvJiff0l7KDNXK6SQuPHS1adbvoF-zJrUmTPmqQ",
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
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkMmY5M2E1YjVlMDJkYzA3ZDVkNjg4In0sImlhdCI6MTcyNTEwMzI3M30.O_H0CvJiff0l7KDNXK6SQuPHS1adbvoF-zJrUmTPmqQ",
        "Content-Type": "application/json",
      },
    });
    //changes in frontend
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        notes[index].title = title;
        notes[index].description = description;
        notes[index].tag = tag;
      }
      break;
    }
    setNotes(notes);
  };
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
