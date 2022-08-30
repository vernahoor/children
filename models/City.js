const mongoose = require("mongoose");
const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name required"],
  },
  iso2: {
    type: String,
  },
  long: {
    type: String,
  },
  lat: {
    type: String,
  },
  country: {
    type: String,
    required: [true, "country required"],
  },
  populations_num: {
    type: Number,
    default: 0,
  },
  educations_num: {
    type: Number,
    default: 0,
  },
  hospitals_num: {
    type: Number,
    default: 0,
  },
  Regions_num: {
    type: Number,
    default: 0,
  },
  regions: {
    type: Array,
  },
});
module.exports = mongoose.model("city", citySchema);
