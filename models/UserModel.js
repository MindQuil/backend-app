const mongoose = require('mongoose');
// const sha1 = require('sha1');
// const bcrypt = require('bcrypt');

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

// Hash the password before saving the user
// UserSchema.pre('save', async (next) => {
//     const hashedPassword = sha1(this.password);

//     const salt = await bcrypt.genSalt(10);
//     const passwordHash = await bcrypt.hash(hashedPassword, salt);

//     this.password = passwordHash;
//     next();
//   });

//   // Check if a given password matches the ...
//   // user's password in the database
// UserSchema.methods.isPasswordMatch = async (password) => {
//     const hashedPassword = sha1(password);

//     // Compare the hashed password with ...
//     // the hashed password in the database using bcrypt
//     return await bcrypt.compare(hashedPassword, this.password);
// };

const User = mongoose.model('User', UserSchema);

module.exports = User;
