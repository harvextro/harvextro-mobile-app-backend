const mongoose = require("mongoose");

const dailyStatsSchema = new mongoose.Schema({
  date: String,
  red: Number,
  yellow: Number,
  green: Number,
});

module.exports = mongoose.model("DailyStats", dailyStatsSchema);
// created DailyStatus
