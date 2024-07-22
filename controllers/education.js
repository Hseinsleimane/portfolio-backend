const Education = require("../models/education");

const createEducation = async (req, res) => {
    const { institution, degree, fieldOfStudy, startDate, endDate, grade, description } = req.body;
    try {
        if (!institution || !degree || !fieldOfStudy || !startDate || !endDate)
            throw Error("All required fields must be filled!");

        const education = await Education.create({
            institution,
            degree,
            fieldOfStudy,
            startDate,
            endDate,
            grade,
            description
        });
        await education.save();
        
        res.status(200).json({ message: "Education added successfully", education });
    } catch (error) {
        res.status(500).json({ message: "Failed to add education", error: error.message });
    }
};

const getEducationById = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id) throw Error("No id detected to continue");
        const education = await Education.findById(id);
        if (!education) throw Error("Education not found");
        res.status(200).json({ message: "Education retrieved successfully", education });
    } catch (error) {
        res.status(500).json({ message: "Failed to get education", error: error.message });
    }
}

const getAllEducations = async (req, res) => {
    try {
        const educations = await Education.find({});
        res.status(200).json({ message: "Educations retrieved successfully", educations });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred during selecting all educations', error: error.message })
    }
}

const updateEducation = async (req, res) => {
    const { institution, degree, fieldOfStudy, startDate, endDate, grade, description } = req.body;
    const { id } = req.params;
    try {
        if (!id) throw Error("No id sent as parameter");
        const education = await Education.findByIdAndUpdate(id, { institution, degree, fieldOfStudy, startDate, endDate, grade, description }, { new: true });
        if (!education) throw Error("Error while updating");
        res.status(200).json({ message: "Updating education successfully", education });
    } catch (error) {
        res.status(500).json({ message: "Failed to update education", error: error.message })
    }
}

const deleteEducation = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id) throw Error("No id passed as parameter");
        const education = await Education.findByIdAndDelete(id);
        if (!education) throw Error("An error occurred");
        const educations = await Education.find({});
        res.status(200).json({ message: "Education deleted successfully", educations });
    } catch (error) {
        res.status(500).json({ message: "An error occurred during deleting education", error: error.message })
    }
}

module.exports = { createEducation, getEducationById, getAllEducations, updateEducation, deleteEducation };