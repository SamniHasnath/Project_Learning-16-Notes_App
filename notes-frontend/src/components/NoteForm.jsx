import { useState } from "react";
import API from "../api";

function NoteForm({ fetchNotes }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/", { title, content });

    setTitle("");
    setContent("");

    fetchNotes(); // refresh list
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <br />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />
      <br />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;