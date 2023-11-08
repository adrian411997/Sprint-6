const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  category: { type: String, require: true },
  date: { type: Date, require: true },
  description: { type: String, require: true },
  image: { type: String, require: true },
  place: { type: String, require: true },
  price: { type: Number, require: true },
  capacity: { type: Number, require: true },
  assistance: { type: Number, require: true },
});

const eventModel = mongoose.model("events", eventSchema);

module.exports = { eventModel };
