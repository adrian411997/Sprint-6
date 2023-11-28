const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const eventSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
});

eventSchema.methods.hashPassword = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

eventSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const eventModel = mongoose.model("customers", eventSchema);

module.exports = { eventModel };
