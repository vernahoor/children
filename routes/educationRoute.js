const express = require("express");
const eduController = require("../controllers/educationController");
const router = express.Router();
router.post("/", eduController.addEducation);
router.get("/", eduController.getEducations);
router.get("/:id", eduController.getEducationById);
module.exports = router;
