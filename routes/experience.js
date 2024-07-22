const express = require("express");
const router = express.Router();
const {
    createExperience,
    getAllExperiences,
    getExperienceById,
    updateExperience,
    deleteExperience
} = require("../controllers/experiences");

// Routes for experiences
router.post("/create", createExperience);
router.get("/getAll", getAllExperiences);
router.get("/getById/:experienceId", getExperienceById);
router.put("/update/:experienceId", updateExperience);
router.delete("/delete/:experienceId", deleteExperience);

module.exports = router;
