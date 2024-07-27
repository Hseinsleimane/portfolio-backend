const express = require('express');
const router = express.Router();
const {
    createSkill,
    getAllSkills,
    getSkillById,
    updateSkill,
    deleteSkill
} = require("../controllers/skills");

// Routes for skills
router.post("/create", createSkill);
router.get("/getAll", getAllSkills);
router.get("/getById/:skillId", getSkillById);
router.put("/update/:skillId", updateSkill);
router.delete("/delete/:skillId", deleteSkill);

module.exports = router;
