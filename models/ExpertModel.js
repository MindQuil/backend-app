const mongoose = require('mongoose');

const therapistSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  licenseNumber: {
    type: String,
    required: true,
    unique: true,
  },
  specialties: {
    type: [String],
    required: true,
  },
  yearsOfExperience: {
    type: Number,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  hourlyRate: {
    type: Number,
    required: true,
  },
});

const Therapist = mongoose.model('Therapist', therapistSchema);

module.exports = Therapist;
