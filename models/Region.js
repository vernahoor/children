const mongoose = require("mongoose");
const regionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name required"],
  },
  city_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "city",
  },
  populations: {
    type: Array,
  },
  educations: {
    type: Array,
  },
  hospitals: {
    type: Array,
  },
});
module.exports = mongoose.model("region", regionSchema);
