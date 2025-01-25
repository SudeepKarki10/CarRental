const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  getCars,
  getCarById,
  createCar,
} = require("../controllers/carController");

const router = express.Router();

router.route("/").get(getCars).post(protect, createCar);

router.route("/:id").get(getCarById);

module.exports = router;
