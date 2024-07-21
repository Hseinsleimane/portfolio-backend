const express = require("express");
const router = express.Router();
const {
    createProject,
    getProjectById,
    getAllProjects,
    updateProject,
    deleteProject
} = require("../controllers/projects");

router.get("/getAll", getAllProjects);
router.get("/getById/:id", getProjectById);
router.post("/create", createProject);
router.put("/update/:id", updateProject);
router.delete("/delete/:id", deleteProject);

module.exports = router;