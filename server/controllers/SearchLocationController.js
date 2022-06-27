const axios = require("axios");

exports.getSearchWeatherLocation = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${req.params.input}&appid=${process.env.APIkey}&units=metric`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
  }
};
