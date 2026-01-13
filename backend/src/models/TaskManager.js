import mongoose from "mongoose";

// Task Schema

const taskSchema = new mongoose.Schema(
  
  {
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModel",
    required: true
    },

    title: {
    type: String,
    required: true,
    trim: true
    },

    description: {
    type: String,
    default: ""
    },

    status: {
    type: String,
    enum: ["pending", "in-progress", "completed"],
    default: "pending"
    },

    dueDate: {
    type: Date
    // I am leaving this optional
    }
   // It is handled by timestamps
  },
  
  {
    timestamps: true
  }
);

// import mongoose from "mongoose";

// Task schema
// This might grow a bit once reminders / priorities are added
const taskSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    title: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      default: ""
    },

    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      default: "pending"
    },

    dueDate: {
      type: Date
      // leaving this optional for now
    }
    // createdAt is handled by timestamps
  },
  
  {
    timestamps: true
  }
);

// I am keeping this model separately for readability
const Task = mongoose.model("TaskManager", taskSchema);

export default Task;
const Task = mongoose.model("TaskManager", taskSchema);

export default Task;
