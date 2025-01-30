const Complaint = require('../models/Complaint');

// Create a new complaint
exports.createComplaint = async (req, res) => {
  try {
    const complaint = new Complaint(req.body);
    await complaint.save();
    res.status(201).json({ message: "Complaint filed successfully", complaint });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all complaints
exports.getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.status(200).json(complaints);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
