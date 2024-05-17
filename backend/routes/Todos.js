const express = require("express");
const router = express.Router();
const Todo = require("../models/Todos");

// Get alle Todo routes
// Gør brug af async fordi der skal bruges en await
router.get("/", async (res, req) => {
  const todos = await Todo.find();
  req.json(todos);
});

// Lav ny Todo
router.post("/new", async (req, res) => {
  const newTodo = new Todo(
    // req.body - Det vue appen sender når det er indstalleret
    {
      author: "Nanna",
      todo: "Lave lektier",
    }
  );
  const savedTodo = await newTodo.save();
  res.json(savedTodo);
});

// Get todo med id
router.get("/get/:id", async (req, res) => {
  const todoGet = await Todo.findById({ _id: req.params.id });
  res.json(todoGet);
});

// delete todo med id
router.delete("/delete/:id", async (req, res) => {
  const todoDelete = await Todo.findByIdAndDelete({ _id: req.params.id });
  res.json(todoDelete);
});

// update todo med id
router.put("/update/:id", async (req, res) => {
  const todoUpdate = await Todo.updateOne({
    // { _id req.params.id} , { $set: req.body }
    author: "Kasper",
    todo: "Arbejde",
  });
  res.json(todoUpdate);
});

module.exports = router;
