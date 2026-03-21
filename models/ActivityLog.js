const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  event: String,
  timestamp: Date,
});

module.exports = mongoose.model("ActivityLog", activitySchema);
// added activity log
