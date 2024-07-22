const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    technologies: { type: [String], required: true },
    link: { type: String }
});

const Projects = mongoose.model('Projects', projectSchema);

module.exports = Projects;