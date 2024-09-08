import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
const NoteItem = (props) => {
  const { note, updateNote } = props;
  const context = useContext(noteContext);
  const { deleteNote } = context;
  return (
    <div
      className="note-item card mb-3"
      style={{
        width: "18rem",
        backgroundColor: "#fffacd",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <div className="card-body">
        <h5 className="card-title" style={{ color: "black" }}>
          {note.title}
        </h5>
        <p className="card-text" style={{ color: "black" }}>
          {note.description}
        </p>
      </div>
      <div
        className="card-footer text-muted"
        style={{
          backgroundColor: "transparent",
          borderTop: "none",
          color: "black",
        }}
      >
        {note.date}
      </div>
      <div className="card-body">
        <i
          className="fa-solid fa-square-minus mx-2"
          onClick={() => {
            deleteNote(note._id);
          }}
        ></i>
        <i className="fa-solid fa-pen-fancy mx-2" onClick={()=>{updateNote(note)}}></i>
      </div>
    </div>
  );
};

export default NoteItem;
