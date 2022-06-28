const axios = require("axios");

exports.getCurrentLocationWeather = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${req.params.latitude}&lon=${req.params.longitude}&units=metric&appid=${process.env.APIkey}
      `
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.log(response.data);
  }
};
