const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();
const searchLocationWeatherController = require("../controllers/SearchLocationController");

router.get(
  "/searchLocation/:input",
  searchLocationWeatherController.getSearchWeatherLocation
);

module.exports = router;
