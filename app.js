const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");

//route
const taskRoutes = require("./routes/tasks");

//Express App Instance
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/tasks", taskRoutes);

app.listen(8000, () => {
  console.log("The app is running on localhost:8000");
});
