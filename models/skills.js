const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    proficiency: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'], required: true },
    category: { type: String, enum: ['Technical', 'Soft', 'Language', 'Other'], required: true },
});

const Skill = mongoose.model("Skill", skillSchema);

module.exports = Skill;
