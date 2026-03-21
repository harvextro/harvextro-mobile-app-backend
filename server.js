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

//  API 1: Start Session
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

//API 2: Add chilli detection data
app.post("/api/add-chilli", async (req, res) => {
  const { color, session_id } = req.body;

  const session = await Session.findById(session_id);

  if (color === "red") session.red_count++;
  if (color === "yellow") session.yellow_count++;
  if (color === "green") session.green_count++;

  await session.save();

  res.json({ message: "Updated successfully" });
});

//API : End Session
app.post("/api/end-session", async (req, res) => {
  const { session_id } = req.body;

  const session = await Session.findById(session_id);

  session.end_time = new Date();

  await session.save();

  await ActivityLog.create({
    event: "Robot stopped",
    timestamp: new Date(),
  });

  res.json(session);
});

//API 4: Get daily summery
app.get("/api/daily-summary", async (req, res) => {
  const today = new Date().toISOString().slice(0, 10);

  const sessions = await Session.find({
    start_time: {
      $gte: new Date(today),
    },
  });

  let red = 0;
  let yellow = 0;
  let green = 0;

  sessions.forEach((s) => {
    red += s.red_count;
    yellow += s.yellow_count;
    green += s.green_count;
  });

  res.json({
    red,
    yellow,
    green,
  });
});

//API 5: get session report
app.get("/api/session-report/:id", async (req, res) => {
  const session = await Session.findById(req.params.id);

  res.json(session);
});

// Server start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
