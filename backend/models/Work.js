const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  assigned_officer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  assigned_worker_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ["Assigned", "In Progress", "Completed"], default: "Assigned" },
}, { timestamps: true });

module.exports = mongoose.model('Work', workSchema);
