const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  start_time: Date,
  end_time: Date,
  red_count: { type: Number, default: 0 },
  yellow_count: { type: Number, default: 0 },
  green_count: { type: Number, default: 0 },
});

module.exports = mongoose.model("Session", sessionSchema);
//Session created
