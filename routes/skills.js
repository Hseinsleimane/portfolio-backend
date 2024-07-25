const express = require("express");
const router = express.Router();
const {
    createSkill,
    getAllSkills,
    getSkillById,
    updateSkill,
    deleteSkill
} = require("../controllers/skills");

// Routes
router.post("/", createSkill);
router.get("/", getAllSkills);
router.get("/:skillId", getSkillById);
router.put("/:skillId", updateSkill);
router.delete("/:skillId", deleteSkill);

module.exports = router;
