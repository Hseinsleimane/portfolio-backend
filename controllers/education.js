const Education = require("../models/education");
const Joi = require('joi');

const educationSchema = Joi.object({
    institution: Joi.string().required(),
    degree: Joi.string().required(),
    fieldOfStudy: Joi.string().required(),
    startDate: Joi.date().required(),
    endDate: Joi.date().optional(),
    grade: Joi.string().optional(),
    description: Joi.string().optional()
});

const createEducation = async (req, res) => {
    const { error } = educationSchema.validate(req.body);
    if (error) return res.status(400).json({ message: "Validation error", error: error.details[0].message });

    const { institution, degree, fieldOfStudy, startDate, endDate, grade, description } = req.body;
    try {
        const education = await Education.create({
            institution,
            degree,
            fieldOfStudy,
            startDate,
            endDate,
            grade,
            description
        });
        res.status(201).json({ message: "Education added successfully", education });
    } catch (error) {
        res.status(500).json({ message: "Failed to add education", error: error.message });
    }
};

const getEducationById = async (req, res) => {
    const { id } = req.params;
    try {
        const education = await Education.findById(id);
        if (!education) {
            return res.status(404).json({ message: "Education not found" });
        }
        res.status(200).json({ message: "Education retrieved successfully", education });
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve education", error: error.message });
    }
}

const getAllEducations = async (req, res) => {
    try {
        const educations = await Education.find({});
        res.status(200).json({ message: "Educations retrieved successfully", educations });
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve educations', error: error.message });
    }
}

const updateEducation = async (req, res) => {
    const { error } = educationSchema.validate(req.body);
    if (error) return res.status(400).json({ message: "Validation error", error: error.details[0].message });

    const { id } = req.params;
    try {
        const education = await Education.findByIdAndUpdate(id, req.body, { new: true });
        if (!education) {
            return res.status(404).json({ message: "Education not found" });
        }
        res.status(200).json({ message: "Education updated successfully", education });
    } catch (error) {
        res.status(500).json({ message: "Failed to update education", error: error.message });
    }
}

const deleteEducation = async (req, res) => {
    const { id } = req.params;
    try {
        const education = await Education.findByIdAndDelete(id);
        if (!education) {
            return res.status(404).json({ message: "Education not found" });
        }
        res.status(200).json({ message: "Education deleted successfully", education });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete education", error: error.message });
    }
}

module.exports = {
    createEducation,
    getEducationById,
    getAllEducations,
    updateEducation,
    deleteEducation
};
