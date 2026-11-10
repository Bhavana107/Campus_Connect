const mongoose = require("mongoose");

const connectDB = async (uri = process.env.MONGO_URI) => {
  if (!uri) {
    console.warn("MONGO_URI is not configured. Starting in demo mode without MongoDB.");
    return false;
  }

  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected successfully");
    return true;
  } catch (error) {
    console.warn(`MongoDB connection failed: ${error.message}. Starting in demo mode.`);
    return false;
  }
};

module.exports = connectDB;


