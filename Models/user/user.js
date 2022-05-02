const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: false },
  password: { type: String, required: false },
  id: { type: String },
  role: { type: String },
  firstName: { type: String },
  lastName: { type: String },
});

module.exports = mongoose.model("UserCollection", userSchema);
