import React, { useState, useEffect } from 'react';
import './NoteApp.css'; // Import your CSS file for this component

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteBody, setNewNoteBody] = useState('');
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);

  useEffect(() => {
    // Load notes from local storage when the component mounts
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    // Update local storage whenever notes change
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (newNoteTitle.trim() !== '' && newNoteBody.trim() !== '') {
      setNotes([...notes, { title: newNoteTitle, body: newNoteBody }]);
      setNewNoteTitle('');
      setNewNoteBody('');
    }
  };

  const editNote = (index) => {
    setSelectedNoteIndex(index);
    setNewNoteTitle(notes[index].title);
    setNewNoteBody(notes[index].body);
  };

  const updateNote = () => {
    if (selectedNoteIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[selectedNoteIndex] = { title: newNoteTitle, body: newNoteBody };
      setNotes(updatedNotes);
      setSelectedNoteIndex(null);
      setNewNoteTitle('');
      setNewNoteBody('');
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
    setSelectedNoteIndex(null);
    setNewNoteTitle('');
    setNewNoteBody('');
  };

  return (
    <div className="note-app">
      <h1 className="note-app-title">Notebook</h1>
      <div className="note-form">
        <input
          type="text"
          placeholder="Title"
          className="note-input"
          value={newNoteTitle}
          onChange={(e) => setNewNoteTitle(e.target.value)}
        />
        <textarea
          placeholder="Body"
          className="note-input"
          value={newNoteBody}
          onChange={(e) => setNewNoteBody(e.target.value)}
        />
        {selectedNoteIndex !== null ? (
          <div className="note-buttons">
            <button onClick={updateNote} className="note-button">
              Update Note
            </button>
            <button onClick={() => setSelectedNoteIndex(null)} className="note-button">
              Cancel
            </button>
          </div>
        ) : (
          <button onClick={addNote} className="note-button">
            Add Note
          </button>
        )}
      </div>
      <div className="note-list">
        {notes.map((note, index) => (
          <div key={index} className="note-card">
            <h2 className="note-card-title">{note.title}</h2>
            <p className="note-card-body">{note.body}</p>
            <div className="note-card-buttons">
              <button onClick={() => editNote(index)} className="note-edit-button">
                Edit
              </button>
              <button onClick={() => deleteNote(index)} className="note-delete-button">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteApp;
