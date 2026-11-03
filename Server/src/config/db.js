const mongoose = require("mongoose");

const connectDB = async (uri = process.env.MONGO_URI) => {
  if (!uri) {
    throw new Error("MONGO_URI is required. Set it in server/.env.");
  }

  await mongoose.connect(uri);
  console.log("MongoDB connected successfully");
};

module.exports = connectDB;


