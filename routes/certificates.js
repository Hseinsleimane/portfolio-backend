const express = require("express");
const router = express.Router();
const {
  createCertificate,
  getCertificateById,
  getAllCertificates,
  updateCertificate,
  deleteCertificate,
} = require("../controllers/certificates");

// Routes
router.post("/", createCertificate);
router.get("/", getAllCertificates);
router.get("/:certificateId", getCertificateById);
router.put("/:certificateId", updateCertificate);
router.delete("/:certificateId", deleteCertificate);

module.exports = router;
