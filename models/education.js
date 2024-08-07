const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
    institution: { type: String, required: true },
    degree: { type: String, required: true },
    fieldOfStudy: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    grade: { type: String },
    description: { type: String }
});

const Education = mongoose.model('Education', educationSchema);

module.exports = Education;