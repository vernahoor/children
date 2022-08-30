const Education = require("../models/Education.js");
const addEducation = async (req, res) => {
  try {
    const education = await Education.create(req.body);
    res.json(education);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
const getEducations = async (req, res) => {
  try {
    const educations = await Education.find();
    res.json(educations);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
const getEducationById = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    res.json(education);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
module.exports = {
  addEducation,
  getEducations,
  getEducationById,
};
