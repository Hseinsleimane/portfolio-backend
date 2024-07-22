const express = require("express");
const router = express.Router();
const {
  createCertificate,
  getCertificateById,
  getAllCertificates,
  updateCertificate,
  deleteCertificate,
} = require("../controllers/certificates");

// Import middleware if needed
// const { authenticated } = require("../middlewares/auth");

// Routes
router.post("/create", createCertificate);
router.get("/getAll", getAllCertificates);
router.get("/getById/:certificateId", getCertificateById);
router.put("/update/:certificateId", updateCertificate);
router.delete("/delete/:certificateId", deleteCertificate);

module.exports = router;
