const express = require("express");
const cors = require("cors");

//Data
let tasks = require("./tasks");

//Express App Instance
const app = express();

app.use(cors());

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.delete("/tasks/:taskId", (req, res) => {
  const { taskId } = req.params;
  const foundTask = tasks.find((task) => task.id !== +taskId);
  if (foundTask) {
    tasks = tasks.filter((task) => task.id !== +foundTask);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

app.listen(8000, () => {
  console.log("The app is running on localhost:8000");
});
