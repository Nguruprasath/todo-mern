const express = require("express");
const Todo = require("../models/Todo.js");


const router = express.Router();


// GET /todos
router.get("/", async (req, res) => {
try {
const todos = await Todo.find().sort({ createdAt: -1 });
res.json(todos);
} catch (err) {
res.status(500).json({ error: "Failed to fetch todos" });
}
});


router.post("/", async (req, res) => {
  try {
    const { text } = req.body; // <- make sure this is here
    const newTodo = new Todo({ text }); // <- text must go in
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (err) {
    res.status(500).json({ error: "Failed to create todo" });
  }
});


// PUT /todos/:id
router.put("/:id", async (req, res) => {
try {
const { id } = req.params;
const { text, completed } = req.body;
const updatedTodo = await Todo.findByIdAndUpdate(
id,
{ text, completed },
{ new: true }
);
res.json(updatedTodo);
} catch (err) {
res.status(500).json({ error: "Failed to update todo" });
}
});


// DELETE /todos/:id
router.delete("/:id", async (req, res) => {
try {
const { id } = req.params;
await Todo.findByIdAndDelete(id);
res.json({ message: "Todo deleted" });
} catch (err) {
res.status(500).json({ error: "Failed to delete todo" });
}
});


module.exports = router;