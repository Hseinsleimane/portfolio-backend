const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    description: { type: String },
    // Add more fields as per your schema requirements
});

const Experience = mongoose.model("Experience", experienceSchema);

module.exports = Experience;
