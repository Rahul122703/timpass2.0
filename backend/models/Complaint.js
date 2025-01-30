const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  category: { type: String, enum: ["Pothole", "Streetlight", "Garbage", "Water Issue"], required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  image_url: { type: String },
  status: { type: String, enum: ["Pending", "In Progress", "Resolved", "Rejected"], default: "Pending" },
  assigned_officer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('Complaint', complaintSchema);
