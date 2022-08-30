const express = require("express");
const popController = require("../../controllers/population/populationMiddleYearController");
const router = express.Router();
router.get("/", popController.getPopulations);

module.exports = router;
