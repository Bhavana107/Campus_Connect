const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const assignmentRoutes = require("./routes/assignmentRoutes");
const authRoutes = require("./routes/authRoutes");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();
const PORT = process.env.PORT || 5000;
const allowedOrigins = (process.env.CLIENT_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
  next();
});

app.use("/api/assignments", assignmentRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Campus Connect API is running" });
});

app.use((err, req, res, next) => {
  console.error("Server error:", err.message);
  const status = err.status ||
    (err.name === "ValidationError" ? 400 : 500);
  res.status(status).json({
    success: false,
    error: { status, message: err.message || "Internal Server Error" }
  });
});

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  return app;
};

if (require.main === module) {
  startServer().catch((error) => {
    console.error(`Server startup failed: ${error.message}`);
    process.exitCode = 1;
  });
}
    
module.exports = { app, startServer };


