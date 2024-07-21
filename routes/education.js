const express = require("express");
const router = express.Router();
const {
    createEducation,
    getEducationById,
    getAllEducations,
    updateEducation,
    deleteEducation
} = require("../controllers/education");

router.get("/getAll", getAllEducations);
router.get("/getById/:id", getEducationById);
router.post("/create", createEducation);
router.put("/update/:id", updateEducation);
router.delete("/delete/:id", deleteEducation);

module.exports = router;