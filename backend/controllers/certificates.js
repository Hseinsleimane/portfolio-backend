const Certificate = require("../models/certificates");
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    const token = jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: '1d' });
    return token;
};

const createCertificate = async (req, res) => {
    const { title, description, issuer, issueDate, expirationDate, imageUrl } = req.body;
    try {
        const certificate = await Certificate.create({
            title,
            description,
            issuer,
            issueDate,
            expirationDate,
            imageUrl
        });
        res.status(201).json({ message: "Certificate added successfully", certificate });
    } catch (error) {
        res.status(500).json({ message: "Failed to add certificate", error: error.message });
    }
};

const getAllCertificates = async (req, res) => {
    try {
        const certificates = await Certificate.find({});
        res.status(200).json({ message: "Certificates retrieved successfully", certificates });
    } catch (error) {
        res.status(500).json({ message: "Failed to get certificates", error: error.message });
    }
};

const getCertificateById = async (req, res) => {
    const { certificateId } = req.params;
    try {
        const certificate = await Certificate.findById(certificateId);
        if (!certificate) {
            throw Error("Certificate not found");
        }
        res.status(200).json({ message: "Certificate retrieved successfully", certificate });
    } catch (error) {
        res.status(404).json({ message: "Certificate not found", error: error.message });
    }
};

const updateCertificate = async (req, res) => {
    const { title, description, issuer, issueDate, expirationDate, imageUrl } = req.body;
    const { certificateId } = req.params;
    try {
        const updatedCertificate = await Certificate.findByIdAndUpdate(
            certificateId,
            { title, description, issuer, issueDate, expirationDate, imageUrl },
            { new: true }
        );
        if (!updatedCertificate) {
            throw Error("Certificate not found");
        }
        res.status(200).json({ message: "Certificate updated successfully", certificate: updatedCertificate });
    } catch (error) {
        res.status(404).json({ message: "Failed to update certificate", error: error.message });
    }
};

const deleteCertificate = async (req, res) => {
    const { certificateId } = req.params;
    try {
        const deletedCertificate = await Certificate.findByIdAndDelete(certificateId);
        if (!deletedCertificate) {
            throw Error("Certificate not found");
        }
        res.status(200).json({ message: "Certificate deleted successfully", certificate: deletedCertificate });
    } catch (error) {
        res.status(404).json({ message: "Failed to delete certificate", error: error.message });
    }
};

module.exports = {
    createCertificate,
    getAllCertificates,
    getCertificateById,
    updateCertificate,
    deleteCertificate
};
