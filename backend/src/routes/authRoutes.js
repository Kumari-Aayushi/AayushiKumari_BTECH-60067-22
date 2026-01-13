import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";
import protect from "../middleware/requireAuth.js";

const router = express.Router();

//  Register user
router.post("/register", async (req, res) =>{
  const{ name, email, password } = req.body;

  try{
    // Basic checks
    if (!email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword  });

    await newUser.save();

    res.json({ message: "User is registered successfully" });
  }catch (err) {
    // Duplicate email is most common issue here 
    res.status(500).json({ message: "Registration is failed" });  }
});

// Login user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try{
    const user = await User.findOne({ email });

    if(!user) {
      return res.status(400).json({ message: "User is not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) {
      return res.status(400).json({ message: "Invalid credentials found" });
    }

    const token =jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token });
  }catch (err) {
    res.status(500).json({ message: "Login failed" });
  }
});

// Update profile
 // Protected route

router.put("/profile", protect, async (req, res) => {
  try{
    await User.findByIdAndUpdate(req.userId, req.body, {
      new: true
    });

    res.json({ message: "Profile updated" });
  }catch (err) {
    res.status(500).json({ message: "Profile is not updated" });
  }
});

// Delete profile
 // Also protected

router.delete("/profile", protect, async (req, res) => {
  try{
    await User.findByIdAndDelete(req.userId);
    res.json({ message: "User deleted" });
  }catch (err) {
    res.status(500).json({ message: "Failed to delete user" });
  }
});

export default router;
