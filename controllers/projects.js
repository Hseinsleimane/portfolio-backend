const Project = require("../models/project");
const Joi = require('joi');
const cache = require('memory-cache');
const projectSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    startDate: Joi.date().required(),
    endDate: Joi.date().optional(),
    url: Joi.string().optional()
});

const createProject = async (req, res) => {
    const { error } = projectSchema.validate(req.body);
    if (error) return res.status(400).json({ message: "Validation error", error: error.details[0].message });

    const { name, description, startDate, endDate, url } = req.body;
    try {
        const project = await Project.create({
            name,
            description,
            startDate,
            endDate,
            url
        });
        res.status(201).json({ message: "Project added successfully", project });
    } catch (error) {
        res.status(500).json({ message: "Failed to add project", error: error.message });
    }
};

const getAllProjects = async (req, res) => {
    let projects = cache.get('projects');
    try {
        const projects = await Project.find({});
        cache.put('projects', projects, 60000); // Cache for 1 minute
        res.json(projects);
        res.status(200).json({ message: "Projects retrieved successfully", projects });
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve projects", error: error.message });
    }
};

const getProjectById = async (req, res) => {
    const { projectId } = req.params;
    try {
        const project = await Project.findById(projectId);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }
        res.status(200).json({ message: "Project retrieved successfully", project });
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve project", error: error.message });
    }
};

const updateProject = async (req, res) => {
    const { error } = projectSchema.validate(req.body);
    if (error) return res.status(400).json({ message: "Validation error", error: error.details[0].message });

    const { projectId } = req.params;
    try {
        const updatedProject = await Project.findByIdAndUpdate(
            projectId,
            req.body,
            { new: true }
        );
        if (!updatedProject) {
            return res.status(404).json({ message: "Project not found" });
        }
        res.status(200).json({ message: "Project updated successfully", project: updatedProject });
    } catch (error) {
        res.status(500).json({ message: "Failed to update project", error: error.message });
    }
};

const deleteProject = async (req, res) => {
    const { projectId } = req.params;
    try {
        const deletedProject = await Project.findByIdAndDelete(projectId);
        if (!deletedProject) {
            return res.status(404).json({ message: "Project not found" });
        }
        res.status(200).json({ message: "Project deleted successfully", project: deletedProject });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete project", error: error.message });
    }
};

module.exports = {
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject
};
