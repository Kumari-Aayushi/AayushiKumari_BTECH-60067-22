import express from "express";
import Task from "../models/TaskManager.js";
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();
// Create a task
router.post("/", requireAuth, async (req, res) => {
  const task = new Task({ ...req.body, userId: req.userId });
  await task.save();
  res.json(task);
});

// Get tasks (filter by status)
router.get("/", requireAuth, async (req, res) => {
  const filter = { userId: req.userId };
  if (req.query.status) {
  filter.status = req.query.status;  }
  const tasks = await Task.find(filter);
  res.json(tasks);
});


// Update a task
router.put("/:id", requireAuth, async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true });
  res.json(task);
});


// Delete a task
router.delete("/:id", requireAuth, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task is deleted" });
});
export default router;
