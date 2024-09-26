const express = require("express");
const mysql = require("mysql2");
var cors = require("cors");

const app = express();

// middleware to avoid cors problems
app.use(cors({ origin: "https://127.0.0.1:8000" }));

// middleware to parse JSON data
app.use(express.json());

// DATABASE
const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "200684",
  database: "descobridores_db",
});

// ROUTES

// GAMES
app.get("/games", async (req, res) => {
  try {
    const [results] = await database.promise().query("SELECT * from games");
    res.status(200).json(results);
  } catch (error) {
    res.status(500).send(`Erro ao buscar dados: ${error}`);
    console.log(error);
  }
});

// create a game
app.post("/games", async (req, res) => {
  const { game_name } = req.body;

  if (!game_name) {
    return res.status(400).json({ error: "Game name is required" });
  }

  try {
    const [result] = await database
      .promise()
      .query("INSERT INTO games (game_name) VALUES (?)", [game_name]);
    res.status(201).json({ id: result.insertId, game_name });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});

// update a game
app.put("/games/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!id) {
    return res.status(400).json({ error: "Game id is required" });
  }

  if (!name) {
    return res.status(400).json({ error: "Game name is required" });
  }

  try {
    const [result] = await database
      .promise()
      .query("UPDATE games SET game_name = ? WHERE id = ?", [name, id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Game not found" });
    }
    res.json({ message: "Game updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});

// DELETE a game
app.delete("/games/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await database
      .promise()
      .query("DELETE FROM games WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Game not found" });
    }
    res.json({ message: "Game deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});

// MESSAGES

// get all messages
app.get("/messages", async (req, res) => {
  const { game_id } = req.query;

  if (!game_id) {
    return res.status(400).json({ error: "Game id is required" });
  }

  try {
    const [results] = await database
      .promise()
      .query("SELECT * FROM messages WHERE game_id = ?", [game_id]);

    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).send(`Error: Could not get messages`);
  }
});

// POST a message
app.post("/messages", async (req, res) => {
  const { username, date, avatar_number, message, is_admin, game_id } =
    req.body;

  const query = `
    INSERT INTO messages (username, date, avatar_number, message, is_admin, game_id) 
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  try {
    const [result] = await database
      .promise()
      .query(query, [
        username,
        date,
        avatar_number,
        message,
        is_admin,
        game_id,
      ]);

    res.status(201).json({ status: "success" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});

// DELETE a message
app.delete("/messages/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await database
      .promise()
      .query("DELETE FROM messages WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Message not found" });
    }
    res.json({ message: "Message deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});

// SERVER

// run server
const port = 3000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
