const Skill = require("../models/skills");

const createSkill = async (req, res) => {
    const { name, description } = req.body;
    try {
        const skill = new Skill({
            name,
            description
        });
        await skill.save();
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
        res.status(500).json({ message: "Failed to get skills", error: error.message });
    }
};

const getSkillById = async (req, res) => {
    const { skillId } = req.params;
    try {
        const skill = await Skill.findById(skillId);
        if (!skill) {
            throw Error("Skill not found");
        }
        res.status(200).json({ message: "Skill retrieved successfully", skill });
    } catch (error) {
        res.status(404).json({ message: "Skill not found", error: error.message });
    }
};

const updateSkill = async (req, res) => {
    const { name, description } = req.body;
    const { skillId } = req.params;
    try {
        const updatedSkill = await Skill.findByIdAndUpdate(
            skillId,
            { name, description },
            { new: true }
        );
        if (!updatedSkill) {
            throw Error("Skill not found");
        }
        res.status(200).json({ message: "Skill updated successfully", skill: updatedSkill });
    } catch (error) {
        res.status(404).json({ message: "Failed to update skill", error: error.message });
    }
};

const deleteSkill = async (req, res) => {
    const { skillId } = req.params;
    try {
        const deletedSkill = await Skill.findByIdAndDelete(skillId);
        if (!deletedSkill) {
            throw Error("Skill not found");
        }
        res.status(200).json({ message: "Skill deleted successfully", skill: deletedSkill });
    } catch (error) {
        res.status(404).json({ message: "Failed to delete skill", error: error.message });
    }
};

module.exports = {
    createSkill,
    getAllSkills,
    getSkillById,
    updateSkill,
    deleteSkill
};
