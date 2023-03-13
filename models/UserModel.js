const mongoose = require('mongoose');
const sha1 = require('sha1');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    default: '',
  },
  bio: {
    type: String,
  },
  isTherapist: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

UserSchema.pre('save', async function hashPassword(next) {
  const hashedPassword = sha1(this.password);

  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(hashedPassword, salt);

  this.password = passwordHash;
  next();
});

UserSchema.methods.isPasswordMatch = async function hashPassword(password) {
  try {
    const hashedPassword = await bcrypt.compare(sha1(password), this.password);
    return hashedPassword;
  } catch (error) {
    throw new Error('Error comparing passwords');
  }
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
