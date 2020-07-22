const express = require("express");
const cors = require("cors");

//Data
const tasks = require("./tasks");

//Express App Instance
const app = express();

app.use(cors());

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.listen(8000, () => {
  console.log("The app is running on localhost:8000");
});
