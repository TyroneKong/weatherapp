const express = require("express");
const router = express.Router();
require("dotenv").config();
const currentLocationWeatherController = require("../controllers/currentLocationWeather");

router.get(
  "/weatherLocation/:latitude/:longitude",
  currentLocationWeatherController.getCurrentLocationWeather
);

module.exports = router;
