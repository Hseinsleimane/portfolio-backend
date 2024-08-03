const Experience = require("../models/experience");
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    const token = jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: '1d' });
    return token;
};

const createExperience = async (req, res) => {
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
        res.status(500).json({ message: "Failed to get experiences", error: error.message });
    }
};

const getExperienceById = async (req, res) => {
    const { experienceId } = req.params;
    try {
        const experience = await Experience.findById(experienceId);
        if (!experience) {
            throw Error("Experience not found");
        }
        res.status(200).json({ message: "Experience retrieved successfully", experience });
    } catch (error) {
        res.status(404).json({ message: "Experience not found", error: error.message });
    }
};

const updateExperience = async (req, res) => {
    const { title, company, location, startDate, endDate, description } = req.body;
    const { experienceId } = req.params;
    try {
        const updatedExperience = await Experience.findByIdAndUpdate(
            experienceId,
            { title, company, location, startDate, endDate, description },
            { new: true }
        );
        if (!updatedExperience) {
            throw Error("Experience not found");
        }
        res.status(200).json({ message: "Experience updated successfully", experience: updatedExperience });
    } catch (error) {
        res.status(404).json({ message: "Failed to update experience", error: error.message });
    }
};

const deleteExperience = async (req, res) => {
    const { experienceId } = req.params;
    try {
        const deletedExperience = await Experience.findByIdAndDelete(experienceId);
        if (!deletedExperience) {
            throw Error("Experience not found");
        }
        res.status(200).json({ message: "Experience deleted successfully", experience: deletedExperience });
    } catch (error) {
        res.status(404).json({ message: "Failed to delete experience", error: error.message });
    }
};

module.exports = {
    createExperience,
    getAllExperiences,
    getExperienceById,
    updateExperience,
    deleteExperience
};
