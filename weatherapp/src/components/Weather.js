import axios from "axios";
import React, { useEffect, useState } from "react";
import WeatherCards from "./WeatherCards";
import { Search } from "./Search";
import { Button } from "@mui/material";
import { TodayWeather } from "./TodayWeather";
import "./Weather.scss";

export const Weather = () => {
  //set state
  const [weatherdata, setWeatherData] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  //get current location
  useEffect(() => {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      });
  }, [latitude, longitude]);

  // fetch weather data
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8200/weatherLocation/${latitude}/${longitude}
    
`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    fetchData();
  };

  return (
    <div>
      <h1> Current Location Weather</h1>
      <Button onClick={handleClick} variant="contained">
        Click here for weather data
      </Button>

      {weatherdata && (
        <div className="weatherdata">
          <TodayWeather data={weatherdata} />
          <WeatherCards data={weatherdata} />
        </div>
      )}
      <Search />
    </div>
  );
};
