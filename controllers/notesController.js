const pool = require("../db/db");

// CREATE
exports.createNote = async (req, res) => {
  const { title, content } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *",
      [title, content]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL
exports.getNotes = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM notes ORDER BY id DESC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ONE
exports.getNoteById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("SELECT * FROM notes WHERE id=$1", [id]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const result = await pool.query(
      "UPDATE notes SET title=$1, content=$2 WHERE id=$3 RETURNING *",
      [title, content, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
exports.deleteNote = async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query("DELETE FROM notes WHERE id=$1", [id]);
    res.json({ message: "Note deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};