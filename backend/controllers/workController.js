const Work = require('../models/Work');

// Create new work
exports.createWork = async (req, res) => {
  try {
    const work = new Work(req.body);
    await work.save();
    res.status(201).json({ message: "Work assigned successfully", work });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all works
exports.getWorks = async (req, res) => {
  try {
    const works = await Work.find();
    res.status(200).json(works);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
