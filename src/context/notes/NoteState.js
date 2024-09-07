import { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {
  const NotesInitial = [
    {
      "_id": "66d43f6beeb5d28658e29cb5",
      "user": "66d2f93a5b5e02dc07d5d688",
      "title": "My title",
      "description": "Hello welcome to express js",
      "tag": "official",
      "date": "2024-09-01T10:18:19.984Z",
      "__v": 0
    },
    {
        "_id": "66d43f6beeb5d28658e29cb5",
        "user": "66d2f93a5b5e02dc07d5d688",
        "title": "My title",
        "description": "Hello welcome to express js",
        "tag": "official",
        "date": "2024-09-01T10:18:19.984Z",
        "__v": 0
      },
      {
        "_id": "66d43f6beeb5d28658e29cb5",
        "user": "66d2f93a5b5e02dc07d5d688",
        "title": "My title",
        "description": "Hello welcome to express js",
        "tag": "official",
        "date": "2024-09-01T10:18:19.984Z",
        "__v": 0
      },
      {
        "_id": "66d43f6beeb5d28658e29cb5",
        "user": "66d2f93a5b5e02dc07d5d688",
        "title": "My title",
        "description": "Hello welcome to express js",
        "tag": "official",
        "date": "2024-09-01T10:18:19.984Z",
        "__v": 0
      },
      {
        "_id": "66d43f6beeb5d28658e29cb5",
        "user": "66d2f93a5b5e02dc07d5d688",
        "title": "My title",
        "description": "Hello welcome to express js",
        "tag": "official",
        "date": "2024-09-01T10:18:19.984Z",
        "__v": 0
      },
      {
        "_id": "66d43f6beeb5d28658e29cb5",
        "user": "66d2f93a5b5e02dc07d5d688",
        "title": "My title",
        "description": "Hello welcome to express js",
        "tag": "official",
        "date": "2024-09-01T10:18:19.984Z",
        "__v": 0
      },
    {
      "_id": "66d43f6ceeb5d28658e29cb7",
      "user": "66d2f93a5b5e02dc07d5d688",
      "title": "My title",
      "description": "Hello welcome to express js",
      "tag": "official",
      "date": "2024-09-01T10:18:20.607Z",
      "__v": 0
    }
  ];
const [notes,setNotes]=useState(NotesInitial)
  return (
    <NoteContext.Provider value={{notes,setNotes}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
