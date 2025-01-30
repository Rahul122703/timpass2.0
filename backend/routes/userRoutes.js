const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route for creating a user
router.post('/create', userController.createUser);

// Route for getting all users
router.post('/login', userController.loginUser);

module.exports = router;
