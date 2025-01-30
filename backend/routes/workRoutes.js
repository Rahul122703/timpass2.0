const express = require('express');
const router = express.Router();
const workController = require('../controllers/workController');

// Route for creating new work
router.post('/create', workController.createWork);

// Route for getting all works
router.get('/', workController.getWorks);

module.exports = router;
