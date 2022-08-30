const express = require("express");
const hosController = require("../controllers/hospitalController");
const router = express.Router();
router.post("/", hosController.addHospital);
router.get("/", hosController.getHospitals);
router.get("/:id", hosController.getHospitalById);
module.exports = router;
