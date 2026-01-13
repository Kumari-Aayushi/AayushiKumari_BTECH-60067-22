import mongoose from "mongoose";

// User schema
// I might add roles later
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true 
      // trimming the code
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true 
      // makes login 
    },

    password: {
      type: String,
      required: true
      // hashing is handled in middleware not in this
    }
    // TODO: I can add timestamps or lastLogin
  },
  
  {
    timestamps: true // added later when needed, but leaving it here now
  }
);

// Model name 
const User = mongoose.model("User", userSchema);

export default User;
