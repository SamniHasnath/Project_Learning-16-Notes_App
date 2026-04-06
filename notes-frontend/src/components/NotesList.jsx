import API from "../api";

function NotesList({ notes, fetchNotes }) {

  const deleteNote = async (id) => {
    await API.delete(`/${id}`);
    fetchNotes();
  };

  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => deleteNote(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default NotesList;