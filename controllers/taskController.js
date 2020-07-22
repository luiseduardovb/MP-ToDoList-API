//Data
let tasks = require("../tasks");

exports.taskList = (req, res) => {
  res.json(tasks);
};

exports.taskCreate = (req, res) => {
  const id = tasks[tasks.length - 1].id + 1;
  const newTask = { id, complete: false, ...req.body };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

exports.taskDelete = (req, res) => {
  const { taskId } = req.params;
  const foundTask = tasks.find((task) => task.id === +taskId);
  if (foundTask) {
    tasks = tasks.filter((task) => task.id !== +foundTask.id);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};

exports.taskUpdated = (req, res) => {
  const { taskId } = req.params;
  const foundTask = tasks.find((task) => task.id === +taskId);
  if (foundTask) {
    // foundTask.complete = req.body.complete;
    task.complete = !task.complete;
    res.status(204).end();
  } else res.status(404).json({ message: "Task not found" });
};
