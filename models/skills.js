const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String }
    // Add more fields as per your schema requirements
});

const Skill = mongoose.model("Skill", skillSchema);

module.exports = Skill;
