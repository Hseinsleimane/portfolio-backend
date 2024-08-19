const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  issuer: { type: String, required: true },
  issueDate: { type: Date, required: true },
  expirationDate: { type: Date }, 
  imageUrl: { type: String }, 
});

const Certificate = mongoose.model("Certificate", certificateSchema);

module.exports = Certificate;
