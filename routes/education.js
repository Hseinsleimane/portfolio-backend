const express = require("express");
const router = express.Router();
const {
    createEducation,
    getEducationById,
    getAllEducations,
    updateEducation,
    deleteEducation
} = require("../controllers/education");

// Routes
router.post("/", createEducation);
router.get("/", getAllEducations);
router.get("/:id", getEducationById);
router.put("/:id", updateEducation);
router.delete("/:id", deleteEducation);

module.exports = router;
