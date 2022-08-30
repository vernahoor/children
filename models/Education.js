const mongoose = require("mongoose");
const educationSchema = new mongoose.Schema(
  {
    education_type: {
      type: String,
      required: [true, "education_type required"],
    },
    city: {
      type: String,
      required: [true, "city required"],
    },
    teachers: {
      type: Number,
      required: [true, "teachers required"],
    },
    students: {
      type: Number,
      required: [true, "students required"],
    },
    type: {
      type: String,
      required: [true, "type required"],
    },
    year: {
      type: String,
      required: [true, "year required"],
    },
    residence: {
      type: String,
      required: [true, "residence required"],
    },
    dependency: {
      type: String,
      required: [true, "dependency required"],
    },
    level: {
      type: String,
      required: [true, "level required"],
    },
  },
  {
    timestamp: true,
  }
);
module.exports = mongoose.model("education", educationSchema);
