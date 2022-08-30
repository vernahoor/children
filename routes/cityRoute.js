const express = require("express");
const cityController = require("../controllers/cityController");
const router = express.Router();
router.post("/", cityController.addCity);
router.get("/", cityController.getCities);
router.get("/:id", cityController.getCityById);
module.exports = router;
