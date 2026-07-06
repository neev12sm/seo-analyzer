const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  url: String,
  status: {
    type: String,
    default: "pending"
  },
  report: Object,
  score: Number
}, { timestamps: true });

module.exports = mongoose.model("Report", reportSchema);