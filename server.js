require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connection = require('./database/connection');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const userRoutes = require('./routes/users');
const projectRoutes = require('./routes/projects'); 
const educationRoutes = require('./routes/education');
const experienceRoutes = require('./routes/experiences');
const certificateRoutes = require('./routes/certificates');
const skillRoutes = require('./routes/skills');

// API Endpoints
app.use('/users', userRoutes);
app.use('/projects', projectRoutes); 
app.use('/education', educationRoutes);
app.use('/experiences', experienceRoutes);
app.use('/certificates', certificateRoutes);
app.use('/skills', skillRoutes);

// Server Initialization
const PORT = process.env.PORT || 3000; // Default to 3000 if PORT is not set
app.listen(PORT, () => {
    connection.checkConnection();
    console.log(`Server is running on port: ${PORT}`);
});
