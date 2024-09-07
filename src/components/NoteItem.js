import React from 'react'

const NoteItem = (props) => {
    const { note } = props;
    return (
        <div className="note-item card mb-3" style={{ width: '18rem', backgroundColor: '#fffacd', padding: '10px', borderRadius: '10px' }}>
            <div className="card-body">
                <h5 className="card-title" style={{ color: 'black' }}>{note.title}</h5>
                <p className="card-text" style={{ color: 'black' }}>{note.description}</p>
            </div>
            <div className="card-footer text-muted" style={{ backgroundColor: 'transparent', borderTop: 'none', color: 'black' }}>
                {note.date}
            </div>
            <div className="card-body">
                <button className="btn btn-primary">Butttext</button>
            </div>
        </div>
    )
}

export default NoteItem
