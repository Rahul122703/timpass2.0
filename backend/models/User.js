const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },  // 'password' field here
  phone_number: { type: String, required: true },
  address: { type: String, required: true },
  user_type: { type: String, enum: ["Citizen", "Municipal Officer", "Worker"], required: true },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
