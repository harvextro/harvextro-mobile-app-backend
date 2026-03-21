const Session = require("./models/Session");
const DailyStats = require("./models/DailyStats");
const ActivityLog = require("./models/ActivityLog");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/chilli_robot");

// ✅ API 1: Start Session
app.post("/api/start-session", async (req, res) => {
  try {
    const session = new Session({
      start_time: new Date(),
    });

    await session.save();

    await ActivityLog.create({
      event: "Robot started",
      timestamp: new Date(),
    });

    res.json(session);
  } catch (error) {
    res.status(500).json({
      message: "Error starting session",
    });
  }
});

// Server start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
