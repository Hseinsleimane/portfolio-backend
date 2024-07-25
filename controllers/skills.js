const Skill = require("../models/skills");
const Joi = require('joi');

const skillSchema = Joi.object({
    name: Joi.string().required(),
    level: Joi.string().required()
});

const createSkill = async (req, res) => {
    const { error } = skillSchema.validate(req.body);
    if (error) return res.status(400).json({ message: "Validation error", error: error.details[0].message });

    const { name, level } = req.body;
    try {
        const skill = await Skill.create({
            name,
            level
        });
        res.status(201).json({ message: "Skill added successfully", skill });
    } catch (error) {
        res.status(500).json({ message: "Failed to add skill", error: error.message });
    }
};

const getAllSkills = async (req, res) => {
    try {
        const skills = await Skill.find({});
        res.status(200).json({ message: "Skills retrieved successfully", skills });
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve skills", error: error.message });
    }
};

const getSkillById = async (req, res) => {
    const { skillId } = req.params;
    try {
        const skill = await Skill.findById(skillId);
        if (!skill) {
            return res.status(404).json({ message: "Skill not found" });
        }
        res.status(200).json({ message: "Skill retrieved successfully", skill });
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve skill", error: error.message });
    }
};

const updateSkill = async (req, res) => {
    const { error } = skillSchema.validate(req.body);
    if (error) return res.status(400).json({ message: "Validation error", error: error.details[0].message });

    const { skillId } = req.params;
    try {
        const updatedSkill = await Skill.findByIdAndUpdate(
            skillId,
            req.body,
            { new: true }
        );
        if (!updatedSkill) {
            return res.status(404).json({ message: "Skill not found" });
        }
        res.status(200).json({ message: "Skill updated successfully", skill: updatedSkill });
    } catch (error) {
        res.status(500).json({ message: "Failed to update skill", error: error.message });
    }
};

const deleteSkill = async (req, res) => {
    const { skillId } = req.params;
    try {
        const deletedSkill = await Skill.findByIdAndDelete(skillId);
        if (!deletedSkill) {
            return res.status(404).json({ message: "Skill not found" });
        }
        res.status(200).json({ message: "Skill deleted successfully", skill: deletedSkill });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete skill", error: error.message });
    }
};

module.exports = {
    createSkill,
    getAllSkills,
    getSkillById,
    updateSkill,
    deleteSkill
};
