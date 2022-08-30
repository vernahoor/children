const mongoose = require("mongoose");
const ageGroup18Schema = new mongoose.Schema({
  city: {
    type: String,
    required: [true, "city required"],
  },
});
module.exports = mongoose.model("age_groups_18", ageGroup18Schema);
