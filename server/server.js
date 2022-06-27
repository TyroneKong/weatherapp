const express = require("express");
const app = express();
const PORT = 8100;
const cors = require("cors");
const currentlocationweatherRoute = require("./routes/CurrentLocationWeatherRoute");
const SearchLocation = require("./routes/SearchLocationRoute");

app.use(express.json());
app.use(cors());
app.use("/", currentlocationweatherRoute);
app.use("/", SearchLocation);

app.get("/", (req, res) => {
  res.json("welcome to the weather api");
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`listening on port ${PORT}`);
  }
});
