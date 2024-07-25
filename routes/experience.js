const express = require("express");
const router = express.Router();
const {
    createExperience,
    getAllExperiences,
    getExperienceById,
    updateExperience,
    deleteExperience
} = require("../controllers/experiences");

// Routes
router.post("/", createExperience);
router.get("/", getAllExperiences);
router.get("/:experienceId", getExperienceById);
router.put("/:experienceId", updateExperience);
router.delete("/:experienceId", deleteExperience);

module.exports = router;
