import React, { useContext, useState, useEffect, useRef } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const context = useContext(noteContext);
  let navigator = useNavigate();
  const { notes, getNotes, editNote } = context;
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "default",
  });

  useEffect(() => {
    console.log(localStorage.getItem('token'))
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigator("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const ref = useRef(null);
  const refClose = useRef(null);
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
  };

  const onChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  return (
    <>
      <AddNote />

      <button
        type="button"
        ref={ref}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <h1>Update Note</h1>
                <div className="container mt-5">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <div className="card shadow-lg">
                        <div className="card-header text-center">
                          <h2>Add Your Notes</h2>
                        </div>
                        <div className="card-body">
                          <form>
                            <div className="mb-3">
                              <label htmlFor="etitle" className="form-label">
                                Title
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="etitle"
                                name="etitle" // Add the name attribute
                                value={note.etitle} // Bind the input value to the state
                                placeholder="Enter your title"
                                onChange={onChange}
                                minLength={5}
                                required
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="edescription"
                                className="form-label"
                              >
                                Description
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="edescription"
                                name="edescription" // Add the name attribute
                                value={note.edescription} // Bind the input value to the state
                                placeholder="Enter your Description"
                                onChange={onChange}
                                minLength={5}
                                required
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="etag" className="form-label">
                                Tag
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="etag"
                                name="etag" // Add the name attribute
                                value={note.etag} // Bind the input value to the state
                                placeholder="Enter your Tag"
                                onChange={onChange}
                                minLength={5}
                                required
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                ref={refClose}
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleOnClick}
                className="btn btn-primary"
                disabled={
                  note.etitle.length < 5 ||
                  note.edescription.length < 5 ||
                  note.etag.length < 5
                }
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mx-3">
        <h2> View your Notes </h2>
        <div className="container">
          {notes.length === 0 && `No notes to display`}
        </div>
        {notes.map((note) => {
          return (
            <NoteItem
              key={note._id}
              note={note}
              updateNote={updateNote}
              className="my-3"
            />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
