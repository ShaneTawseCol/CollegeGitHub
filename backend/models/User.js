const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Import bcrypt for password hashing

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: {
    type: String,
    required: true,
  },
  preferences: {
    unit: { type: String, default: 'Celsius' },
    notifications: { type: Boolean, default: true }
  }
});

// Encrypt password before saving the user
userSchema.pre('save', function(next) {
  if (!this.isModified('password')) {
    return next();
  }

  // Generate salt and hash the password
  const salt = bcrypt.genSaltSync(10);
  this.password = bcrypt.hashSync(this.password, salt);
  next();
});

module.exports = mongoose.model('User', userSchema);
