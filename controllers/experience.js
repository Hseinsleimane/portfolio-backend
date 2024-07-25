const Experience = require("../models/experience");
const Joi = require('joi');

const experienceSchema = Joi.object({
    title: Joi.string().required(),
    company: Joi.string().required(),
    location: Joi.string().required(),
    startDate: Joi.date().required(),
    endDate: Joi.date().optional(),
    description: Joi.string().optional()
});

const createExperience = async (req, res) => {
    const { error } = experienceSchema.validate(req.body);
    if (error) return res.status(400).json({ message: "Validation error", error: error.details[0].message });

    const { title, company, location, startDate, endDate, description } = req.body;
    try {
        const experience = await Experience.create({
            title,
            company,
            location,
            startDate,
            endDate,
            description
        });
        res.status(201).json({ message: "Experience added successfully", experience });
    } catch (error) {
        res.status(500).json({ message: "Failed to add experience", error: error.message });
    }
};

const getAllExperiences = async (req, res) => {
    try {
        const experiences = await Experience.find({});
        res.status(200).json({ message: "Experiences retrieved successfully", experiences });
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve experiences", error: error.message });
    }
};

const getExperienceById = async (req, res) => {
    const { experienceId } = req.params;
    try {
        const experience = await Experience.findById(experienceId);
        if (!experience) {
            return res.status(404).json({ message: "Experience not found" });
        }
        res.status(200).json({ message: "Experience retrieved successfully", experience });
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve experience", error: error.message });
    }
};

const updateExperience = async (req, res) => {
    const { error } = experienceSchema.validate(req.body);
    if (error) return res.status(400).json({ message: "Validation error", error: error.details[0].message });

    const { experienceId } = req.params;
    try {
        const updatedExperience = await Experience.findByIdAndUpdate(
            experienceId,
            req.body,
            { new: true }
        );
        if (!updatedExperience) {
            return res.status(404).json({ message: "Experience not found" });
        }
        res.status(200).json({ message: "Experience updated successfully", experience: updatedExperience });
    } catch (error) {
        res.status(500).json({ message: "Failed to update experience", error: error.message });
    }
};

const deleteExperience = async (req, res) => {
    const { experienceId } = req.params;
    try {
        const deletedExperience = await Experience.findByIdAndDelete(experienceId);
        if (!deletedExperience) {
            return res.status(404).json({ message: "Experience not found" });
        }
        res.status(200).json({ message: "Experience deleted successfully", experience: deletedExperience });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete experience", error: error.message });
    }
};

module.exports = {
    createExperience,
    getAllExperiences,
    getExperienceById,
    updateExperience,
    deleteExperience
};
