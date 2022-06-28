import React from "react";
import "./TodaysWeather.scss";

export const TodayWeather = ({ data }) => {
  return (
    <div className="todaysWeather">
      <h2>
        {data?.timezone}
        <br />
        {data?.current.temp} ℃
      </h2>

      <img
        className="todaysWeather__icon"
        src={`http://openweathermap.org/img/wn/${data?.current.weather[0].icon}@2x.png`}
        alt="weathericon"
      ></img>
      <p>
        Humidity: {data?.current.humidity} ℃
        <br />
        Wind Speed: {data?.current.wind_speed}
        <br /> mph Feels like:
        {data?.current.feels_like}
      </p>
    </div>
  );
};
