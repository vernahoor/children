const mongoose = require("mongoose");
const hosbitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name required"],
  },
  doctors: {
    type: Number,
    required: [true, "doctors required"],
  },
  patients: {
    type: Number,
    required: [true, "patients required"],
  },
  region_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "region",
  },
});
module.exports = mongoose.model("hosbital", hosbitalSchema);
