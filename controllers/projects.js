const Projects = require("../models/projects");

const createProject = async (req, res) => {
    const { title, description, startDate, endDate, technologies, link } = req.body;
    try {
        if (!title || !description || !startDate || !technologies)
            throw Error("All required fields must be filled!");

        const project = await Projects.create({
            title,
            description,
            startDate,
            endDate,
            technologies,
            link
        });
        await project.save();
        
        res.status(200).json({ message: "Project added successfully", project });
    } catch (error) {
        res.status(500).json({ message: "Failed to add a project", error: error.message });
    }
};

const getProjectById = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id) throw Error("No id detected to continue");
        const project = await Projects.findById(id);
        if (!project) throw Error("Project not found");
        res.status(200).json({ message: "Project retrieved successfully", project });
    } catch (error) {
        res.status(500).json({ message: "Failed to get the project", error: error.message });
    }
}

const getAllProjects = async (req, res) => {
    try {
        const projects = await Projects.find({});
        res.status(200).json({ message: "Projects retrieved successfully", projects });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred during selecting all projects', error: error.message })
    }
}

const updateProject = async (req, res) => {
    const { title, description, startDate, endDate, technologies, link } = req.body;
    const { id } = req.params;
    try {
        if (!id) throw Error("No id sent as parameter");
        const project = await Projects.findByIdAndUpdate(id, { title, description, startDate, endDate, technologies, link }, { new: true });
        if (!project) throw Error("Error while updating");
        res.status(200).json({ message: "Updating a project successfully", project });
    } catch (error) {
        res.status(500).json({ message: "Failed to update a project", error: error.message })
    }
}

const deleteProject = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id) throw Error("No id passed as parameter");
        const project = await Projects.findByIdAndDelete(id);
        if (!project) throw Error("An error occurred");
        const projects = await Projects.find({});
        res.status(200).json({ message: "Project deleted successfully", projects });
    } catch (error) {
        res.status(500).json({ message: "An error occurred during deleting a project", error: error.message })
    }
}

module.exports = { createProject, getProjectById, getAllProjects, updateProject, deleteProject };