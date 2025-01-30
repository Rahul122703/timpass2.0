const express = require('express');
const router = express.Router();
const complaintController = require('../controllers/complaintController');

// Route for creating a complaint
router.post('/create', complaintController.createComplaint);

// Route for getting all complaints
router.get('/', complaintController.getComplaints);

module.exports = router;
