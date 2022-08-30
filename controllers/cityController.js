const City = require("../models/City.js");
const mongoose = require("mongoose");
const addCity = async (req, res) => {
  try {
    const city = await City.create(req.body);
    res.json(city);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
const getCities = async (req, res) => {
  try {
    const cities = await City.aggregate([
      {
        $lookup: {
          from: "regions",
          localField: "_id",
          foreignField: "city_id",
          as: "regions",
        },
      },
      {
        $unwind: {
          path: "$regions",
        },
      },

      {
        $lookup: {
          from: "educations",
          localField: "regions._id",
          foreignField: "region_id",
          as: "regions.educations",
        },
      },
      {
        $lookup: {
          from: "populations",
          localField: "regions._id",
          foreignField: "region_id",
          as: "regions.populations",
        },
      },
      {
        $lookup: {
          from: "hosbitals",
          localField: "regions._id",
          foreignField: "region_id",
          as: "regions.hospitals",
        },
      },
      {
        $unwind: {
          path: "$regions.populations",
        },
      },

      {
        $group: {
          _id: "$_id",
          name: { $first: "$name" },
          lat: { $first: "$lat" },
          long: { $first: "$long" },
          country: { $first: "$country" },
          iso2: { $first: "$iso2" },
          populations_num: { $sum: "$regions.populations.total" },

          regions: { $push: "$regions" },
        },
      },
    ]);
    res.json(cities);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
const getCityById = async (req, res) => {
  try {
    const city = await City.aggregate([
      {
        $match: { _id: mongoose.Types.ObjectId(req.params.id) },
      },
      {
        $lookup: {
          from: "regions",
          localField: "_id",
          foreignField: "city_id",
          as: "regions",
        },
      },
      {
        $unwind: {
          path: "$regions",
        },
      },

      {
        $lookup: {
          from: "educations",
          localField: "regions._id",
          foreignField: "region_id",
          as: "regions.educations",
        },
      },
      {
        $lookup: {
          from: "populations",
          localField: "regions._id",
          foreignField: "region_id",
          as: "regions.populations",
        },
      },
      {
        $lookup: {
          from: "hosbitals",
          localField: "regions._id",
          foreignField: "region_id",
          as: "regions.hospitals",
        },
      },
      {
        $unwind: {
          path: "$regions.populations",
        },
      },

      {
        $group: {
          _id: "$_id",
          name: { $first: "$name" },
          lat: { $first: "$lat" },
          long: { $first: "$long" },
          country: { $first: "$country" },
          iso2: { $first: "$iso2" },
          populations_num: { $sum: "$regions.populations.total" },

          regions: { $push: "$regions" },
        },
      },
    ]);
    res.json(city);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
module.exports = {
  addCity,
  getCities,
  getCityById,
};
