const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    requered: true,
  },
  LastName: {
    type: String,
    requered: true,
  },
  email: {
    type: String,
    requered: true,
  },
  password: {
    type: String,
    requered: true,
  },
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
