const express = require("express");
const regionController = require("../controllers/regionController");
const router = express.Router();
router.post("/", regionController.addRegion);
router.get("/", regionController.getRegions);
router.get("/:id", regionController.getRegionById);
module.exports = router;
