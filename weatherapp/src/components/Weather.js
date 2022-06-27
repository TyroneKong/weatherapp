import axios from "axios";
import React, { useEffect, useState } from "react";
import WeatherCards from "./WeatherCards";
import { Search } from "./Search";

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
  }, []);

  // fetch weather data
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8100/weatherLocation/${latitude}/${longitude}
    
`
      );
      console.log(response.data);
      setWeatherData(response.data);

      console.log(response.data.timezone);
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
      <button onClick={handleClick}>Click here for weather data</button>
      {weatherdata ? <WeatherCards data={weatherdata} /> : null}
      <Search />
    </div>
  );
};
