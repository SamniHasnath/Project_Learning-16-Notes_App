import { useEffect, useState } from "react";
import API from "./api";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";
import "./App.css";


function App() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const res = await API.get("/");
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="container">
      <h1>Notes App</h1>
      <NoteForm fetchNotes={fetchNotes} />
      <NotesList notes={notes} fetchNotes={fetchNotes} />
    </div>
  );
}

export default App;