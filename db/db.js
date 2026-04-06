const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "notes_db",
  password: "sam341@",
  port: 5432,
});

module.exports = pool;