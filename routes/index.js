const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/auth');

const userRoutes = require('./users');
const projectRoutes = require('./projects');
const educationRoutes = require('./education');
const experienceRoutes = require('./experiences');
const certificateRoutes = require('./certificates');
const skillRoutes = require('./skills');

// Public Routes
router.use('/users', userRoutes); // Registration and login might be public
router.use('/projects', projectRoutes);
router.use('/education', educationRoutes);
router.use('/experiences', experienceRoutes);
router.use('/certificates', certificateRoutes);
router.use('/skills', skillRoutes);

// Apply JWT authentication middleware to all routes
router.use(authenticateToken);

module.exports = router;
