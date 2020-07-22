const express = require("express");
//controllers
const {
  taskCreate,
  taskList,
  taskDelete,
  taskUpdated,
} = require("../controllers/taskController");
const router = express.Router();

//task list
router.get("/", taskList);

//task create
router.post("/", taskCreate);

//task delete
router.delete("/:taskId", taskDelete);

//task updated
router.put("/:taskId", taskUpdated);

module.exports = router;
