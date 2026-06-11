import API from "../api";

function NotesList({ notes, fetchNotes }) {

  const deleteNote = async (id) => {
    await API.delete(`/${id}`);
    fetchNotes();
  };

  if (notes.length === 0) {
    return <p className="empty-state">No notes yet. Add one above!</p>;
  }

  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <div key={note.id} className="note">
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button className="delete-btn" onClick={() => deleteNote(note.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default NotesList;