const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  issuer: { type: String, required: true },
  issueDate: { type: Date, required: true },
  expirationDate: { type: Date }, // Optional field for certificates that expire
  imageUrl: { type: String }, // Optional field for storing image URL of the certificate
  // Add more fields as per your schema requirements
});

const Certificate = mongoose.model("Certificate", certificateSchema);

module.exports = Certificate;
