import mongoose from "mongoose";

// The DB connection logic
//  If the app grows, this might move somewhere else 
const connectDB =async () => {
  const mongoUri =process.env.MONGO_URI;
  // Just for the clarity, I am pushing this out

  if (!mongoUri) {
    console.log("MONGO_URI is missing in env"); 
    // it saved this once
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB is connected successfully");
  } 
  catch (err) {
    console.log("Database connection is failed");
    console.error(err.message);
    // For now I am logging this message
    process.exit(1);
  }
};

export default connectDB;
